import React from "react";
import ReactDom from "react-dom/client";


import App from "./App.js";


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<h1>test</h1>)
root.render(<h1>last render</h1>)
root.render(<App/>)