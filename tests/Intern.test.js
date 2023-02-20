const Intern = require('../lib/intern');

describe('Intern', () =>  {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Katie';
            // Act
            const obj = new Intern(name);
            // Assert
            expect(obj.name).toEqual(name);
        })

        // Exception test
        it("should throw an error if not provided a 'name' value", () => {
            // Arrange
            const callback = () => new Intern();
            const err = new Error(
            "Expected parameter 'name' to be a non empty string"
            );
    
            // Assert
            expect(callback).toThrowError(err);
        })
    })
})