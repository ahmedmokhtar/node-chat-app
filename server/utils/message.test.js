const expect = require('expect')

const {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Admin'
        const text = 'A message from Admin'
        const message = generateMessage(from, text)

        // expect(message.from).toBe(from)
        // expect(message.text).toBe(text)
        expect(message).toHaveProperty('from', from)
        expect(message).toHaveProperty('text', text)
        expect(message).toMatchObject({from, text})
        expect(typeof message.createdAt).toBe('number')
    })
})