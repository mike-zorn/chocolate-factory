/* global it: false */

module.exports = function(testDepictions) {
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
        
        it(testDepiction.description, testWrapper);
      });
    }
  };
};
