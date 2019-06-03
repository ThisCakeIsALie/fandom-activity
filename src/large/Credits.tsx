import React from "react";
import { Grid } from "@material-ui/core";
import { ClassProp } from "../CommonProps";
import Crawl from "react-star-wars-crawl";
import "react-star-wars-crawl/lib/index.css";
const starWarsTheme = require("../assets/starwarstheme.mp3");

const Credits: React.FC<ClassProp> = ({ children, className }) => {
  return (
    <>
    <div className={className}>
      <Crawl
        containerStyles={{
          background: "none"
        }}
        fadeStyles={{
          background: "none",
          minHeight: 0
        }}
        textContainerStyles={{
            textAlign: "center"
        }}
        crawlStyles={{
            animation: "crawl 120s linear"
        }}
      >
        {children}
      </Crawl>
    </div>
    <audio autoPlay>
        <source src={starWarsTheme} type="audio/mpeg" />
    </audio>
    </>
  );
};

export default Credits;
