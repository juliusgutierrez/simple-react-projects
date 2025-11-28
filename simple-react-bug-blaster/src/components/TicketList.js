import React from "react";
import TicketItems from "./TicketItems";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItems key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </div>
  );
}
