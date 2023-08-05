import { Box, Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}
      <TypoHeader>Become a Seller</TypoHeader>
      <TypoHeader>More</TypoHeader>

      <CartStyle display={"flex"}>
        <Link
          to={"/cart"}
          style={{ textDecoration: "none", color: "#fff", display: "flex" }}
        >
          <Badge badgeContent={cartItems?.item?.quantity ? 1 : 0} color={"error"}>
            <ShoppingCartIcon />
          </Badge>

          <Typography style={{ fontFamily: "inherit", marginLeft:7 }}>Cart</Typography>
        </Link>
      </CartStyle>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButtons;

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  alignItems: "center",
  "& > button, & > p, & > div": {
    marginLeft: 30,
    fontSize: 14,
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const TypoHeader = styled(Typography)`
  width: 112px;
  font-family: inherit;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 4px 40px;
  box-shadow: none;
  border-radius: 2px;
  margin-left: 20px;
  font-family: inherit;
`;

const CartStyle = styled(Box)(({ theme }) => ({
  position: "relative",
  left: -60,
  [theme.breakpoints.down("md")]: {
    left: 0,
  },
  textDecoration: "none",
}));
