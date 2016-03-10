let React = require('react');
let strftime = require('strftime');

let Commit = React.createClass({
  render: function() {
    let {
      sha,
      comment,
      updated_at
    } = this.props;

    return (
      <div>
        <span>{sha}</span>
        <span>{comment}</span>
        <span>{strftime('%F %r', updated_at)}</span>
      </div>
    );
  }
});

module.exports = Commit;
