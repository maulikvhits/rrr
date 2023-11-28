import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../Button/primarybutton/PrimaryButton";

export default function NewsLetter() {
  return (
    <>
      <Box className="news-latter-sec">
        <Box className="">
          <Box className="grid-row">
            <Box sx={{ width: 1 }} className="grid-main">
              <Box
                display="grid"
                className="news-letter-row"
                gridTemplateColumns="repeat(12, 1fr)"
                gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}
              >
                <Box
                  gridColumn={{
                    xs: "span 12",
                    sm: "span 4",
                    md: "span 4",
                    lg: "span 6",
                  }}
                  className="grid-column"
                >
                  <Box className="news-letter-col">
                    <Typography className="news-letter-para">
                      Keep up with the GAM3 scene
                    </Typography>
                    <Typography
                      component="h2"
                      variant="h2"
                      className="news-letter-subtitle"
                    >
                      Sign up for our newsletter and get the latest news and
                      updates.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  gridColumn={{
                    xs: "span 12",
                    sm: "span 8",
                    md: "span 8",
                    lg: "span 6",
                  }}
                  className="grid-column"
                >
                  <Box className="news-letter-col">
                    <Box className="news-letter-flex">
                      <Box className="input-box news-letter-input-box">
                        <Box className="form-group">
                          <TextField
                            fullWidth
                            id="fullWidth"
                            className="form-control news-letter-form-control"
                            placeholder="Enter your email"
                          />
                        </Box>
                      </Box>
                      <PrimaryButton
                        btnLabel="Subscribe"
                        className="white-btn news-letter-subscribe-btn primary-btn"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
