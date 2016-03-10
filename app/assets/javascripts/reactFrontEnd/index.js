let React = require('react');
let ReactDOM = require('react-dom');
let Commits = require('./components/Commits');

ReactDOM.render(
  <Commits />,
  document.getElementById('entrypoint')
);
