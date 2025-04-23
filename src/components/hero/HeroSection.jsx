import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image1 from "../../images/AI-PNG-File.png";
import Reveal from "../Reveal";
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
    // transform: "scaleX(-1)",
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <Reveal>
            <h1 className="hero-title">Welcome to AiQ</h1>
          </Reveal>
          <Reveal>
            <p className="hero-desc">
              Powered by Gemini AI, AiQ uses the Pentagram framework to develop
              specific, meaningful AI responses. <br></br>Here, you will learn
              about the features of the Pentagram; Persona, Context, Task,
              Output, Contraints. <br></br>Build your knowledge of AI with AiQ!
            </p>
          </Reveal>
          <Reveal>
            <div
              className="get-started-button hover:bg-blue-400 cursor-pointer"
              onClick={() => {
                navigate("/pentagram");
              }}
            >
              Get Started
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Reveal>
            <img src={Image1} style={imageStyle} className="hero-img" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
