import React, { useEffect } from "react";
import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAcions";
import { Link } from "react-router-dom";

function Search() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.getProducts);
  const getText = (value) => {
    setText(value);
    setOpen(false);
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for Products, Brands and More"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => (setText(""), setOpen(true))}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
  font-family: inherit;
  font-weight: 600;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  display: flex;
  align-items: center;
`;
