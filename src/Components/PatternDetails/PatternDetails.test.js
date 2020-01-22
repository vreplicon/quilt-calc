import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import PatternDetails from "./PatternDetails";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <PatternDetails />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});
