import { Button, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { Link } from "react-router-dom";
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    CartList();
  }, [cartItems]);

  const CartList = () => {
    return Object.keys(cartItems).length > 0 ? (
      <Component container>
        <LeftComponent item xs={12} sm={12} md={9} lg={9}>
          <Header>
            <Typography>My Cart ({Object.keys(cartItems).length})</Typography>
          </Header>
          {Object.values(cartItems).map((item, index) => (
            <CartItems key={index} item={item} />
          ))}
          <Link to={"/payment"} style={{ textDecoration: "none" }}>
            <BottomWrapper>
              <StyledButton variant="contained">Place Order</StyledButton>
            </BottomWrapper>
          </Link>
        </LeftComponent>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <TotalView cartItems={Object.values(cartItems)} />
        </Grid>
      </Component>
    ) : (
      <EmptyCart />
    );
  };
  return <>{CartList()}</>;
}

export default Cart;
const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  background: "#D3D3D3",
  height: 574,
  marginTop: -5,
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;
