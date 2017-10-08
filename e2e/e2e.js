import { Selector, Role } from 'testcafe'
import crypto from 'crypto'
import fb_clean from './fb_clean.js'
import config from '../src/config/index.js'

const client_url = config.e2e_client_url(process.env.E2E_CLIENT_URL)

// set up
const crypto_string = crypto.randomBytes(24).toString('hex')
const test_channel = `zzz-test---${crypto_string.toLowerCase()}`
const passcode = crypto.randomBytes(12).toString('hex')

fixture`Can create a channel at ${client_url}`.page`${client_url}`
test('go to a channel/route', async t => {
  await t
    .typeText('[data-t="channelInput"]', test_channel)
    .click('[data-t="channelBtn"]')
    .expect(Selector('[data-t="channelH1"]').innerText)
    .eql(test_channel)
})

fixture`Can create a note at ${client_url}`.page`${client_url}/${test_channel}`
test('post public message', async t => {
  await t
    .typeText('textarea', test_channel)
    .click('[data-t="addNoteBtn"]')
    .expect(Selector('[data-t="noteContent"]').innerText)
    .eql(test_channel)
  
  // clean up
  fb_clean.clean(test_channel)
})

fixture`Can create a secret note at ${client_url}`.page`${client_url}/${test_channel}`
test('secret note', async t => {
  await t
    .click('[data-t="toggleSecretBtn"]')
    .typeText('[data-t="createPasscode"]', passcode)
    .typeText('textarea', test_channel)
    .click('[data-t="addNoteBtn"]')
    .click('[data-t="passcodeObscured"]')
    .typeText('[data-t="unlockPasscode"]', passcode)
    .click('[data-t="unlockPasscodeBtn"]')
    .expect(Selector('[data-t="noteContentSecret"]').innerText)
    .eql(test_channel)
  
  // clean up
  fb_clean.clean(test_channel)
})

//TODO: firebase won't authenticate test browser anonymously...
// const anonymousAuthedUser = Role(`${client_url}`, async t => {
//   await t
// });
// fixture`Can create a note at ${client_url}`.page`${client_url}/${test_channel} then remove it`
// test('undo save', async t => {
//   await t
//     .useRole(anonymousAuthedUser)
//     .typeText('textarea', test_channel)
//     .click('[data-t="addNoteBtn"]')
//     .wait(30000)
//     .click('[data-t="UndoPrompt"]')
//     .expect(Selector('[data-t="noteContent"]').innerText)
//     .notEql(test_channel)
// })

    