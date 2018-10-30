const expect = require('expect')

const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const result = isRealString(123)
        expect(result).toBeFalsy()
    })

    it('should reject strings with only spaces', () => {
        const result = isRealString('   ')
        expect(result).toBeFalsy()
    })

    it('should allow strings with non-spaced characters', () => {
        const result = isRealString('ahmed mokhtar    ')
        expect(result).toBeTruthy()
    })
})