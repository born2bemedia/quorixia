import React, { useState, useEffect } from "react";
import { getOrdersByUser } from "@/app/api/orders";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

function Orders() {
  const { currentUser, fetchCurrentUser } = useAuth();
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const ordersData = await getOrdersByUser(currentUser.email);
        setOrders(ordersData);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser]);

  return (
    <>
      <div>
        {loading && <p className="">Loading orders...</p>}
        {error && <p className="">{error}</p>}
        {orders && (
          <div className="">
            <div className="orders-wrap">
              <table className="orders">
                <thead className="">
                  <tr>
                    <th className="">Order ID</th>
                    <th className="">Service Purchased</th>
                    <th className="">Date</th>
                    <th className="">Total Price</th>
                    <th className="">Payment Method</th>
                    <th className="">Order Status</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="">#{order.id}</td>
                      <td className="">
                        {order.attributes.status != "cancelled" &&
                          order.attributes.products.data.map((product) => (
                            <Link
                              key={product.id}
                              target="_blank"
                              href={"#"}
                              className=""
                            >
                              {product.attributes.title}
                            </Link>
                          ))}
                      </td>
                      <td className="">{order.attributes.createdAt}</td>

                      <td className="">$ {order.attributes.amount}</td>
                      <td className="">Bank Transfer</td>
                      <td className="">
                        {order.attributes.status == "cancelled" ? (
                          <div className="">Cancelled</div>
                        ) : (
                          <div className="">Completed</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
