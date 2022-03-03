import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Button,
  CardActions,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  singleCards: {
    width: "20rem",
    height: "29rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cards: {},
  img: {
    width: "auto",
    height: "10rem",
  },
  productName: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "5rem",
    padding: "0.5rem",
  },
}));

function Product({ imgUrl, productName, price }) {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <Card className={classes.singleCards}>
        <CardContent>
          <img src={imgUrl} alt="product" className={classes.img} />
        </CardContent>
        <CardContent>
          <Typography variant="h5">₹ {price}</Typography>
        </CardContent>
        <CardContent>
          <Box component="div" className={classes.productName}>
            {productName}
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" size="small">
            BUY
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;
