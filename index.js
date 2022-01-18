import React from "react";
import ReactDOM from "react-dom";

// JSX returns plain JS Objects
const page = (
    <div>
        <p>I</p>
        <p>Was</p>
        <p>Here</p>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page)); // [object Object]