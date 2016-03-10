const React = require('react');
const TestUtils = require('react-addons-test-utils');
const { findWithType } = require('react-shallow-testutils');
const renderer = TestUtils.createRenderer();

const CommitList = require('../CommitList');
const Commit = require('../Commit');

describe('CommitList', () => {
  let commits;

  function render() {
    renderer.render(React.createElement(CommitList, {commits}));
    return renderer.getRenderOutput();
  }

  beforeEach(() => {
    commits = [{
      sha: 'sha134',
      comment: 'What a great commit!',
      created_at: new Date()
    }];
  });

  it('renders a Commit with a sha, comment, and timestamp', () => {
    let commitList = render();
    let commit = findWithType(commitList, Commit);
    expect(commit.props).toEqual(jasmine.objectContaining(commits[0]));
  });
});
