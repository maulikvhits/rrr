import React from "react";
import { svg } from "../../assets/svg";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NewsLetter from "../newsletter/NewsLetter";

export default function Footer() {
  return (
    <>
      <Box className="footer">
        <Box><NewsLetter /></Box>
        <Box className="container">
          <Box className="grid-row footer-row">
            <Box sx={{ width: 1 }} className="grid-main">
              <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}
              >
                <Box
                  gridColumn={{
                    xs: "span 12",
                    sm: "span 4",
                    md: "span 4",
                    lg: "span 5",
                  }}
                  className="grid-column"
                >
                  <Box className="footer-col">
                    <Box className="footer-logo-box">
                      <img src={svg.logo} className="footer-logo" alt="logo" />
                    </Box>
                    <Typography className="footer-para">
                      Welcome to the future of gaming, by gamers, for gamers
                    </Typography>
                  </Box>
                </Box>
                <Box
                  gridColumn={{
                    xs: "span 12",
                    sm: "span 8",
                    md: "span 8",
                    lg: "span 7",
                  }}
                  className="grid-column"
                >
                  <Box className="grid-row">
                    <Box sx={{ width: 1 }} className="grid-main">
                      <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={{ xs: 2, sm: 2, md: 0, lg: 0 }}
                      >
                        <Box
                          gridColumn={{
                            xs: "span 12",
                            sm: "span 4",
                            md: "span 4",
                            lg: "span 4",
                          }}
                          className="grid-column"
                        >
                          <Box className="footer-inner-col">
                            <Box className="footer-nav-main">
                              <Typography className="footer-nav-titles">
                                Socials
                              </Typography>
                              <List className="footer-nav-ul">
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Discord
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">Team</Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    YouTube
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Twitch
                                  </Link>
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          gridColumn={{
                            xs: "span 12",
                            sm: "span 4",
                            md: "span 4",
                            lg: "span 4",
                          }}
                          className="grid-column"
                        >
                          <Box className="footer-inner-col">
                            <Box className="footer-nav-main">
                              <Typography className="footer-nav-titles">
                                Polkastarter
                              </Typography>
                              <List className="footer-nav-ul">
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">Games</Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Genres
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Reviews
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">News</Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Events
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Chains
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Platforms
                                  </Link>
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          gridColumn={{
                            xs: "span 12",
                            sm: "span 4",
                            md: "span 4",
                            lg: "span 4",
                          }}
                          className="grid-column"
                        >
                          <Box className="footer-inner-col">
                            <Box className="footer-nav-main">
                              <Typography className="footer-nav-titles">
                                Company
                              </Typography>
                              <List className="footer-nav-ul">
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    About Us
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">Team</Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Partners
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Media Kit
                                  </Link>
                                </ListItem>
                                <ListItem className="footer-nav-li">
                                  <Link className="footer-nav-link">
                                    Polkastarter
                                  </Link>
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="container">
          <Box className="footer-copy-right-box">
            <Typography className="footer-copy-right-text">
              All Copyrights Reserved © 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
