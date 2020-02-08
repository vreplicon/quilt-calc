import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CustomizerPannel from "./CustomizerPannel";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CustomizerPannel />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
