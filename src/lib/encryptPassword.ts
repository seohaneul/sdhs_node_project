

import * as crypto from 'crypto'
// allowSyntheticDefaultImports: true
// import crypto from 'crypto'

export default function encryptPassword (password:string): string {
    return crypto
        .createHash('sha256')
        .update(password + '#0g830T8Ha)*fdH9312R{}')
        .digest('base64')
}