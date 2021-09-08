const Manager = require("../lib/Manager");

test('Appoint Office number', () => {
    const testValue = 123;
    const e = new Manager("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

it('Get Manager Role', () => {
    const testValue = "Manager";
    const e = new Manager("Alex", 112233, "kichigin.alex@gmail.com", 123);
    expect(e.getRole()).toBe(testValue);
});

it('Retrieve Office Number', () => {
    const testValue = 123;
    const e = new Manager("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});