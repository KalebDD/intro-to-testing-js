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
    it('should always return a boolean type', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('an argument of "5" should return true', function() {
       expect(isFive(5)).toBe(true);
    });
});

//Unit tests for isEven
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return as boolean', function() {
       expect(typeof isEven()).toBe('boolean');
    });
    it('return true when passed an argument of 2', function() {
       expect(isEven(2)).toBe(true);
    });
    it('return true when passed an argument of -4', function() {
       expect(isEven(-4)).toBe(true);
    });
    it('return false when passed an argument of 3', function() {
       expect(isEven(3)).toBe(false);
    });
    it('return false when passed an argument of "banana"', function() {
       expect(isEven('banana')).toBe(false);
    });
    it('return true when passed an argument of "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('return false when passed an argument of Infinity', function() {
       expect(isEven(Infinity)).toBe(false);
    });
    it('return false when passed a boolean argument', function() {
        expect(isEven(Boolean)).toBe(false);
    });
    it('return false when called without an argument', function() {
       expect(isEven()).toBe(false);
    });
});

//Unit tests for isVowel
describe('isVowel', function() {
   it('should be a defined function', function() {
       expect(typeof isVowel).toBe('function');
   });
   it('should always return a boolean', function() {
      expect (typeof isVowel()).toBe('boolean');
   });
   it('return true when passed "a"', function() {
       expect(isVowel("a")).toBe(true);
   });
    it('return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('return false when passed 4', function() {
       expect(isVowel(4)).toBe(false);
    });
    it('return false when passed a boolean argument', function() {
        expect(isVowel(typeof Boolean)).toBe(false);
    });
    it('return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('return false with no argument', function() {
        expect(isVowel()).toBe(false);
    });
});