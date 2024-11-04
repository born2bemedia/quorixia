import React, { useState, useEffect } from "react";
import { getOrdersByUser } from "@/app/[locale]/api/orders";
import { useAuth } from "@/context/AuthContext";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function AvailableFiles() {
  const t = useTranslations("dashboard");
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
                    <th className="">{t("orders.files")}</th>
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
                                href={`${process.env.NEXT_PUBLIC_CMS_URL}${file.attributes.url}`} // URL of the file
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
