import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";

const BlogListBox = ({ shortTitle, shortDescription, slug }) => {
    const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate(`/blogs/${slug}`);
      }}
      sx={{
        bgcolor: "#F8F8F8",
        width: "21.5rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      <Typography variant="h5" gutterBottom component="div">
        {shortTitle}
      </Typography>
      <Typography variant="body1" gutterBottom component="div" sx={{}}>
        {shortDescription}
      </Typography>
    </Box>
  );
};

export default BlogListBox;
