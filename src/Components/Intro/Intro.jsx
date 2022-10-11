import React from "react";
import "./Intro.css";
import Facebook2 from "../../img/Facebook2.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Bienvenue chez </span>
          <span> ICO !</span>
          <span>
            {" "}
            Votre klqjsmdljf dmlkjfqmsdl fqsldkjf mqsdfhqlsdfh dqhfqldpfqosidfup
            qsdfnqdfn qldkjflqsdjfqlsdhf lqs hdflqs dfhlmqsjdfh kqljdfh qsldkjf
            qsd
          </span>
        </div>

        <button className="button i-button"> Allons-y </button>
        <div className="i-icons">
          <a>
            <img src={Facebook2} alt="logo de Facebook" />
          </a>
          <a>
            <img src={Linkedin} alt="logo de Linkedin" />
          </a>
          <a>
            <img src={Instagram} alt="logo de Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="voyage" />
        <img src={Vector2} alt="voyage" />
        <img src={boy} alt="voyage" />
        <img src={glassesimoji} alt="voyage" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Evacuation" txt2="Sanitaire" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Etudier" txt2="à l'étranger" />
        </div>

        {/* ..blur div.. */}
        <div className="blur" style={{ background: " rgb(238,210,255)" }}></div>
        <div className="blur"
        style={{
            background:'#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem',
        }}></div>
        </div>
    </div>
  );
};

export default Intro;
