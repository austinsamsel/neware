import React from 'react'
import GoTo from '../containers/GoTo'

let input;
const ChannelForm = (props) => (
  <div>
    <div>
      <p>
        If you want to do anything on the internet you need to create an account, sign up and login. If your password is any good, you probably can't remember it. So when you find yourself on a public computer or a friend's device and your all logged out... but you really want to save a note for later... you can use NEWARE.
      </p>
      <p>
        <strong>How it works:</strong> You create a memorable channel, which is just a URL, and save your note to it. No log in, no sign up, no account necessary. Your note will <strong>not</strong> be private, but you can access it later at the URL you created. All notes are posted for 24 hours and after that, they get removed.
      </p>
    </div>
    <div>
      create or go to a channel:
    </div>
    <input
      onKeyUp={e => {
        if (!input.value.trim()) {
          return
        }
        props.onKeyUp(input.value)
      }}
      ref={node => {
        input = node
      }}
    />
    <GoTo />
  </div>
)
export default ChannelForm

ChannelForm.propTypes = {
  onKeyUp: React.PropTypes.func.isRequired
};
