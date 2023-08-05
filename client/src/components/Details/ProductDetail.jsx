import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import LocalOffer from "@mui/icons-material/LocalOffer";
function ProductDetail({ product }) {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
      <Typography>{product?.title?.longTitle}</Typography>
      <Box style={{ marginTop: 5, display: "flex" }}>
        <Typography style={{ color: "#878787", fontSize: 14 }}>
          8 Ratings & 1 Reviews
        </Typography>
        <Box>
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 80, marginLeft: 10 }}
          />
        </Box>
      </Box>
      <Typography>
        <Box component={"span"} style={{ fontSize: 28 }}>
          ₹{product?.price?.cost}&nbsp;&nbsp;
        </Box>
        <Box component={"span"} style={{ color: "#878787" }}>
          <strike>₹{product?.price?.mrp}</strike>&nbsp;&nbsp;
        </Box>
        <Box component={"span"} style={{ color: "#388e3c" }}>
          {product?.price?.discount}
        </Box>
      </Typography>
      <Typography style={{ fontFamily: "inherit", fontWeight: 600 }}>
        Available Offers
      </Typography>
      <SmallText>
        <Typography>
          <Badge /> Get extra 20% off upto ₹50 on 1 item(s)
        </Typography>
        <Typography>
          <Badge />
          Get extra 15% off (price inclusive of discount) T&C
        </Typography>
        <Typography>
          <Badge />
          Signup for Flipkart Pay Later and get Flipkart Gift Card wirth
          ₹100*Know More
        </Typography>
        <Typography>
          <Badge />
          Buy 2 items save 5%, Buy 3 more save 10% T&C
        </Typography>
        <Typography>
          <Badge />
          5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <Badge /> No Cost EMI on Bajaj Finserv EMI Card on Cart value above
          ₹2999 T&C
        </Typography>
      </SmallText>
      <MUI_TABLE style={{ fontFamily: "inherit" }}>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by : {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warrenty</TableCell>
            <TableCell>No Warrenty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product?.price?.cost}
              </Typography>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="adURL" style={{ width: 445 }} />
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Desctiption</TableCell>
            <TableCell>{product?.description}</TableCell>
          </ColumnText>
        </TableBody>
      </MUI_TABLE>
    </>
  );
}

export default ProductDetail;

const SmallText = styled(Box)`
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
    font-family: inherit;
  }
`;

const Badge = styled(LocalOffer)`
  margin-right: 10px;
  color: #388e3c;
  font-size: 15px;
  margin-top: 5px;
`;

const MUI_TABLE = styled(Table)`
  & > tbody > tr > td {
    font-family: inherit;
  }
  & > tbody > tr > td > p {
    font-family: inherit;
  }
`;

const ColumnText = styled(TableRow)`
  vertical-align: baseline;
  & > td {
    margin-top: 15px;
    border:none
  }
`;
