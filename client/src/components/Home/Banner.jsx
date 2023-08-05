import React from "react";
import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
function Banner() {
  const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: 250,
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 180,
    },
  }));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      slidesToSlide={1}
    >
      {bannerData?.map((item, index) => {
        return <Image src={item?.url} alt="banner" />;
      })}
    </Carousel>
  );
}

export default Banner;
