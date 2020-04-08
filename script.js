//REACT

const Editor = () => React.createElement("textarea", { id: "editor", className: "col-md-6" });
const Preview = () => React.createElement("div", { id: "preview", className: "col-xl-6" });

class MarkDownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "" };

  }

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("div", { className: "row" },
      React.createElement(Editor, null),
      React.createElement(Preview, null))));



  }}


ReactDOM.render(React.createElement(MarkDownApp, null), document.getElementById("root"));