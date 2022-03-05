import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { makeStyles } from "@material-ui/core";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "80%",
    margin: "auto",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    marginTop: "2rem",
  },
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: "30rem",
  },
}));

function Carousel({ imgArr }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {imgArr.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className={classes.box}>
              <img className={classes.img} src={imgUrl} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
