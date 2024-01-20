// models/Repo.js
import mongoose from 'mongoose';

const repoSchema = new mongoose.Schema({
  uid: { type: String, unique: true },
  createdAt: Date,
  owner: String,
  repo: String,
  name: String,
  readme: String,
  description: String,
  stargazers_count: Number,
  forks_count: Number,
  topics: [String],
  fetchTime: Date,
  languages: [
    {
      name: String,
      size: Number,
    },
  ],
  issues: [
    {
      title: String,
      number: Number,
      body: String,
      labels: [String],
      comments: Number,
    },
  ],
});

const Repo = mongoose.model('Repo', repoSchema);

export default Repo;
