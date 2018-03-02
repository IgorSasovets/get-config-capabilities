exports.config = {
  directConnect: true,
  multiCapabilities: [{
    browserName: 'chrome',
    'chromeOptions': {
        'mobileEmulation': {
            'deviceName': 'iPad'
        }
    }
  }],
  specs: [
    'drag-and-drop-test.js'
  ],
  params: {
    dndTemplateUrl: 'http://codef0rmer.github.io/angular-dragdrop/#!/'
  },
  onPrepare: function() {
    return browser.getProcessedConfig().then(data => {
      global.deviceName = data.capabilities.chromeOptions.mobileEmulation.deviceName;
    });
  }
}
