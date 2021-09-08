const Engineer = require("../lib/Engineer");

test('Github username', () => {
    const testValue = "AKish777";
    const e = new Engineer("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

it('Get Engineer Role', () => {
    const testValue = "Engineer";
    const e = new Engineer("Alex", 112233, "kichigin.alex@gmail.com", "AKish777");
    expect(e.getRole()).toBe(testValue);
});

it('Retrieve GitHub username', () => {
    const testValue = "AKish777";
    const e = new Engineer("Alex", 112233, "kichigin.alex@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});