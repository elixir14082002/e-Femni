import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Product from "../Components/Product";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../products";

const useStyles = makeStyles((theme) => ({
  FAQtitle: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    color: "#FF5C8D",
    fontWeight: "bold",
  },
  faq: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: "90%",
    margin: "0 auto",
  },
  cart: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
  },
}));

function Home() {
  const classes = useStyles();
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

      <Carousel
        imgArr={[
          "https://media.istockphoto.com/photos/asian-woman-use-smart-phone-for-check-in-boarding-pass-outdoors-picture-id1354179247",
          "https://www.w3schools.com/css/img_chania.jpg",
        ]}
      />

      <div className={classes.cart}>
        {products.map(({ imgUrl, productName, price }) => (
          <Product imgUrl={imgUrl} productName={productName} price={price} />
        ))}
      </div>

      <Typography variant="h4" className={classes.FAQtitle}>
        FAQs
      </Typography>
      <hr width="50%" color="#FF5C8D" size="2"></hr>
      <div className={classes.faq}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Home;
