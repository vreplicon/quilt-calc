import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Pattern from "./Pattern";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <Pattern />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});
