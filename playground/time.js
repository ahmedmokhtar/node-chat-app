const moment = require('moment')

// const date = moment()

// date.add(1, 'year')
// console.log(date.format('MMM Do, YYYY'))

const date = moment()
date.add(4, 'hours').subtract(30, 'minutes')
console.log(date.format('h:mm a'))