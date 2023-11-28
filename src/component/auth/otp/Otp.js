import { TextField, Typography } from '@mui/material';
import React from 'react'


export default function Otp() {
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
                      Otp!
                    </Typography>
                    <Typography
                      component="p"
                      variant="p"
                      className="admin-sign-para common-para"
                    >
                      Please enter your credentials to Otp!
                    </Typography>
                    <Box className="otp-flex-main">
                      <Box className="input-box otp-input-box">
                        <Box className="form-group">
                          <TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder="0"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>
                      <Box className="input-box otp-input-box">
                        <Box className="form-group">
                          <TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder="0"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>
                      <Box className="input-box otp-input-box">
                        <Box className="form-group">
                          <TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder="0"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>
                      <Box className="input-box otp-input-box">
                        <Box className="form-group">
                          <TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control"
                            placeholder="0"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="btn-main-primary login-btn-main">
                      <Button className="btn-primary login-btn">
                        Send
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      );
}
