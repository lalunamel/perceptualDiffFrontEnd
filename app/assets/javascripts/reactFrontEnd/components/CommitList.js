let React = require('react');
let Commit = require('./Commit');

let CommitList = React.createClass({
  render: function() {
    let {
      commits
    } = this.props;

    return (
      <div>
        {commits.map(function(commit) {
          return <Commit key={commit.sha} {...commit} />
        })}
      </div>
    );
  }
});

module.exports = CommitList;
