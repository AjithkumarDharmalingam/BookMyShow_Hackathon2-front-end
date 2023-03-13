import React from "react";
import "./seat.css";
export const TableHeader = ({ seatsColumns }) => (
  <tr>
    <td />
    {seatsColumns.map((column, index) => (
      <td key={index}>{column}</td>
    ))}
  </tr>
);