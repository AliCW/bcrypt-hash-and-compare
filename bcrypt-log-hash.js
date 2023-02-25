const bcrypt = require('bcrypt');
const password = 'Password_123';
const salt = 10;
const hash = '$2b$10$Lvjn1T75xVqKOpCL292pqehLlYAX3SpVWGcsah0lfw4LNCYtGmQHu'

const createHash = (password, salt) => {
    bcrypt.hash(password, salt, function(error, hash) {
        console.log(hash)
    })
}

const compareHash = (password, hash) => {
    bcrypt.compare(password, hash, function(error, result) {
        console.log(result, '<<<<<<')
    }) 
}

createHash(password, salt)

compareHash(password, hash)
