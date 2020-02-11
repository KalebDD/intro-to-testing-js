// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// Unit tests for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello(undefined)).toBe('string');
    });
    it('an argument of "Jane" should return  Hello, Jane!', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('an argument of "Alex" should return Hello, Alex!', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('an argument of "Pat" should return Hello, Pat!', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('return Hello, World if no argument is provided', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('a boolean argument should return Hello, World!', function() {
        expect(sayHello(Boolean)).toBe("Hello, World!");
    });
});

// Unit tests for isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
});

