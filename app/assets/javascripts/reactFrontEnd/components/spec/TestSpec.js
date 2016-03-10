const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const { findWithType } = require('react-shallow-testutils');
const renderer = TestUtils.createRenderer();
const shallowRendering = require('./helpers/shallowRendering');

const Test = require('../Test');

describe('Test', () => {
  let description, new_img_url, old_img_url, diff_img_url, new_url, old_url, created_at;

  function render() {
    renderer.render(React.createElement(Test, {description, new_img_url, old_img_url, diff_img_url, new_url, old_url, created_at}));
    return renderer.getRenderOutput();
  }

  beforeEach(() => {
    description = 'What a great test!';
    new_img_url = 'http://www.imgbkt.com/new';
    old_img_url = 'http://www.imgbkt.com/old';
    diff_img_url = 'http://www.imgbkt.com/diff';
    new_url = 'http://www.sitewithnewcode.com';
    old_url = 'http://www.sitewitholdcode.com';
    created_at = new Date('August 25, 2015');
  });

  it('renders the given props', () => {
    let test = render();

    let childrenText = shallowRendering.getChildrenText(test);
    expect(childrenText).toContain(description);
    expect(childrenText).toContain(new_img_url);
    expect(childrenText).toContain(old_img_url);
    expect(childrenText).toContain(diff_img_url);
    expect(childrenText).toContain(new_url);
    expect(childrenText).toContain(old_url);
    expect(childrenText).toContain('08-25');
  });
});
