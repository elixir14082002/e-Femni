import { blogs } from "../posts";
import BlogListBox from "../Components/BlogListBox";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core/";
import Navbar from "./Navbar";

const BlogPageLayout = () => {
  const params = useParams();
  const slug = params.slug;

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Box
        ml={5}
        mt={3}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack size={20} /> Back
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          width: "95%",
          marginTop: "1rem",
          marginBottom: "4rem",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: 5,
          }}
        >
          {blogs.map((post) => {
            return (
              <Box key={post.meta.id}>
                {post.meta.slug === slug && (
                  <Box
                    sx={{
                      // width: "90%",
                      bgcolor: "#FCFCFC",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "1rem",
                      marginLeft: "1rem",
                      padding: "1rem",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    {post.imgUrl && (
                      <Box
                        sx={{
                          width: "80%",
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            height: "300px",
                            marginBottom: "2.5rem",
                          }}
                          src={post.imgUrl}
                          alt={post.title}
                        ></img>
                      </Box>
                    )}
                    <Typography
                      variant="h3"
                      component="h1"
                      gutterBottom
                      sx={{
                        marginTop: "2.5rem",
                        marginBottom: "2.5rem",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "2.5rem",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom
                      sx={{
                        fontFamily: "Poppins",
                        width: "90%",
                        margin: "auto",
                        letterSpacing: "2px",
                        whiteSpace: "pre-line",
                        wordSpacing: "10px",
                        lineHeight: "1.8rem",
                      }}
                    >
                      <pre>{post.content}</pre>
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      By {post.meta.author}
                    </div>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "300",
              fontSize: "2.5rem",
            }}
          >
            Also Read
          </Typography>
          {blogs.map(
            (post) =>
              post.meta.slug !== slug && (
                <BlogListBox
                  key={post.meta.id}
                  shortTitle={post.meta.shortTitle}
                  shortDescription={post.meta.shortDescription}
                  slug={post.meta.slug}
                />
              )
          )}
        </Box>
      </Box>
    </div>
  );
};

export default BlogPageLayout;
