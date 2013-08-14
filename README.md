chocolate-factory
=================

Repeatedly run a mocha test with varying parameters.

Example
-------
```javascript
var testAll = require('test-repeater'),
    thingsToTest = [{
      description: 'should return bar with argument foo'
      argument: 'foo'
      returnValue: 'bar'
    }];

 testAll(thingsToTest).with(function(testDepiction) {
   baz(testDepiction.argument).should.eql(testDepiction.returnValue);
 });
```

Notes
-----

* test depictions must have a description parameter
* test functions must have testDepicition as their first parameter
* test functions with two parameters will have mocha's done put into the
  second parameter
* only the mocha bdd interface is supported

TODO
----
* Support something other than bdd interface
