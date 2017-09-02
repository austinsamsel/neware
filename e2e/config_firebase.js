import admin from 'firebase-admin'
require('dotenv').config()

const pre = '-----BEGIN@PRIVATE@KEY-----'
const suf = '-----END@PRIVATE@KEY-----_n'

const fb_concat = pre + process.env.FIREBASE_KEY + suf
const fb_key = fb_concat.replace(/@/g, ' ')
const fb_key2 = fb_key.replace(/_/g, '\\')
const fb_key3 = fb_key2.replace(/\\n/g, '\n')

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_ID,
    clientEmail: process.env.FIREBASE_EMAIL,
    privateKey: fb_key3
  }),
  databaseURL: process.env.FIREBASE_URL
})