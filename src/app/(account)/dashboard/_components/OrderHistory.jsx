"use client";
import { getOrdersByUser } from "@/app/api/getOrders";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const { currentUser, refreshToken } = useAuth();
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async (isRetry = false) => {
      setLoading(true);
      setError(null);

      try {
        const userId = currentUser.id;
        const jwt = localStorage.getItem("jwt");

        const ordersData = await getOrdersByUser(currentUser.email, jwt);
        console.log(ordersData);
        setOrders(ordersData);
      } catch (error) {
        console.error("Failed to fetch orders:", error);

        if (!isRetry) {
          await refreshToken();
          fetchOrders(true);
        } else {
          // If this was the retry attempt, set the error
          setError("Failed to load orders.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser, retry]);

  return (
    <div className="personal-data">
      {loading && <p className="loading">Loading orders...</p>}
      {error && <p className="error">{error}</p>}
      {orders ? (
        <div className="orders-wrap">
          <table className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Date</th>

                <th>Price</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.number}</td>
                  <td>{order.status}</td>
                  <td>
                    {new Date(order.date_created.date).toLocaleDateString()}
                  </td>

                  <td>${order.total}</td>
                  <td>
                    {order.status == "completed" && (
                      <Link target="_blank" href={order.invoice_url}>Download</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>There are currently no orders placed.</p>
      )}
    </div>
  );
};

export default OrderHistory;
