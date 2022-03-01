import React from 'react';
import HeroCarousel from '../Components/HeroCarousel';
import Navbar from '../Components/Navbar';
import { Typography, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Product from '../Components/Product';
import { findByLabelText } from '@testing-library/react';


const useStyles= makeStyles((theme)=>({
  FAQtitle:{
    textAlign: "center",
    marginTop: theme.spacing(4),
    color: "#FF5C8D",
    fontWeight: "bold",
  },
  faq:{
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: "90%",
    margin: "0 auto"
  },
  row1:{
    display: "flex",
    flexDirection:"column",

  }
}));

function Home() {

  const classes= useStyles();

  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <div className={classes.row1}>
      <Product/>
      <Product/>
      <Product/>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Home;