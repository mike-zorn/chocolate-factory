/* global it: false */
var _str = require('underscore.string');

module.exports = function(testDepictions, description) {
  return {
    with: function(test) {
      testDepictions.forEach(function(testDepiction) {
        var testWrapper = test.length > 1?
              function(done) {
                test.call(this, testDepiction, done);
              }:
              function() {
                // async tests which don't use the depiction are fail.
                test.call(this, testDepiction);
              };
        if(description) {
          it(_str.sprintf(description, testDepiction), testWrapper);
        } else {
          it(testDepiction.description, testWrapper);
        }
      });
    }
  };
};
