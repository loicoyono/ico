import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Packs from "./Packs.pdf";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        {/* coté gauche */}
        <span>Nos Incroyables </span>
        <span>Services </span>

        <span>
          {" "}
          use a button aesa button and change it with appropriate styles. Learn
          more:
          <br />
          use a button and change it with appropriate styles. Learn more:
        </span>

        <a href={Packs} download>
          <button className="button s-button">Nos packs</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* coté droit */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Etudes"}
            detail={"prêts étudiants Accompagnement Intégration"}
          />
        </div>

        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Santé"}
            detail={"prêts étudiants Accompagnement Intégration"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Tourisme"}
            detail={"prêts étudiants Accompagnement Intégration"}
          />
        </div>
        <div className="blur s-blur2"   style={{ background: "var(--purple)" }}>
            
        </div>
      </div>
    </div>
  );
};

export default Services;
