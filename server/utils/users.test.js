const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {
    it('should add a new user', () => {
        const users = new Users()
        const user = {
            id: 123,
            name: 'Ahmed',
            room: 'The Office Fans'
        }

        const resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([resUser])
    })
})