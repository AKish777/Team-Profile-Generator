const Intern = require("../lib/Intern");

test('Set School', () => {
    const testValue = "UNCC";
    const e = new Intern("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

it('Get Intern Role', () => {
    const testValue = "Intern";
    const e = new Intern("Alex", 112233, "kichigin.alex@gmail.com", "school");
    expect(e.getRole()).toBe(testValue);
});

it('Retrieve School', () => {
    const testValue = "UNCC";
    const e = new Intern("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});