import { useState, useEffect } from "react";

import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  borderbottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Typography)`
  float: right;
`;

const TotalAmount = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  border-top: 1px dashed #e0e0e0;
  padding: 20px 0;
  border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
  font-size: 16px;
  color: green;
`;

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
    console.log("DATA > ", cartItems);
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems?.map((item) => {
      price += item.price.cost;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography style={{ fontFamily: "inherit" }}>
          Price ({cartItems?.length} item)
          <Price component="span" style={{ fontFamily: "inherit" }}>
            ₹{price}
          </Price>
        </Typography>
        <Typography style={{ fontFamily: "inherit" }}>
          Discount
          <Price component="span" style={{ fontFamily: "inherit" }}>
            -₹{discount}
          </Price>
        </Typography>
        <Typography style={{ fontFamily: "inherit" }}>
          Delivery Charges
          <Price component="span" style={{ fontFamily: "inherit" }}>
            ₹40
          </Price>
        </Typography>
        <TotalAmount>
          Total Amount
          <Price>₹{price - discount + 40}</Price>
        </TotalAmount>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
