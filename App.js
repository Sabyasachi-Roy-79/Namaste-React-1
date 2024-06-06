const heading = React.createElement(
  "h1",
  { id: "head", className: "headline" },
  "Welcome to Namaste React JS"
);

// Note: const heading is an object here, not any html tag
// First argument is what kind of element it is
// Second argument is object
// Third argument is children

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// render is a method
