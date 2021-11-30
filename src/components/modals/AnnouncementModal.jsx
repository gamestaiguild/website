import React from 'react'
import close from '../../assets/close.png'
const AnnouncementModel = (props) => {
    const { handleModelClose } = props
    return (
        <div className="modal-container">
        <div className="announcement-modal">
          <div className="close-btn" onClick={handleModelClose}>
              <img src={close} alt="close" />
          </div>
          <div className="description">
              <h3 className="title">IMPORTANT ANNOUNCEMENT!</h3>
              <p>Gamesta is now launching it's IDO on the 15th Dec across multiple launchpads (Oxbull, Enjinstarter, Gamestation & Equinox). Then, starting on the 16th of Dec running for 4 days, we will be running a Fair Launch Pool using Copperlaunch.com, with the starting price of $1.</p>
              <p>We are aiming to raise over $100m which will go directly into purchasing ingame assets and NFT's. The TGE will occur immediately after on 20th Dec.</p>
              <p>Let's unleash GameFi together!</p>
          </div>
          <div className="action-btn">
              <button onClick={handleModelClose} className="btn-hover spec-btn-link">
              Got it!
              </button>
          </div>
        </div>
        </div>
    )
}
export default AnnouncementModel 