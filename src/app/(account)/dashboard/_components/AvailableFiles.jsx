import React, { useState, useEffect } from "react";
import { getOrdersByUser } from "@/app/api/orders";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

function AvailableFiles() {
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
                    <th className="">Available Files</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map(
                    (order) =>
                      // Render row only if there are files available
                      order.attributes.files?.data?.length > 0 && (
                        <tr key={order.id}>
                          <td className="">#{order.id}</td>
                          <td className="">
                            {order.attributes.status !== "cancelled" &&
                              order.attributes.products.data.map((product) => (
                                <Link
                                  key={product.id}
                                  target="_blank"
                                  href={"#"} // Replace with the actual link if needed
                                  className=""
                                >
                                  {product.attributes.title}
                                </Link>
                              ))}
                          </td>
                          <td className="">
                            {order.attributes.files.data.map((file) => (
                              <Link
                                key={file.id}
                                href={file.attributes.url} // URL of the file
                                target="_blank"
                                className=""
                              >
                                {file.attributes.name} {/* Name of the file */}
                              </Link>
                            ))}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AvailableFiles;
