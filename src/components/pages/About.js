import React from 'react'

const About = () => (
  <div style={{
    maxWidth:'600px'
  }}>
    <p>
      These days if you want to do anything on the internet you need to create an account, sign up and login. If your password is hard to guess, you probably can't remember it. So when you find yourself on a public computer or a friend's device... but you need to save a note for later... you can use NEWARE.
    </p>
    <p>
      <strong>How it works:</strong> Create a memorable channel, which becomes a URL, for example: 
    </p>

    <p style={{
      fontFamily:'Consolas,monaco,monospace',
      fontSize: '14px',
      backgroundColor:'#f7f7f7',
      padding:'16px',
    }}>
    {window.location.href}<span style={{color:'blueviolet'}}>your-channel-here</span> 
    </p>

    <p>
    and save your note to it. No log in, no sign up, no account necessary. Your note will <strong>not</strong> be private, but you can access it later. 
    </p>
    <p>
      All notes are available for 24 hours and after that, they get removed.
    </p>
    <p>
      Made by <a style={{color:'fuchsia'}} href="https://hightops.co">High Tops</a>.
    </p>
  </div>
)
export default About
