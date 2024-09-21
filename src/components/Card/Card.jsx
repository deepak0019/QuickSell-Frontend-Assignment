import React, { useEffect } from "react";
import "./Card.css";
import UserIcon from "../UserIcon/UserIcon.jsx";

import { getStatusIcon } from "../../Utils/Helper.jsx";

function Card({
  ticket,
  userData,
  hideStatusIcon,
  hideProfileIcon,
  priorityIcon,
}) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <div className="more-icon-container">{priorityIcon}</div>
        {ticket.tag.map((t) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
