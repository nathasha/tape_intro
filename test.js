var test = require('tape');
var src  = require('./src');

test('test_sum', function(t) {
    // Tell how many test assertions to run
    // t.end() will auto run after nth test
	t.plan(2);

    // t.equal(actual, expected, msg)
    t.equal(src.sayHello(), "Hello", "Test Say Hello");

    t.equal(src.sayBye(), "Bye", "Test Say Bye");



});
