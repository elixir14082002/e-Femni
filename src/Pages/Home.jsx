import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core";
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
    marginTop: "5rem",
    marginBottom: "5rem",
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
          "/img/1.jpeg",
          "/img/FF1.jpeg",
          "/img/FF2.jpeg",
          "/img/FF3.jpeg",
          "/img/FF4.jpeg",
        ]}
      />

      <div className={classes.cart}>
        {products.map(({ imgUrl, productName, price }) => (
          <Product imgUrl={imgUrl} productName={productName} price={price} />
        ))}
      </div>
    </div>
  );
}

export default Home;
