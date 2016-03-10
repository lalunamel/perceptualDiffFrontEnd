const React = require('react');

let ShallowRendering = {
  getChildrenText: function(reactElement) {
    if(typeof reactElement === 'string') {
      return reactElement;
    } else {
      let that = this;
      return React.Children.toArray(reactElement.props.children).map(function(child) {
        return that.getChildrenText(child);
      }).join(' ');
    }
  }
};

module.exports = ShallowRendering;
