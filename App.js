import React from "react";
import ReactDOM from "react-dom/client";
//const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from react");
//console.log(heading);//It creates a JS object with h1 tag
//const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
//root.render(heading);//it will convert the above object into h1 tag(HTML Element) and will append to dom node root



//how to created nested html elements

/**
 *
 * <div id="parent">
 *     <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *     </div> 
 * </div>
 * 
 * ReactElement(Object) => HTML browser understand
 *  
 */
const parent = React.createElement(
    "div", 
    {id:"parent"}, [
        React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "This is Namaste React"),
            React.createElement("h2", {}, "I'm h2 tag")
        ]),
        React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag")
        ])
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);  // render will replace all the child element if exists with the parent html element

//JSX