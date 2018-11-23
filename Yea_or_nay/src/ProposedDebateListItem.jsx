import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Home from './Home.jsx';

function ProposedDebateListItem (props) {
  console.log(props)

  function checkSupportStatus () {
    let supports = "Nay"
    if (props.stance === "Nay") {
      supports = "Yea"
    }
    return supports
  }

  function makeDebator () {
    console.log("This is the proposeddebatelist props", props)
    props.closeMainRoomSocket()
    props.setUserToDebator("debator2")
    props.setDebateRoomDebator2(props.currentUser, props.debateRoom)
    console.log("ROOM IS ", props.debateRoom)
  }

    return (
      <li>{props.proposingUser} proposes: {props.topic} in {props.debateRoom.name}<Link to={`/${props.debateRoom.name}`} onClick={makeDebator}><input className="button" value={checkSupportStatus()}/></Link></li>
    );
}

export default ProposedDebateListItem;