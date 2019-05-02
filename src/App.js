import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
// 画像
import thanos from "./images/thanos_gauntlet.png";
import gauntlet from "./images/gauntlet_snap.png";
import ironman from "./images/ironman_icon.jpg";
import cap from "./images/captainamerica_icon.jpg";
import thor from "./images/thor_icon.jpg";
import hulk from "./images/hulk_icon.jpg";
import blackwidow from "./images/blackwidow_icon.jpg";
import spiderman from "./images/spiderman_icon.jpg";
import falcon from "./images/falcon_icon.jpg";
import wintersoldier from "./images/wintersoldier_icon.jpg";
import warmachine from "./images/warmachine_icon.jpg";
import scarletwitch from "./images/scarletwitch_icon.jpg";
import starroad from "./images/starroad_icon.jpg";
import gamora from "./images/gamora_icon.jpg";
import groot from "./images/groot_icon.jpg";
import rocket from "./images/rocket_icon.jpg";
import drax from "./images/drax_icon.jpg";
import mantis from "./images/mantis_icon.jpg";
import nebula from "./images/nebula_icon.jpg";
import blackpanther from "./images/blackpanther_icon.jpg";
import okoye from "./images/okoye_icon.jpg";
import syuri from "./images/syuri_icon.jpg";
import doctorstrange from "./images/doctorstrange_icon.jpg";
import wong from "./images/wong_icon.jpg";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topImg: <img className="thanos_img" src={thanos} alt="top" />
    };
    this.snapClick = this.snapClick.bind(this);
  }

  changeImg() {}

  snapClick() {
    this.setState({
      topImg: <img className="gauntlet_img" src={gauntlet} alt="top" />
    });
  }

  render() {
    const btnStyle = {
      background:
        // "linear-gradient(to right, #FF0130, #FF8B00, #FFD300, #12E772, #266EF6, #E429F2)",
        "linear-gradient(to right, #FF0130, #FF8B00, #FFD300)",
      borderRadius: 3,
      border: 0,
      padding: "0.5em 2em",
      margin: "1em 0",
      color: "white",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    };
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="header">
            <h1 className="headerTitle">THE INFINITY GAUNTLET</h1>
            <div className="balloon_wrap">
              <div className="balloon">I am inevitable.</div>
            </div>
            {this.state.topImg}
            <Button style={btnStyle} onClick={this.snapClick} variant="outlined" color="red">
              Snap!
            </Button>
          </header>

          <body className="body">
            <img className="icons_img" src={ironman} alt="icon" />
            <img className="icons_img" src={cap} alt="icon" />
            <img className="icons_img" src={thor} alt="icon" />
            <img className="icons_img" src={hulk} alt="icon" />
            <img className="icons_img" src={blackwidow} alt="icon" />
            <img className="icons_img" src={spiderman} alt="icon" />
            <img className="icons_img" src={falcon} alt="icon" />
            <img className="icons_img" src={wintersoldier} alt="icon" />
            <img className="icons_img" src={warmachine} alt="icon" />
            <img className="icons_img" src={scarletwitch} alt="icon" />
            <img className="icons_img" src={starroad} alt="icon" />
            <img className="icons_img" src={gamora} alt="icon" />
            <img className="icons_img" src={groot} alt="icon" />
            <img className="icons_img" src={rocket} alt="icon" />
            <img className="icons_img" src={drax} alt="icon" />
            <img className="icons_img" src={mantis} alt="icon" />
            <img className="icons_img" src={nebula} alt="icon" />
            <img className="icons_img" src={blackpanther} alt="icon" />
            <img className="icons_img" src={okoye} alt="icon" />
            <img className="icons_img" src={syuri} alt="icon" />
            <img className="icons_img" src={doctorstrange} alt="icon" />
            <img className="icons_img" src={wong} alt="icon" />
          </body>
        </div>
      </MuiThemeProvider>
    );
  }
}
