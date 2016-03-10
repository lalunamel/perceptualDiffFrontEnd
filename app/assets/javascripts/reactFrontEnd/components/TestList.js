let React = require('react');
let Test = require('./Test');

let TestList = React.createClass({
  render: function() {
    let {
      tests
    } = this.props;

    return (
      <div>
        {tests.map(function(test) {
          return <Test key={test.created_at} {...test} />
        })}
      </div>
    );
  }
});

module.exports = TestList;
