import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAcions";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  // api call using redux
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discount for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
}

export default Home;

const Component = styled(Box)`
  padding: 8px 8px 5px 8px;
  background: #f2f2f2;
  box-shadow: 1px 2px 1px #ddd;
`;
