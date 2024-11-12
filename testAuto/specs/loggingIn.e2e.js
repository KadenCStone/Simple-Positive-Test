import loggingIn from '../pageObjects/logIn.js'

describe('First Automated Login Test', () => {
    it('should login with valid user and password', async () => {
        await loggingIn.open()

        await loggingIn.getIn('standard_user', 'secret_sauce')
    })
})