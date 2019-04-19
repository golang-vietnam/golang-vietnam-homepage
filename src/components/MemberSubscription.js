import React, { Component } from 'react'
import { sm } from '@/shared/responsive'

class MemberSubscription extends Component {
  render() {
    return (
      <div
        css={`
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 700px;
          margin: 100px auto 0 auto;
          background-color: #fff;
          iframe {
            height: 1050px;
          }
          ${sm`iframe { height: 995px }`}
        `}
      >
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrivnkBnqJX1oIEf?backgroundColor=teal"
          frameBorder="0"
          width="100%"
        />
      </div>
    )
  }
}

export default MemberSubscription
