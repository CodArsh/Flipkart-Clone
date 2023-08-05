import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function ActionItems({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftBox>
      <Box style={{ padding: "15px 20px", border: "1px solid #ddd" }}>
        <Image src={product?.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00", marginTop: 10 }}
        onClick={() => addItemToCart()}
      >
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>
      <Link to={"/payment"} style={{ textDecoration: "none" }}>
        <StyledButton
          variant="contained"
          style={{ background: "#fb541b", marginTop: 10 }}
        >
          <FlashOnIcon />
          Buy now
        </StyledButton>
      </Link>
    </LeftBox>
  );
}

export default ActionItems;

const Image = styled("img")({
  width: "90%",
  padding: "15px",
});
const LeftBox = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginRight: 10,
  [theme.breakpoints.down("md")]: {
    padding: "20px 0 0 20px",
  },
}));
const StyledButton = styled(Button)`
  width: 48.5%;
  height: 45px;
  border-radius: 2px;
`;
