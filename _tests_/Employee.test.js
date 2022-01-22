const Employee = require('../lib/Employee')

test('creates a employee object', () => { 
    const employee = new Employee('Sean');

    expect(employee.name).toBe('Sean');
    expect(employee.id).toEqual(expect.any[(Number)]);
    expect(employee.email).toEqual(expect.any[(Array)]);
});