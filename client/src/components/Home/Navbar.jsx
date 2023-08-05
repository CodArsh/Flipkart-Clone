import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";
function Navbar() {
  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflow:'hidden',
    [theme.breakpoints.down("lg")]: {
      margin: 0,
    },
  }));

  const Inbox = styled(Box)`
    padding: 20px 10px;
    text-align: center;
  `;

  const Text = styled(Typography)`
    font-size: 14px;
    font-family: inherit;
  `;
  return (
    <Container>
      {navData?.map((item, index) => {
        return (
          <Inbox key={index}>
            <img src={item?.url} alt="nav" style={{ width: 64 }} />
            <Text>{item?.text}</Text>
          </Inbox>
        );
      })}
    </Container>
  );
}

export default Navbar;
