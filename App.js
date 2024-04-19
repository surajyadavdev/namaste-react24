/* <div id  ="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> 

ReactElement(object)==>Html(browser understands)




*/



const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I'm an H1 tag"), React.createElement("h2",{},"I'm an H2 tag")
    ),React.createElement(
        "div",
        {id:"child2"},
        React.createElement("h1",{},"I'm an H1 tag"), React.createElement("h2",{},"I'm an H2 tag")
    )]
    );





const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from react"
);
// console.log(heading);//object
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// root.render(heading);


//here root.render function taking heading obj convertiong h1 tag and put into dom .