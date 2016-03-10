const React = require('react');
const TestUtils = require('react-addons-test-utils');
const { findWithType } = require('react-shallow-testutils');
const renderer = TestUtils.createRenderer();

const TestList = require('../TestList');
const Test = require('../Test');

describe('TestList', () => {
  let tests;

  function render() {
    renderer.render(React.createElement(TestList, {tests}));
    return renderer.getRenderOutput();
  }

  beforeEach(() => {
    tests = [{
      description: 'What a great test!',
      new_img_url: 'http://www.imgbkt.com/new',
      old_img_url: 'http://www.imgbkt.com/old',
      diff_img_url: 'http://www.imgbkt.com/diff',
      new_url: 'http://www.sitewithnewcode.com',
      old_url: 'http://www.sitewitholdcode.com',
      created_at: new Date('August 25, 2015')
    }];
  });

  it('renders a Test with a sha, comment, and timestamp', () => {
    let testList = render();
    let test = findWithType(testList, Test);
    expect(test.props).toEqual(jasmine.objectContaining(tests[0]));
  });
});
