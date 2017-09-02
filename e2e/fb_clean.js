import admin from 'firebase-admin'
require('./config_firebase.js')

const db = admin.database()

const clean = channel => {
  // delete test posts
  const ref_notes = db.ref(`notes/${channel}`)
  ref_notes.remove();
}

module.exports = {
  clean
}
