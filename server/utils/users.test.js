const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {
    let users

    beforeEach(() => {
        users = new Users()

        users.users = [{
            id: '1',
            name: 'Ahmed',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Mimo',
            room: 'React course'
        }, {
            id: '3',
            name: 'Shoosh',
            room: 'Node course'
        }]
    })

    it('should add a new user', () => {
        const users = new Users()
        const user = {
            id: '123',
            name: 'Ahmed',
            room: 'The Office Fans'
        }

        const resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([resUser])
    })

    it('should remove a user', () => {
        const removedUser = users.removeUser('1')
        
        expect(removedUser.name).toBe('Ahmed')
        expect(users.users).toMatchObject([{name:'Mimo'}, {name:'Shoosh'}])
        expect(users.users.length).toBe(2)
    })

    it('should not remove a user', () => {
        const removedUser = users.removeUser('123')
        
        expect(removedUser).toBeFalsy()
        expect(users.users.length).toBe(3)
    })

    it('should find a user', () => {
        const user = users.getUser('1')

        expect(user.name).toBe('Ahmed')
    })

    it('should not find a user', () => {
        const user = users.getUser('123')

        expect(user).toBeFalsy()
    })

    it('should return names for node course', () => {
        const userList = users.getUserList('Node course')

        expect(userList).toEqual(['Ahmed', 'Shoosh'])
    })

    it('should return names for react course', () => {
        const userList = users.getUserList('React course')

        expect(userList).toEqual(['Mimo'])
    })

})