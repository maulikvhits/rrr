import React from "react";
import { styled } from "@mui/material/styles";
import {
 Box,
  Checkbox,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthBackground from "../AuthBackground";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// for custom checkbox design
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 0,
  border: "1px solid #114A65",
  width: 16,
  height: 16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "transparent",
}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "transparent",
  "&:before": {
    display: "block",
    width: 12,
    height: 12,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23114A65'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "transparent",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default function SignIn() {
  // for Password eye hide and show
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box className="admin-login-main-flex">
        <Box className="admin-login-left-main">
          <AuthBackground />
        </Box>
        <Box className="admin-login-right-main">
          <Box className="admin-login-box">
            <Box className="admin-login-main">
              <Box className="admin-login-inner">
                <Typography
                  component="h2"
                  variant="h2"
                  className="admin-wel-text"
                >
                  Sign In!
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  className="admin-sign-para common-para"
                >
                  Please enter your credentials to sign in!
                </Typography>
                <Box className="input-box">
                  <FormHelperText className="form-lable">
                    User Name
                  </FormHelperText>
                  <Box className="form-group">
                    <TextField
                      fullWidth
                      id="fullWidth"
                      className="form-control"
                      placeholder="admin@mealon.com"
                      autocomplete="off"
                    />
                  </Box>
                </Box>
                <Box className="input-box">
                  <FormHelperText className="form-lable">
                    Password
                  </FormHelperText>
                  <Box className="form-group">
                    <OutlinedInput
                      className="form-control-eye"
                      autocomplete="off"
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Box>
                <Box className="flex-all forgot-row">
                  <Box className="checkbox-main">
                    <BpCheckbox />
                    <Typography className="checkbox-lable">
                      Remember Me
                    </Typography>
                  </Box>
                  <Link className="text-decoration-none">
                    <Typography
                      component="p"
                      variant="p"
                      className="admin-forgot-para common-para"
                    >
                      Forgot Password?
                    </Typography>
                  </Link>
                </Box>
                <Box className="btn-main-primary login-btn-main">
                  <Button className="btn-primary login-btn">Sign In</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
