import React, {Component} from 'react';
import { Link } from 'react-router-dom'

function ProposedDebateListItem (props) {

  function checkSupportStatus () {
    let supports = "Nay"
    if (props.stance === "Nay") {
      supports = "Yea"
    }
    return supports
  }

  function makeDebator () {
    console.log("MAKE DEBATOR", props.debateRoom)
    props.setUserToDebator("debator2")
    // props.setDebateRoomDebator2(props.currentUser, props.debateRoom)
    let debator2 = {username:props.currentUser.name, stance:checkSupportStatus(), room:props.debateRoom}
    props.socket.emit("addDebator2", JSON.stringify(debator2))
  }

    return (
      <div>
        <li className='proposed-debate-li'>{props.proposingUser} proposes: {props.topic} in {props.debateRoom.name}<Link to={`/${props.debateRoom.name}`} onClick={makeDebator}>
        <input className="button input-sm btn float-right button-join-debate btn-dark" value={checkSupportStatus()}/></Link></li>
      </div>
    );
}

export default ProposedDebateListItem;