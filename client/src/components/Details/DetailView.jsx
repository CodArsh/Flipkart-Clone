import { Box, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAcions";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";
function DetailView() {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const { id } = useParams();
  useEffect(() => {
    if (product && id !== product?.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, loading, product]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          {/* left aise area (image & buttons) */}
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>

          {/* right side area (proce & more information) */}
          <RightGrid item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightGrid>
        </Container>
      )}
    </Component>
  );
}

export default DetailView;

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 50px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#fff",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightGrid = styled(Grid)`
  margin-top: 50px;
`;
