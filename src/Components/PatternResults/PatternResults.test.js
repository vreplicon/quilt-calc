import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import PatternResults from "./PatternResults";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <PatternResults />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});
