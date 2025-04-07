import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Image1 from "../../images/AI-PNG-Isolated-HD.png";
import "./HeroSection.css";

const HeroSection = ({ setPentagramShowing }) => {
  const navigate = useNavigate();
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Welcome to AiQ</h1>
          <p className="hero-desc">
            Powered by Gemini AI, AiQ uses the Pentagram framework to develop
            specific, meaningful AI responses. <br></br>Here, you will learn
            about the features of the Pentagram; Persona, Context, Task, Output,
            Contraints. <br></br>Build your knowledge of AI with AiQ!
          </p>
          <div
            className="get-started-button"
            onClick={() => {
              navigate("/pentagram");
            }}
          >
            Get Started
          </div>
        </div>
        <div className="hero-right">
          <img src={Image1} className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
