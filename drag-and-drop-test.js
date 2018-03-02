'use strict';
const support = require('protractor-firefox-support');
const params = browser.params;

describe('Custom DnD function tests', () => {
  const div = $('.btn.btn-primary');
  beforeEach(() => {
      return browser.get(params.dndTemplateUrl);
  });
  describe('Confirm ability to perform drag and drop action in firefox', () => {
    it('Should perform drag and drop action', function() {
      const selector = '.btn.btn-primary';
      const successDiv = $('.btn.btn-success');
      return browser.wait(protractor.ExpectedConditions.visibilityOf(div), 5000)
        .then(() => browser.executeScript('window.scrollTo(0, 230)'))
        .then(() => {
          return browser.executeScript(support.dragAndDrop, selector, null,
            {dropLocation: {x: 70, y: 175}});
        })
        .then(() => {
            return browser.sleep(2000);
        })
        .then(() => {
            console.log('-----------------DEVICE NAME------------------');
            console.log(deviceName);
            console.log('----------------------------------------------');
            expect(successDiv.isDisplayed()).toBe(true);
        });
      });
  });
});
