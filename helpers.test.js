const helpers = require('./helpers')

test('should return string value', () => {
    expect.assertions(2)

    const userIdLength = 5
    const result = helpers.generateUserId(userIdLength)

    expect(result).toHaveLength(userIdLength)
    expect(typeof result).toBe('string')
})