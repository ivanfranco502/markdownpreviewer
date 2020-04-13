//REACT
class MarkDownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "# This is a h1 title.\r## This is a h2 title.\r[This is a link](https://github.com/ivanfranco502) \r\rThis is `inline code`.\r```\rThis is a block code.\r```\rThis is an unorder list:\r* First element\r* Second element \r\n\r\r > This is a blockquote. \r\rThis is an image ![alternative text for the given image](https://avatars3.githubusercontent.com/u/22622318?s=460&u=e30bdfaefa9e39fcd43b36d6f8ea71b209c019d4&v=4) \r\r**This is a bolded text.**",
      preview: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(state => ({
      preview: DOMPurify.sanitize(marked(state.text, { breaks: true, gfm: true })) }));

  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
      preview: DOMPurify.sanitize(marked(event.target.value, { breaks: true, gfm: true })) });

  }

  render() {
    return (
      React.createElement("div", { className: "row h-100" },
      React.createElement(Editor, { text: this.state.text, handleChange: this.handleChange }),
      React.createElement(Preview, { preview: this.state.preview })));


  }}


const Editor = (props) =>
React.createElement("div", { className: "col-xl-6 hidden-md-down" },
React.createElement(Title, { title: "Markdown editor" }),
React.createElement("textarea", { id: "editor", value: props.text, onChange: props.handleChange }));



class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function insertMarkup(preview) {
      return { __html: preview };
    }
    return (
      React.createElement("div", { className: "col-xl-6" },
      React.createElement(Title, { title: "HTML preview" }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: insertMarkup(this.props.preview) })));


  }}


const Title = props => React.createElement("h1", { className: "text-primary text-center" }, props.title);

ReactDOM.render(React.createElement(MarkDownApp, null), document.getElementById("root"));