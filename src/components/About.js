import React from 'react'

const About = () => (
  <div style={{
    maxWidth:'600px'
  }}>
    <h2 style={{
      marginTop:'0px',
      color:'darkgray',
    }}>
      Save it for later from anywhere.
    </h2>
    <p>
      These days if you want to do anything on the internet you need to create an account, sign up and login. If your password is any good, you probably can't remember it. So when you find yourself on a public computer or a friend's device... but you need to save a note for later... you can use NEWARE.
    </p>
    <p>
      <strong>How it works:</strong> Create a memorable channel, which is just a URL, for example: 
    </p>

    <p>
    {window.location.href}<strong>MYCHANNEL</strong> 
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
