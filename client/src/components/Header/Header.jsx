import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCLose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
      <Box style={{ width: 200 }} onClick={handleCLose}>
        <List>
          <ListItem button>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
    );
  };
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Menu onClick={handleOpen}>
          <MenuIcon style={{ color: "#fff" }} />
        </Menu>
        <Drawer open={open} onClose={handleCLose}>
          {" "}
          {list()}
        </Drawer>
        <Component>
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <img src={logoURL} alt="logo" style={{ width: 70 }} />
            <Box display={"flex"}>
              <SubHeading>
                Explore{" "}
                <Box component={"span"} style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subURL} alt="sublogo" />
            </Box>
          </Link>
        </Component>
        <Search />
        <HeaderWrapper>
          <CustomButtons />
        </HeaderWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: "10px",
  height: "10px",
  marginLeft: "4px",
  marginTop: "2px",
});

const HeaderWrapper = styled(Box)(({ theme }) => ({
  margin: "0 % 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Menu = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
