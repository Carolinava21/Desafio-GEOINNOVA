import React from "react";
import ReactDOM from "react-dom/client";
import { PrototypeApp } from "./PrototypeApp";
import { Menu } from "./components/Menu";
import { Paragraph } from "./components/Paragraph";
import { HeadingSelect } from "./components/HeadingSelect";
import { Graphic  } from "./components/Graphic";
import { Badges } from "./components/Badges";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrototypeApp />
    <Menu />
    <Paragraph />
    <HeadingSelect />
    <Graphic/>
    <Badges/>
  </React.StrictMode>
);
