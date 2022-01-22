const Intern = require('../lib/Intern');

test('setting up the intern', () => {
    const intern = new Intern('Sal');

    expect(intern.name).toBe('Sal');
    expect(intern.school).toEqual(expect.any[(Array)]);
});