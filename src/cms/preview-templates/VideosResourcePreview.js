import React from 'react'
import PropTypes from 'prop-types'
// import format from 'date-fns/format'

const VideoResourcePreview = ({ list }) => {
  return <div>{JSON.stringify(list)}</div>
}

// VideoResourcePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
// }

export default VideoResourcePreview
