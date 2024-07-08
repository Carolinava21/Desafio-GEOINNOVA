import React from "react";
import ReactDOM from "react-dom/client";
import { PrototypeApp } from "./PrototypeApp";
import { Menu } from "./components/Menu";
import { Paragraph } from "./components/Paragraph";
import { HeadingSelect } from "./components/HeadingSelect";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrototypeApp />
    <Menu />
    <Paragraph />
    <HeadingSelect />
  </React.StrictMode>
);
