import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import PatternSelect from "./PatternSelect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
<BrowserRouter>
  <PatternSelect />
</BrowserRouter>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
});
