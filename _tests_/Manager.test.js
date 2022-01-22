const Manager = require('../lib/Manager');

test('make dat manager work!', () => {
    const manager = new Manager('Stu');

    expect(manager.name).toBe('Stu');
    expect(manager.office).toEqual(expect.any[(Array)]);
})