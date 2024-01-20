// routes/repoController.js
import Repo from "../models/Repo.js";
import { graphql } from "@octokit/graphql";
import User from "../models/User.js";

const MY_TOKEN = process.env.GITHUB_ACCESS_TOKEN;


// import express from 'express';
// import bodyParser from 'body-parser';
import { TextServiceClient } from '@google-ai/generativelanguage/build/src/index.js';  // Specify the actual file
// import axios from 'axios';
import { GoogleAuth } from 'google-auth-library';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

const MODEL_NAME = 'models/text-bison-001';

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey("AIzaSyCzu3VoKL90OJXiBWajsZW7VUb7lyCBZBg"),
});
const request = {
  body: {
    topic: `Your topic goes here`,
  }
};

const issueAI = async (issue, readme = null) => {
  console.log("----------------------------------------")
  console.log(issue);

  let prompt = `You have an issue with title : ${issue.title}. Read the above string and then write a short description in about a paragraph of the issue in markdown format and be accurate. Don't add contributors or any other information. Just write a short description of the issue. Don't add any installation steps or anything. Strictly only description. If there is a link, then include them together at the end using points. In markdown, add bullet to links`;
  if (issue.labels) {
    prompt += `The labels of the issue are ${issue.labels.join(", ")}.`;
  }
  if (issue.body) {
    prompt += `The body of the issue is ${issue.body}.`;
  }
  if (readme) {
    prompt += `The readme of the repo is ${readme}. USE readme only to add links. Don't add any other information from readme.`;
  }
  try {
    const result = await client.generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    });

    console.log(JSON.stringify(result, null, 2));
    console.log("ok");
    console.log(result[0].candidates[0].output);

    const generatedText = result[0]?.candidates[0]?.output || 'Failed to generate text.';
    console.log("---------------------------------------------------------------")
    console.log(generatedText);
    return generatedText;
  } catch (error) {
    console.error('Text generation error:', error);
    return null;
  }
};

const readmeAIfunc = async (readme, topics, languages) => {
  console.log(readme);
  let prompt = `You have a readme file string as : ${readme}. Read the above string and then write a short description in about a paragraph of the project in markdown format and be accurate. Don't add contributors or any other information. Just write a short description of the project. Don't add any installation steps or anything. Strictly only description. If there is a link, then include them together at the end using points enclose it in angle brackets. In markdown, add bullet to links`;
  if (topics) {
    prompt += `The topics of the repo are ${topics.join(", ")}.`;
  }
  if (languages) {
    prompt += `The languages used in the repo are ${languages.join(", ")}.`;
  }


  try {
    const result = await client.generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    });

    console.log(JSON.stringify(result, null, 2));
    console.log("ok");
    console.log(result[0].candidates[0].output);

    const generatedText = result[0]?.candidates[0]?.output || 'Failed to generate text.';
    console.log("---------------------------------------------------------------")
    console.log(generatedText);
    return generatedText;
  } catch (error) {
    console.error('Text generation error:', error);
    return null;
  }
};





// import { App } from "octokit";

// const app = new App({
//   appId: process.env.APP_ID,
//   privateKey: process.env.PRIVATE_KEY,
// });

// const test = async () => {
//   const idk = await app.octokit.graphql(`
//   query {
//     user(login: "pranshugupta54") {
//       login
//     }
//   }
//   `)
//   console.log(idk);
// }
// test();


