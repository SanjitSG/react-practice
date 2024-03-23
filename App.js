import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "im heading 🚀"),
    React.createElement("h1", { id: "heading" }, "im heading2"),
  ]),
  React.createElement("h1", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "im heading"),
    React.createElement("h1", { id: "heading" }, "im heading2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
