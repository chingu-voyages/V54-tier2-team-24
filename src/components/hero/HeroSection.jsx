import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image1 from "../../images/AI-PNG-File.png";
import Reveal from "../Reveal";
import "./HeroSection.css";

const HeroSection = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const items = [
    {
      text: "Your AI. Your Questions. Your Answers. AI prompting, simplified and perfected. Enter your prompts, click Submit, and voilà! As easy as it gets. Powered by Gemini. ",
      className: "hero-desc",
    },
    {
      text: "The key to AI excellence. Master AI, one prompt at a time. Enter your prompts, click  Submit, and get your response. As easy as A, B, C. Try it out! Powered by Gemini. ",
      className: "hero-desc",
    },
    {
      text: "Where intelligence begins with smart prompts, and a smarter AI. Enter your 5 prompts, click Submit, and there it is, your brilliant result! Why don’t you check it out? It is free. Powered by Gemini. ",
      className: "hero-desc",
    },
    {
      text: "The science of better AI prompts. Ask better questions, get smarter answers. Unlock AI’s true potential with AiQ. First, enter your 5 prompts; then click the Submit button, and third, get your response. Easy as 1, 2, 3. Go ahead, try it out! Powered by Gemini. ",
      className: "hero-desc",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = items[index];

  useEffect(() => {
    if (user) {
      navigate("/pentagram");
    }
  }, [user]);

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <Reveal>
            <h1 className="hero-title">Welcome to AiQ</h1>
          </Reveal>
          <Reveal>
            {/* <p className="hero-desc">
              Powered by Gemini AI, AiQ uses the Pentagram framework to develop
              specific, meaningful AI responses. <br></br>Here, you will learn
              about the features of the Pentagram; Persona, Context, Task,
              Output, Contraints. <br></br>Build your knowledge of AI with AiQ!
            </p> */}
            <p
              className={`fade ${fade ? "in" : "out"} ${currentItem.className}`}
            >
              {currentItem.text}
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
            <img src={Image1} className="hero-img" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
