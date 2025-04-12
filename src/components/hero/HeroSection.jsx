import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image1 from "../../images/AI-PNG-File.png";
import "./HeroSection.css";

const HeroSection = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/pentagram");
    }
  }, [user]);

  const imageStyle = {
    transform: "scaleX(-1)",
  };

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
          <img src={Image1} style={imageStyle} className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
