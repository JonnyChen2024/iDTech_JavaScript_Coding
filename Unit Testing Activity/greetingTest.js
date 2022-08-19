var utils  = require('course-utilities');
var mit = utils.load('./greeting.js', 'greeting');

describe('testing greet()', () => {

    test('One Person', () => {
        expect(greet('Elizabeth').toBe("Hello Elizabeth"));
    });

    test('HELLO', () => {
        expect(greet('JOSE')).toBe("HELLO JOSE!");
    });

    test('Two People', () => {
        expect(greet(['Jose','Pep'])).toBe("Hello Jose, Pep");    
    });

    test('More than two people', () => {
      expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe("Hello Alex, Arsene, Jose, Zidane"); 
    });
    
    test('Null', () => {
        expect(greet()).toBe("I don't seem to know who you are");
    });
});