const collecting = require('../Collecting')

test('basic testing enabled', () => {
    expect(collecting.test()).toBe(true)
})