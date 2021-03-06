 /*
  * Unit Tests
  */

 // Dependencies
 var helpers = require('./../lib/helpers');
 var assert = require('assert');
 var logs = require('./../lib/logs');

 // Holder for tests
 var unit = {};


// Assert that the getANumber function is returning a number
unit['helpers.getANumber should return a number'] = function(done){
    var val = helpers.getANumber();
    assert.strictEqual(typeof(val), 'number');
    done();
 };

// Assert that the getANumber function is returning a 1
unit['helpers.getANumber should return 1'] = function(done){
    var val = helpers.getANumber();
    assert.strictEqual(val, 1);
    done();
 };

// Assert that the getANumber function is returning a 2
unit['helpers.getANumber should return 2'] = function(done){
    var val = helpers.getANumber();
    assert.strictEqual(val, 2);
    done();
 };

 // Logs.list should callback an array and a false error
unit['logs.list should callback a false error and an array of log names'] = function(done){
    logs.list(true, function(err, logFileNames){
        assert.strictEqual(err, false);
        assert.ok(logFileNames instanceof Array);
        assert.ok(logFileNames.length > 1);
        done();
    });
};

// Logs.truncate should not throw if the logId doesn't exist
unit['logs.truncate should not throw even if the logFileName is invalid'] = function(done){
    assert.doesNotThrow(function(){
        logs.truncate('I do not exist', function(err){
            assert.ok(err);
            done();
        });
    }, TypeError);
};

 // Export the module
 module.exports = unit;