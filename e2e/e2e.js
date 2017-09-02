import { Selector } from 'testcafe'
require('dotenv').config()
import crypto from 'crypto'
import fb_clean from './fb_clean.js'

const development = true
let client_url
if (development) {
  client_url = process.env.URL_DEVELOPMENT
} else {
  client_url = process.env.URL_PRODUCTION
}

const crypto_string = crypto.randomBytes(48).toString('hex')
const test_channel = `zzz_test___${crypto_string.toLowerCase()}`

const passcode = crypto.randomBytes(12).toString('hex')

fixture`Can create a channel`.page`${process.env.URL_DEVELOPMENT}`
test('go to a channel/route', async t => {
  await t
    .typeText('[data-t="channelInput"]', test_channel)
    .click('[data-t="channelBtn"]')
    .expect(Selector('[data-t="channelH1"]').innerText)
    .eql(test_channel)
})

fixture`Can create a note`.page`${process.env.URL_DEVELOPMENT}/${test_channel}`
test('post public message', async t => {
  await t
    .typeText('textarea', test_channel)
    .click('[data-t="addNoteBtn"]')
    .expect(Selector('[data-t="noteContent"]').innerText)
    .eql(test_channel)
  
  // clean up
  fb_clean.clean(test_channel)
})

fixture`Can create a secret note`.page`${process.env.URL_DEVELOPMENT}/${test_channel}`
test('post public message', async t => {
  await t
    .click('[data-t="toggleSecretBtn"]')
    .typeText('[data-t="createPasscode"]', passcode)
    .typeText('textarea', test_channel)
    .click('[data-t="addNoteBtn"]')
    .typeText('[data-t="unlockPasscode"]', passcode)
    .click('[data-t="unlockPasscodeBtn"]')
    .expect(Selector('[data-t="noteContentSecret"]').innerText)
    .eql(test_channel)
  
  // clean up
  fb_clean.clean(test_channel)
})
