import { Selector } from 'testcafe';

const random = 'rUgX5lNhT0fAnXYpT3YooRXrrmNsJpSkPvMqriVf145n0knk96'.toLowerCase()

fixture `Getting Started`
  .page `localhost:3000`;

test('should go to a channel/route', async t => {

  await t
    .typeText('[data-t="channelInput"]', random)
    .click('[data-t="channelBtn"]')
    .expect(Selector('[data-t="channelH1"]').innerText).eql(random);
});

// fixture `Getting Started`
// .page `localhost:3000/${random}`;

// test('should post public message', async t => {
//     await t
//       .typeText('textarea', random)
//       .click('button')
//       .expect(Selector('span[data-c="noteContent"]').innerText).eql(random);
//   });