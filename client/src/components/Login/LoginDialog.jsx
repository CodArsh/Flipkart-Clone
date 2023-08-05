import React, { useContext } from "react";
import {
  Dialog,
  TextField,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
function LoginDialog({ open, setOpen }) {
  const accInitialValues = {
    login: {
      view: "login",
      heading: "Login",
      subheading: " Get access to your Orders, wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      subheading: "Sign up with your mobile number to get started",
    },
  };

  // signup setup
  const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const [signup, setSignup] = useState(signupInitialValues);
  const { setAccount } = useContext(DataContext);
  //signup api integration
  const signupUser = async () => {
    let resp = await authenticateSignup(signup);
    if (!resp) return;
    setOpen(false);
    setAccount(signup.firstname);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const [account, toggleAccount] = useState(accInitialValues?.login);
  const toggleSignup = () => {
    toggleAccount(accInitialValues?.signup);
  };

  // login setup
  const loginInitialValues = {
    username: "",
    password: "",
  };
  const [login, setLogin] = useState(loginInitialValues);
  const [logFailed, setLogFailed] = useState(false);
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  //login api integration
  const loginUser = async () => {
    let resp = await authenticateLogin(login);
    if (resp?.status === 200) {
      setOpen(false);
      setAccount(resp?.data?.details?.firstname);
    } else {
      setLogFailed(true);
      setTimeout(() => {
        setLogFailed(false);
      }, 2500);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <TextContent variant="h5">{account?.heading}</TextContent>
            <TextContent>{account?.subheading}</TextContent>
          </Image>
          {account?.view === "login" ? (
            <Wrapper>
              <TextInput
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />

              <TextInput
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                type="password"
                label="Enter Password"
              />

              {!logFailed ? (
                <Policy>
                  By continuing, you agree to flipkart's Terms of Use and
                  Privacy Policy.
                </Policy>
              ) : (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="error">
                    Invalid Login !
                  </Alert>
                </Stack>
              )}
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <TextContent style={{ textAlign: "center" }}>OR</TextContent>
              <OtpButton>Request OTP</OtpButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
                value={signup.firstname}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
                value={signup.lastname}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
                value={signup.username}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                value={signup.email}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                value={signup.password}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
                value={signup.phone}
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
const Component = styled(Box)`
  height: 80vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    bottom no-repeat;
  width: 30%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
  }
  & > h5 {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 5px;
  }
`;
const TextContent = styled(Typography)`
  font-family: inherit;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  font-size: 12px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 25px 35px;
  width: 45%;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #fb641b;
  &:hover {
    color: #fb641b;
    border: 1px solid #fb641b;
  }
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  box-shadow: 0 1px 3px 1px rgb(0, 0, 0, 20%);
`;

const TextInput = styled(TextField)`
  font-family: inherit;
`;

const Policy = styled(Typography)`
  font-size: 12px;
  color: #878787;
  font-family: inherit;
`;
