import { Grid, styled } from "@mui/material";
import React from "react";
import { imageURL } from "../../constants/data";

function MidSection() {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Wrapper lg={12} md={12} sm={12} xs={12} container>
        {imageURL?.map((item, index) => {
          return (
            <Grid item lg={4} md={4} sm={12}>
              <img
                src={item}
                key={index}
                alt="image"
                style={{ width: "100%" }}
              />
            </Grid>
          );
        })}
      </Wrapper>
      <Image src={url} alt="covid" />
    </>
  );
}

export default MidSection;

const Wrapper = styled(Grid)`
  margin-top: 15px;
  justify-content: space-between;
`;
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));
