import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import QuiltDisplay from "./QuiltDisplay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <QuiltDisplay />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});
