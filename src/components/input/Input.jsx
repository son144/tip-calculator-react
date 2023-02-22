import "./Input.css";
import React, { useState } from "react";

import CustomerList from "../customerList/CustomerList";

const Input = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
 const [select, setSelect] = useState(10);
  const [userList, setUserList] = useState([]);

  const billAmtHandler = (e) => {
    setAmount(e.target.value);
  };
  const userNameHandler = (e) => {
    setName(e.target.value);
  };
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const tip = +(amount * select) / 100;
    const data = {
      name: name,
      tip: tip,
    };
    if (name === "" && amount === "") {
      alert("please enter name and amount");
    } else if (amount === "") {
      alert("please enter amount");
    } else if (name === "") {
      alert("please enter name ");
    } else {
      setUserList((prev) => {
        return [data, ...prev];
      });
    }
    setName("");
    setAmount("");
  };

  return (
    <form className="from-parent" onSubmit={formSubmitHandler}>
      <div className="bill-amt">
        <label className="amt-label">Enter your bill amount</label>
        <input id="amt" value={amount} onChange={billAmtHandler} />
      </div>
      <div className="hr"></div>
      <section className="sec-section">
        <label className="service">How was the service</label>
        <select className="select" value={select} onChange={selectHandler}>
          <option value="10">10% Good</option>
          <option value="15">15% Better</option>
          <option value="20">20% Best </option>
          <option value="25">25% Excellent</option>
        </select>
        <input
          className="customer"
          placeholder="customer name"
          value={name}
          onChange={userNameHandler}
        />
        <button className="add-btn" type="submit">
          Add customer
        </button>
        <CustomerList item={userList} />
      </section>
    </form>
  );
};
export default Input;