const repoInfo = async (owner, repo, token = MY_TOKEN) => {
  const query = `
  query {
    repository(owner: "${owner}", name: "${repo}") {
      README: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
      readme: object(expression: "HEAD:readme.md") {
        ... on Blob {
          text
        }
      }
      owner {
        login
      }
      name
      description
      stargazerCount
      forkCount
      createdAt
      issues(last:100){
        nodes{
            title
            number
            body
            labels(first: 10) {
                nodes {
                    name
                }
        }
        }
      }
      languages(first:10){
        edges{
            node{
                name
            }
            size
        }
      }
      repositoryTopics(first: 10) {
        nodes {
          topic {
            name
          }
        }
      }
    }
  }`;
  console.log("----------------------------------------");
  console.log(token);
  try {
    const { repository } = await graphql(query, {
      headers: {
        authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    repository.readme = repository.README ? repository.README?.text : repository.readme?.text;
    repository.owner = repository.owner.login;
    const topics = repository.repositoryTopics.nodes.map(node => node.topic.name);
    repository.repositoryTopics = topics;
    // console.log(repository);
    console.log("------------------- REPOOO---------------------");
    // console.log(repository.repo)
    const uid = `${repository.owner}/${repo}`;
    let {
      name,
      description,
      stargazerCount,
      forkCount,
      readme,
      createdAt,
      repositoryTopics,
      issues,
      languages
    } = repository;
    const generatedReadme = await readmeAIfunc(description + " " + readme);
    if (generatedReadme) {
      description = generatedReadme;
    }

    console.log("----------------------------------------");
    console.log("----------------------------------------");
    console.log("----------------------------------------");
    // console.log(readme)

    const updatedRepo = await Repo.findOneAndUpdate(
      { owner, repo },
      {
        $set: {
          uid,
          readme,
          owner,
          repo,
          name,
          description,
          createdAt,
          languages: languages.edges.map((edge) => ({
            name: edge.node.name,
            size: edge.size,
          })),
          issues: issues.nodes.map((issue) => {
            return {
              title: issue.title,
              assignee: issue.assignee ? issue.assignee.nodes.map(assignee => assignee.login) : [],
              number: issue.number,
              body: issue.body,
              labels: issue.labels.nodes.map(label => label.name),
              comments: issue.comments,
            };
          }),
          stargazers_count: stargazerCount,
          forks_count: forkCount,
          topics: repositoryTopics.map((node) => node),
          fetchTime: new Date(),
        },
      },
      { upsert: true, new: true }
    ).select("-_id -updatedAt -__v");
    console.log("----------------------------------------");
    // console.log(updatedRepo);

    return updatedRepo;
  } catch (error) {
    console.error(error);
    return null;
  }

}
// repoInfo("digitomize", "digitomize");

const userReposAndInfo = async (token, userId) => {
  const query = `
  query {
    viewer {
      login
      name
      email
      repositories(first: 100){
        nodes {
          name
          description
          stargazerCount
          forkCount
          createdAt
          repositoryTopics(first:10){
              nodes{
                  topic{
                      name
                  }
              }
          }
        }
      }
    }
  }
  `;

  try {
    // Use @octokit/graphql to send the GraphQL request
    const { viewer } = await graphql(query, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    // Process user data and repositories as needed
    console.log('Fetched user data:', viewer);
    console.log('Fetched repositories:', viewer.repositories.nodes);

    // Save repositories in the User model
    await User.findByIdAndUpdate(userId, {
      $set: {
        repos: viewer.repositories.nodes.map(repo => ({
          name: repo.name || null,
          description: repo.description || null,
          stargazers_count: repo.stargazerCount || null,
          forks_count: repo.forkCount || null,
          topics: repo.repositoryTopics.nodes.map(topic => topic.topic.name),
          fetchTime: Date.now(),
        })),
      },
    }).select("-_id -updatedAt -__v");

    // Return the fetched data or perform further processing
    return { user: viewer, repositories: viewer.repositories.nodes };
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};


const issueData = async (req, res) => {
  const { owner, repo, number } = req.body;
  console.log("----------------------------------------");
  console.log(req.body);
  const githubToken = req.body?.githubAccessToken;

  try {
    // Check if the repo exists in MongoDB
    const existingRepo = await Repo.findOne({ owner, repo }).select("-_id -updatedAt -__v");

    if (existingRepo) {
      // Check if the fetch time is older than 12 hours
      const twelveHoursAgo = new Date();
      twelveHoursAgo.setHours(twelveHoursAgo.getHours() - 12);

      if (existingRepo.fetchTime < twelveHoursAgo) {
        // Call the update function to fetch data from GitHub API
        const updatedRepo = await repoInfo(owner, repo, githubToken);
        // const issues = await repoIssues(owner, repo);
        console.log("----------------------------------------");
        console.log("a");
        console.log(updatedRepo.issues);
        const issue = updatedRepo.issues.find(issue => issue.number == number);

        const newIssue = issueAI(issue, updatedRepo.readme);
        res.json({ message: 'Repo updated successfully!', repo: updatedRepo, issue: newIssue });
      } else {

        // const issues = await repoIssues(owner, repo);
        console.log("----------------------------------------");
        console.log("b");
        const issue = existingRepo.issues.find(issue => {
          console.log('Checking issue number:', issue.number, number);
          return issue.number == number;
        });
        console.log(issue);
        const newIssue = await issueAI(issue, existingRepo.readme);
        console.log(newIssue);
        res.json({ message: 'Repo data is up to date.', repo: existingRepo, issue: newIssue });
      }
    } else {
      // If repo not found, call the update function
      const newRepo = await repoInfo(owner, repo, githubToken);
      const issue = newRepo.issues.find(issue => issue.number === number);
        const newIssue = issueAI(issue, newRepo.readme);
      // const issues = await repoIssues(owner, repo);
      console.log("----------------------------------------");
      console.log("c");
      res.json({ message: 'Repo added successfully!', repo: newRepo, issue: newIssue });
    }
  } catch (error) {
    console.error('Error handling repo data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const repoData = async (req, res) => {
  const { owner, repo } = req.body;
  const githubToken = req.body?.githubAccessToken;
  console.log("----------------------------------------");
  console.log(githubToken);
  console.log(req.body);
  console.log("----------------------------------------");

  try {
    // Check if the repo exists in MongoDB
    const existingRepo = await Repo.findOne({ owner, repo }).select("-_id -updatedAt -__v");

    if (existingRepo) {
      // Check if the fetch time is older than 12 hours
      const twelveHoursAgo = new Date();
      twelveHoursAgo.setHours(twelveHoursAgo.getHours() - 12);

      if (existingRepo.fetchTime < twelveHoursAgo) {
        // Call the update function to fetch data from GitHub API
        let updatedRepo;
        if (githubToken) {
          updatedRepo = await repoInfo(owner, repo, githubToken);
        } else {
          updatedRepo = await repoInfo(owner, repo);
        }
        // const updatedRepo = await repoInfo(owner, repo, githubToken);
        // const issues = await repoIssues(owner, repo);
        console.log("----------------------------------------");
        res.json({ message: 'Repo updated successfully!', repo: updatedRepo });
      } else {
        // const issues = await repoIssues(owner, repo);
        console.log("----------------------------------------");
        res.json({ message: 'Repo data is up to date.', repo: existingRepo });
      }
    } else {
      // If repo not found, call the update function
      // const newRepo = await updateRepo(req.db, owner, repo);
      let newRepo;
      if (githubToken) {
        newRepo = await repoInfo(owner, repo, githubToken);
      } else {
        newRepo = await repoInfo(owner, repo);
      }
      // const issues = await repoIssues(owner, repo);
      console.log("----------------------------------------");
      res.json({ message: 'Repo added successfully!', repo: newRepo });
    }
  } catch (error) {
    console.error('Error handling repo data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { repoData, userReposAndInfo, issueData };
