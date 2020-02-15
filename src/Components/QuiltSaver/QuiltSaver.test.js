import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import QuiltSaver from "./QuiltSaver";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <QuiltSaver />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
