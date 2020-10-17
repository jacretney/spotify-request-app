import React from 'react'

const Header = () => {
  return (
    <header>
      <p className="branding">Song Requests App</p> {/* TODO: Replace with image */}
      <p className="room-id">Room ID: 2210</p> {/* TODO: Replace with room ID */}
      <button className="leave-button">Leave room</button> {/* TODO: Replace with nicer button */}
    </header>
  )
}

export default Header
