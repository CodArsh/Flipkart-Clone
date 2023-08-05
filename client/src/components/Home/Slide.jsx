import { Box, Button, Divider, styled, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
function Slide({ products, title, timer }) {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds}
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              alt="timer"
              style={{ width: 20, marginRight: 10 }}
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAll_Button variant="contained">View All</ViewAll_Button>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        slidesToSlide={1}
      >
        {products?.map((item, index) => {
          return (
            <Link
              to={`/product/${item?.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                textAlign="center"
                style={{ padding: "25px 15px" }}
                onClick={() => console.log(item?._id)}
              >
                <Image src={item?.url} alt="product" key={index} />
                <Text style={{ fontWeight: 700, color: "#212121" }}>
                  {item?.title?.shortTitle}
                </Text>
                <Text style={{ color: "green" }}>{item?.discount}</Text>
                <Text style={{ color: "#212121", opacity: 0.6 }}>
                  {item?.tagline}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </Component>
  );
}

export default Slide;

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const DealText = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  line-height: 30px;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;
const ViewAll_Button = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  border-radius: 2px;
  font-size: 12px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const Text = styled(Typography)`
  font-size: 13px;
  margin-top: 5px;
  font-family: inherit;
`;
