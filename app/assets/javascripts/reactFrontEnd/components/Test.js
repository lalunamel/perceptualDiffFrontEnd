let React = require('react');
let strftime = require('strftime');

let Test = React.createClass({
  render: function() {
    let {
      description,
      new_img_url,
      old_img_url,
      diff_img_url,
      new_url,
      old_url,
      created_at
    } = this.props;

    return (
      <div>
        {description},
        {new_img_url},
        {old_img_url},
        {diff_img_url},
        {new_url},
        {old_url},
        {strftime('%F %r', created_at)}
      </div>
    );
  }
});

module.exports = Test;
