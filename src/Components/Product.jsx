import React from 'react';
import { Card, CardContent, makeStyles, Typography, Button, CardActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  singleCards: {
    width: "25%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
      marginBottom: theme.spacing(4)
    },
    margin: theme.spacing(4)
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "center"
    }
  }
}));

function Product() {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <Card className={classes.singleCards}>
        <CardContent>
          <Typography variant="h6">
            Product
          </Typography>
          <hr></hr>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" size="small">BUY</Button>

        </CardActions>
      </Card>
      <Card className={classes.singleCards}>
        <CardContent>
          <Typography variant="h6">
            Product
          </Typography>
          <hr></hr>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" size="small">BUY</Button>
        </CardActions>
      </Card>
      <Card className={classes.singleCards}>
        <CardContent>
          <Typography variant="h6">
            Product
          </Typography>
          <hr></hr>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" size="small">BUY</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product