import React, { Component } from 'react'
import { s } from '../ui/Styles.js' // styles utility
import clipboard from '../../assets/clipboard.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ShareUrl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false
    }
  }

  render() {
    const icon_clipboard = {
      width: '16px',
      height: 'auto',
      margin: '0px 5px',
      verticalAlign: '-2px'
    }
    return (
      <p>
        <CopyToClipboard
          style={{
            ...s.ff_mono,
            ...s.cursor_default
          }}
          text={window.location.href}
          onCopy={() => this.setState({ copied: true })}
        >
          <span>
            Share URL
            <img src={clipboard} alt="Clipboard" style={icon_clipboard} />
            {this.state.copied ? 'copied to clipboard!' : ''}
          </span>
        </CopyToClipboard>
      </p>
    )
  }
}

export default ShareUrl
