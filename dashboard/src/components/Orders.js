import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/allOrders`).then((res)=>{
      console.log(res.data);
      setAllOrders(res.data);
    })
  },[])
  return (
    <div className="orders">
      <div className="no-orders">
        {allOrders.length===0 ? <p>You haven't placed any orders yet...</p>:
        (
          <div className="order-table">
            <table>
              <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>

              {allOrders.map((stock,index)=>{
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;