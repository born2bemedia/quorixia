import React, { useState, useEffect } from "react";
import { getOrdersByUser } from "@/app/[locale]/api/orders";
import { useAuth } from "@/context/AuthContext";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function Orders() {
  const t = useTranslations("dashboard");
  const { currentUser, fetchCurrentUser } = useAuth();
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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
        {loading && <p className="">{t("orders.loading")}</p>}
        {error && <p className="">{error}</p>}
        {orders && (
          <div className="">
            <div className="orders-wrap">
              <table className="orders">
                <thead className="">
                  <tr>
                    <th className="">{t("orders.id")}</th>
                    <th className="">{t("orders.service")}</th>
                    <th className="">{t("orders.date")}</th>
                    <th className="">{t("orders.total")}</th>
                    <th className="">{t("orders.payment")}</th>
                    <th className="">{t("orders.status")}</th>
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
                      <td className="">
                        {formatDate(order.attributes.createdAt)}
                      </td>

                      <td className="">$ {order.attributes.amount}</td>
                      <td className="">{t("orders.method")}</td>
                      <td className="">
                        {order.attributes.status == "cancelled" ? (
                          <div className="">{t("orders.cancelled")}</div>
                        ) : (
                          <div className="">{t("orders.completed")}</div>
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
