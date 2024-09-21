import React, { useEffect, useMemo } from "react";
import Card from "../Card/Card";
import "./SideBar.css";
import { getPriorityIcon, getStatusIcon } from "../../Utils/Helper";
import UserIcon from "../UserIcon/UserIcon";
import { getPriorityLabel } from "../../Utils/index";

function SideBar({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  }, [grouping, groupBy]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy, true);
    if (grouping === "user")
      return (
        <UserIcon
          name={userIdToData[groupBy].name}
          available={userIdToData[groupBy].available}
        />
      );
  }, [grouping, groupBy]);

  // const cardPriorityIcon = useMemo(()=>{

  // })

  // console.log("Tickets is: ", tickets);
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <img src="/icons_FEtask/add.svg" alt="Add" />
          <img src="/icons_FEtask/3-dot-menu.svg" alt="Three Dot Menu" />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
            priorityIcon={getPriorityIcon(
              getPriorityLabel(ticket.priority),
              false
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
