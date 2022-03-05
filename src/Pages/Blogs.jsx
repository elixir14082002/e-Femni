import { Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Components/Navbar";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../posts";
import Box from "@material-ui/core/Box";
import BlogListBox from "../Components/BlogListBox";

function Blogs() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt-token");
    try {
      jwt_decode(token);
    } catch (err) {
      Cookies.remove("jwt-token");
      navigate("/login");
    }
  });
  return (
    <div>
      <Navbar />
      <Box sx={{ width: "85%", margin: "auto", marginTop: "3rem" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            marginTop: "3rem",
            fontFamily: "Inter",
            fontWeight: "300",
            fontSize: "3.5rem",
          }}
        >
          Blogs
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "5rem",
          }}
        >
          {blogs.map((post) => (
            <BlogListBox
              key={post.meta.id}
              shortTitle={post.meta.shortTitle}
              shortDescription={post.meta.shortDescription}
              slug={post.meta.slug}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Blogs;
