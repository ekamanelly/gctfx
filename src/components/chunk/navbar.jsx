import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  IconButton,
} from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import InvertColorsRoundedIcon from "@material-ui/icons/InvertColorsRounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
const useStyles = makeStyles({
  paper: {
    background: "#1a237e",
    color: "white",
  },
});

const Navbar = (props) => {
  const style = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
  }, []);

  const styles = {
    paper: {
      background: "blue",
    },
  };

  return (
    <>
      <nav className="navbar-fixed">
        <nav className="nav-extended  indigo darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpenDrawer(!openDrawer)}
                  edge="start"
                  // className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </a>
              <Link to="/">
                <a style={{ fontSize: "2rem" }}> DeltaProjects</a>
              </Link>
              <Drawer
                open={openDrawer}
                anchor="right"
                classes={{ paper: style.paper }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpenDrawer(!openDrawer)}
                  edge="start"
                >
                  <CancelRoundedIcon />
                </IconButton>
                <List style={{ width: "20rem" }}>
                  <HomeWorkIcon
                    button
                    style={{ fontSize: "3rem", marginLeft: "2rem" }}
                  />
                  <Link
                    to="/portfolio"
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    <ListItem button>
                      <WbSunnyRoundedIcon style={{ marginRight: "2rem" }} />
                      <ListItemText>Portfolio</ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/blog" onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItem button>
                      <InvertColorsRoundedIcon
                        style={{ marginRight: "2rem" }}
                      />
                      <ListItemText>Blog</ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/skill" onClick={() => setOpenDrawer(!openDrawer)}>
                    <ListItem button>
                      <AccountTreeOutlinedIcon
                        style={{ marginRight: "2rem" }}
                      />
                      <ListItemText>Skill "&&" Expirence</ListItemText>
                    </ListItem>
                  </Link>
                  <Link
                    to="/consult"
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    <ListItem button>
                      <WorkOutlineOutlinedIcon
                        style={{ marginRight: "2rem" }}
                      />
                      <ListItemText>Consultancy Services</ListItemText>
                    </ListItem>
                  </Link>
                </List>
              </Drawer>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
