import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 3, marginLeft: 20 }}>
          {account}
        </Typography>
      </Box>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;
