import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getRepoData, getIssueData } from "../../../api";
import ReactMarkdown from 'react-markdown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const issues = [
  {
    id: 1,
    title: "Issue 1",
    description: "Description for Issue 1Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "John Doe",
    tags: ["bug", "feature"],
    status: "open",
  },
  {
    id: 2,
    title: "Issue 2",
    description: "Description for Issue 2Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "Jane Doe",
    tags: ["enhancement"],
    status: "closed",
  },
  {
    id: 3,
    title: "Issue 3",
    description: "Description for Issue 3 Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "Jane Doe",
    tags: ["enhancement"],
    status: "closed",
  },
  {
    id: 4,
    title: "Issue 4",
    description: "Description for Issue 4Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "Jane Doe",
    tags: ["enhancement"],
    status: "closed",
  },
  {
    id: 5,
    title: "Issue 5",
    description: "Description for Issue 4Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "Jane Doe",
    tags: ["enhancement"],
    status: "closed",
  },
  {
    id: 6,
    title: "Issue 6",
    description: "Description for Issue 4Description for Issue 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed vulputate lectus et risus scelerisque convallis. Quisque quis felis vitae dolor congue fermentum. Ut eget ullamcorper purus. Sed nec libero nec metus elementum finibus. Nullam et metus id libero ultrices tempus. Sed pellentesque bibendum nisi, vel facilisis neque hendrerit et. Donec id facilisis eros. Nam ac rhoncus velit. Aenean facilisis feugiat lectus non convallis. Integer fringilla nunc vel neque eleifend, vel cursus odio luctus. Proin dapibus orci non cursus dictum. Vivamus ultricies posuere orci, id tempor velit tincidunt et. Fusce ut diam in dui hendrerit fringilla.",
    assigned: "Jane Doe",
    tags: ["enhancement"],
    status: "closed",
  },
];
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8B5CF6"
    }
  },
});

const IssuePage = () => {
  console.log("HEHGEYGFUESFBSEIFJSNEFLSLFSLMLKVMSDV");
  // const { id } = useParams();


  const params = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [selectedIssue, setIssueData] = React.useState(null);
  const [repositoryData, setRepoData] = React.useState(null);
  const createdAtDate = new Date(selectedIssue?.createdAt)?.toLocaleDateString()
  const [tip, setTip] = React.useState(null);
  // const params = useParams();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTip = (event, newValue) => {
    setTip(newValue);
  };
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repositoryData = await getIssueData(params.owner, params.repo, params.issueNumber);
        console.log("HHHHwjoifjwffjjfjfjfjjfjfjfjfjfjjjfj")
        console.log(repositoryData);
        if (repositoryData.repo === null) {
          setLoading(false);
        }
        setRepoData(repositoryData);
        setIssueData(repositoryData.repo.issues.find(
          (issue) => issue.number === parseInt(params.issueNumber, 10)
        ));
        setTip(repositoryData.issue);
        handleChangeTip(repositoryData.issue);
        console.log(selectedIssue)
        // setTip(repositoryData.data.repo.iss)

        console.log("HHHH")
        console.log(selectedIssue);
        // setRows(repositoryData.repo.issues.map((issue) => createData(issue.number, issue.title, issue.labels.join(','), issue.number, issue.labels)));
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const issueData = await getIssueData(params.owner, params.repo,params.issueNumber);
  //       console.log(issueData);
  //       if (issueData.repo === null) {
  //         setLoading(false);
  //       }
  //       setIssueData(issueData);
  //       setLoading(false);
  //       // You can set the data to state or perform other actions here
  //     } catch (error) {
  //       console.error('Error fetching issue data:', error);
  //       // Handle the error as needed
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  if (loading) {
    return (
      <>
        <div className="w-screen h-[50vh]">
          <div className="w-11/12 mx-auto text-center">
            <h1>
              Fetching issue data <span className="loading loading-dots loading-lg"></span>
            </h1>
          </div>
        </div>
      </>
    );
  }
  if (!selectedIssue) {
    return <p className="text-red-500">Error fetching issue data.</p>;
  }


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Issue" {...a11yProps(0)} />
            {/* <Tab label="Tips" {...a11yProps(1)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="pl-20 pr-20">

            <div
              className="text-center flex flex-cols justify-center items-start rounded-xl border bg-purple-700 bg-opacity-20 border-gray-300 p-9"
              style={{
                margin: "40px 80px 0px 80px", // Adjusted margin here
              }}
            >
              <h2 className="text-2xl font-semibold mb-0 text-white uppercase">
                {selectedIssue.title}
                <span className="ml-3 text-contestlogo hover:text-white">
                  <a href={`https://github.com/${repositoryData.repo.owner}/${repositoryData.repo.repo}/issues/${selectedIssue.number}`} target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </h2>
            </div>

            <div
              className="flex flex-col items-start rounded-xl border bg-white bg-opacity-20 border-gray-300 p-16"
              style={{
                margin: "20px 80px 0 80px", // Adjusted margin here
              }}
            >
              <div className="grid grid-cols-1 gap-4 text-lg">
                <p className="text-white">
                  <div className="text-white font-bold uppercase">Issue ID </div>{" "}
                  <span className="text-white text-xl uppercase">{selectedIssue.number}</span>
                </p>
                <p className="text-white">
                  <div className="text-white font-bold uppercase"> Issue Description</div>{" "}
                  <div>
                    <ReactMarkdown>
                      {selectedIssue.body}
                    </ReactMarkdown>
                  </div>
                </p>
                {/* <p className="text-white">
            <div className="text-white font-bold uppercase">Expected Behavior</div>{" "}
            <div>{selectedIssue.assigned}</div>
          </p>
          <p className="text-white">
            <div className="text-white font-bold uppercase">Implimentation Steps</div>{" "}
            {selectedIssue.labels.join(", ")}
          </p>
          <p className="text-white">
            <span className="text-white font-bold uppercase">Status</span>{" "}
            {selectedIssue.status}
          </p> */}
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Tip generated by PaLM AI </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ReactMarkdown>
                        {repositoryData.issue}
                        </ReactMarkdown>
                    </Typography>
                    <br/>
                    <i>Disclaimer: AI can generate incorrect suggestions</i>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        {/* <CustomTabPanel value={tip} index={1}>
          <div
            className="flex flex-col items-start rounded-xl border bg-white bg-opacity-20 border-gray-300 p-16"
            style={{
              margin: "20px 80px 0 80px", // Adjusted margin here
            }}
          >
            <div className="grid grid-cols-1 gap-4 text-lg">
              <p className="text-white">
                <div className="text-white font-bold uppercase"> Tip to solve this issue by AI</div>{" "}
                <div>
                  <ReactMarkdown>
                    {selectedIssue.body}
                  </ReactMarkdown>
                </div>
              </p>
            </div>
          </div>

        </CustomTabPanel> */}
      </Box>
    </ThemeProvider>

  );
};

export default IssuePage;


