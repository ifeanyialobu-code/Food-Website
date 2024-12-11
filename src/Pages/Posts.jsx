import React from 'react';
import { ClipLoader } from "react-spinners";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";



const Post = () => {
  const [getInfo, setGetInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  React.useEffect(() => {
    const getPost = async () => {
        let url = "https://jsonplaceholder.typicode.com/posts";

      try {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res);
        const fiveInfo = res.data.slice(0, 5);
        console.log("fivedata", fiveInfo);
        setGetInfo(fiveInfo);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color="red"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (error) {
    return <h1 style={{ color: "red" }}>ERROR: {error}</h1>;
  }

  return (
    <div>
      {getInfo.map((info, index) => (

        <ol key={info.id}>

          <li style={{ textAlign: "center" }}>
            User Unique ID: {info.userId}
          </li>
          <Typography variant="h5" style={{ color: "red" }}>
            Title: {info.title}
          </Typography>
          <Typography variant="h6">{info.body}</Typography>
          <Link to={`/posts/${info.id}`}>
          {" "}
          <button> CLick</button>
          </Link>
        </ol>
      ))}
    </div>
  );
};

export default Post;
