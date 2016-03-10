const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const { findWithType } = require('react-shallow-testutils');
const renderer = TestUtils.createRenderer();
const shallowRendering = require('./helpers/shallowRendering');

const Commit = require('../Commit');

describe('Commit', () => {
  let sha, comment, updated_at;

  function render() {
    renderer.render(React.createElement(Commit, {sha, comment, updated_at}));
    return renderer.getRenderOutput();
  }

  beforeEach(() => {
      sha = 'sha134';
      comment = 'What a great commit!';
      updated_at = new Date('August 25, 2015');
  });

  it('renders the given sha, comment, and updated_at', () => {
    let commit = render();

    let childrenText = shallowRendering.getChildrenText(commit);
    expect(childrenText).toContain(sha);
    expect(childrenText).toContain(comment);
    expect(childrenText).toContain('08-25');
  });
});
