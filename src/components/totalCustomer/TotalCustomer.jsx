import React from "react"
import "./TotalCustomer.css";

const TotalCustomer = (props) => {
  const customer = props.items.reduce((prev, cuu) => {
    return prev + 1;
  }, 0);

  const tip = props.items.reduce((prev, cuu) => {
    return prev + cuu.tip;
  }, 0);
  return (
    <table>
      <thead>
        <tr>
          <th>Total Customer</th>
          <th className="total-tip">Total Tip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer}</td>
          <td>{tip}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TotalCustomer;
