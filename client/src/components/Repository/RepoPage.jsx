import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import ColumnGroupingTable from "./Table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Piechart from "./PieChart";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarIcon from '@mui/icons-material/Star';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ReactMarkdown from 'react-markdown'
import { getRepoData } from "../../../api";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const repositories = [
  {
    id: 132,
    assignes: "assigned",
    description:
      "zsedftgyujkl;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, et suscipit aliquam ut, nulla eum perferendis blanditiis provident incidunt expedita ipsam corporis totam excepturi, dolorum iure. Tempora reprehenderit provident necessitatibus ex possimus ea tempore, doloremque animi natus, commodi dolore reiciendis perspiciatis eligendi magnam tenetur est id molestiae distinctio vero! Aspernatur, at maiores dolorem ducimus beatae fuga ad velit odio impedit ea, placeat ut. Laboriosam illo, repellat dolores distinctio quos hic neque harum voluptatum. Neque dolores quasi impedit, itaque ab deleniti animi adipisci architecto veritatis! Numquam excepturi, accusantium officiis pariatur mollitia soluta. Veniam qui, nam natus laboriosam error debitis iure praesentium maiores voluptates quo aspernatur nemo laborum corrupti. In id harum blanditiis aut vero assumenda, molestiae, ea explicabo, totam quam aspernatur.",
    languages: ["html", "css", "js"],
    title: "Repository 1",
    starscount: 200,
    forks: 56,
    tags: ["code","c++","html"],
    createdBy: "Jashanpreet kaur"
  },
  {
    id: 145,
    assignes: "assigned",
    description:
      "zsedftgyujkl;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, et suscipit aliquam ut, nulla eum perferendis blanditiis provident incidunt expedita ipsam corporis totam excepturi, dolorum iure. Tempora reprehenderit provident necessitatibus ex possimus ea tempore, doloremque animi natus, commodi dolore reiciendis perspiciatis eligendi magnam tenetur est id molestiae distinctio vero! Aspernatur, at maiores dolorem ducimus beatae fuga ad velit odio impedit ea, placeat ut. Laboriosam illo, repellat dolores distinctio quos hic neque harum voluptatum. Neque dolores quasi impedit, itaque ab deleniti animi adipisci architecto veritatis! Numquam excepturi, accusantium officiis pariatur mollitia soluta. Veniam qui, nam natus laboriosam error debitis iure praesentium maiores voluptates quo aspernatur nemo laborum corrupti. In id harum blanditiis aut vero assumenda, molestiae, ea explicabo, totam quam aspernatur.",
    languages: ["html", "css", "js"],
    title: "Repository 2",
    starscount: 5,
    forks: 56,
    tags: ["code","javascript"],
    createdBy: "Tammana"
  },
];



const columns = [
  {
    id: 'issueNumber',
    label: 'Issue Number',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'title', label: 'Title', minWidth: 300 },
  { id: 'tags', label: 'Tags', minWidth: 100 },
  
  {
    id: 'assignee',
    label: 'Assignee',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'open',
    label: 'Open',
    minWidth: 170,
    align: 'right',
    format: (value, row) => (
      <Link to={`issue/${row.id}`} className='w-full'>
        {value}
      </Link>
    ),
  }
];

function createData(id, title, tags, issueNumber, assignee) {
  return {
    id,
    title,
    tags,
    issueNumber,
    assignee,
    open: <Link to={`issue/${id}`} className='w-full'><OpenInNewIcon /></Link>,
  };
}

// const rows = [
//   createData(1,'Resolving Git issues requires clear communication, collaboration, and effective problem-solving.', 'html,css,js', 1, "Jaseph"),
//   createData(3,'Resolving Git issues requires clear communication, collaboration, and effective problem-solving.', 'html,css,js', 3, "Jaseph"),
//   createData(4,'Issue 4', 'html,css,js', 4, "Jaseph"),
//   createData(2,'Issue 2', 'html,css,js', 2, "eitika"),
//   createData(5,'Issue 5', 'html,css,js', 5, "Jaseph"),
//   createData(6,'Issue 6', 'html,css,js', 6, "Jaseph"),
// ];

const RepoPage = () => {
  const { id } = useParams();

  // const selectedRepo = repositories.find(
  //   (repo) => repo.id === parseInt(id, 10)
  // );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [selectedRepo, setRepoData] = React.useState(null);
  const createdAtDate = new Date(selectedRepo?.createdAt)?.toLocaleDateString()
  const [rows, setRows] = React.useState([]);

  const params = useParams();
  // console.log(idk);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const repositoryData = await getRepoData(params.owner, params.repo);
        if (repositoryData.repo === null) {
          setLoading(false);
        }
        setRepoData(repositoryData.repo);
        console.log(repositoryData)
        setRows(repositoryData.repo.issues.map((issue) => createData(issue.number, issue.title, issue.labels.join(','), issue.number, issue.labels)));
        console.log(repositoryData);
        setLoading(false);
        // You can set the data to state or perform other actions here
      } catch (error) {
        console.error('Error fetching repository data:', error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return (
      <>
        <div className="w-screen h-[50vh]">
          <div className="w-11/12 mx-auto text-center">
            <h1>
              Fetching repository data <span className="loading loading-dots loading-lg"></span>
            </h1>
          </div>
        </div>
      </>
    );
  }
  if (!selectedRepo) {
    return <p className="text-red-500">Error fetching repo data.</p>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="max-w-4xl mx-auto p-8 rounded shadow text-left">
        <div>
          <div className="header text-left ml-6">
            <span className="text-4xl font-semibold mb-4 text-blue-50">
              {selectedRepo.name}
            </span>
            <StarIcon className="text-yellow-500 ml-2 mb-2 h-6 w-6 transition-transform transform hover:scale-110" style={{ color: 'yellow' }} />
            <span className="text-blue-50 h-6 w-6 transition-transform transform hover:scale-110">{selectedRepo.stargazers_count}</span>
            <div className="my-3">
              {selectedRepo.topics.map((item) => (
                <div className="badge badge-primary badge-outline ml-3 hover:bg-white transition-colors">{item}</div>
              ))}
            </div>
          </div>

          <h3 className="text-white ml-6">Owned by: {selectedRepo.owner}</h3>

          <h3 className="mb-10 text-gray-400 ml-6">Created: {createdAtDate}</h3>
        </div>
        <span className="text-xl font-semibold text-blue-50 ml-6 pt-4">
          Description {"(Generated by AI)"}
        </span>
        <div className="description mb-10 px-7 text-blue-50 w-full text-left">
          <p>
          <ReactMarkdown>
              {selectedRepo.description}
              </ReactMarkdown>
          </p>
        </div>
        <span className="text-xl font-semibold text-blue-50 ml-6 pt-4">
          Languages
        </span>
        <div className="mb-10">
          <Piechart languages={selectedRepo.languages} />
        </div>
        <div className="gap-4">
        <span className="text-xl font-semibold text-blue-50 ml-6 pt-4">
          Issues Available
        </span>
       
        <div className="my-10">
        <ColumnGroupingTable rows={rows} columns={columns} />
        </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RepoPage;



//left algin- about us heading,forks
