const Engineer = require('../lib/Engineer');

test('show me the money stebe!', () => {
    const engineer = new Engineer('Stebe');

    expect(engineer.name).toBe('Stebe');
    expect(engineer.github).toEqual(expect.any[(Array)]);
});