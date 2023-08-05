import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftBox>
        <Slide products={products} title="Deal of the Day" timer={true} />
      </LeftBox>
      <RightBox>
        <Image src={adURL} alt="ad" />
      </RightBox>
    </Component>
  );
}

export default MidSlide;

const Component = styled(Box)`
  display: flex;
`;

const LeftBox = styled(Box)(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "20%",
  background: "#fff",
  padding: 5,
  paddingTop: 13,
  marginTop: 10,
  marginLeft: 10,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Image = styled("img")({
  width: 220,
  height: "95%",
});
