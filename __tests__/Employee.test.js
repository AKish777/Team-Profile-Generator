const Employee = require("../lib/Employee");

test('Generate New Employee Object', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
});

test('Generated Name', () => {
    const name = "Alex";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Generated ID', () => {
    const testValue = 112233
    const e = new Employee("Alex", testValue);
    expect(e.id).toBe(testValue);
});

test('Generated email', () => {
    const testValue = "kichigin.alex@gmail.com";
    const e = new Employee("Alex", 112233, testValue);
    expect(e.email).toBe(testValue);
});

it('Get Name', () => {
    const testValue = "Alex";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

it('Get ID', () => {
    const testValue = 112233;
    const e = new Employee("Alex", testValue);
    expect(e.getId()).toBe(testValue);
});

it('Get email', () => {
    const testValue = "kichigin.alex@gmail.com";
    const e = new Employee("Alex", 112233, testValue);
    expect(e.getEmail()).toBe(testValue);
});

it('Get role', () => {
    const testValue = "Employee";
    const e = new Employee ("Alex" , 112233, "kichigin.alex@gmail.com");
    expect(e.getRole()).toBe(testValue);
});