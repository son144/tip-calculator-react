import React from "react"
import TotalCustomer from "../totalCustomer/TotalCustomer";
import "./CustomerList.css";


const CustomerList = (props) => {
  const renderElem = props.item.map((elem, idx) => {
    return (
      <li key={idx}>
        <span>
          {elem.name} is offering a tip of {elem.tip} rs.
        </span>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-parent">{renderElem}</ul>
      <TotalCustomer items={props.item} />
    </div>
  );
};
export default CustomerList;
