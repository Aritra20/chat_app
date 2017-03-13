var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', function() {
  it('should generate correct message object', function() {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
describe('generateLocationMessage', () =>{
  it('should generate correct location object', function() {
    var from = 'aritra';
    var latitude = '20';
    var longitude = "10";
    var url="https://www.google.com/maps?q=15,19";
    var message=generateLocationMessage(from,latitude,longitude);
      expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});