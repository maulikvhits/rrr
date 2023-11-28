import { Box, List, ListItem } from "@mui/material";
import React from "react";
import { svg } from "../../assets/svg";
import { Link } from "react-router-dom";
export default function AuthFooter() {
  return (
    <>
      <Box className="social-main">
        <List className="social-ul">
          <ListItem className="social-li">
            <Link className="social-link text-decoration-none">
              <Box className="social-box">
                <img src={svg.FaceBook} className="social-icons" />
              </Box>
            </Link>
          </ListItem>
          <ListItem className="social-li">
            <Link className="social-link text-decoration-none">
              <Box className="social-box">
                <img src={svg.Instagram} className="social-icons" />
              </Box>
            </Link>
          </ListItem>
          <ListItem className="social-li">
            <Link className="social-link text-decoration-none">
              <Box className="social-box">
                <img src={svg.Twitter} className="social-icons" />
              </Box>
            </Link>
          </ListItem>
          <ListItem className="social-li">
            <Link className="social-link text-decoration-none">
              <Box className="social-box">
                <img src={svg.LinkedIn} className="social-icons" />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
