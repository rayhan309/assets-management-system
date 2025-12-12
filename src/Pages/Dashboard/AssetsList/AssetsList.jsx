import React, { useEffect, useState } from "react";
import useAxiosSquere from "../../../Hooks/useAxiosSquere";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function AssetsList() {
  const axiosSequere = useAxiosSquere();
  const [assets, setAssets] = useState([]);


  useEffect(() => {
    axiosSequere(`/assets`)
      .then((res) => {
        if (res.data) {
          setAssets(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [axiosSequere]);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-6">All Assets</h1>

      <div className="shadow-xl rounded-2xl">
        <div className="p-0 overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4 font-semibold">Asset Image</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Type</th>
                <th className="p-4 font-semibold">Quantity</th>
                <th className="p-4 font-semibold">Date Added</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {assets.map((asset, i) => (
                <tr
                  key={i}
                  className="border-b transition"
                >
                  <td className="p-4">
                    <img
                      src={asset?.productImage}
                      alt={asset?.productName}
                      className="w-14 h-14 object-cover rounded-xl shadow"
                    />
                  </td>

                  <td className="p-4 text-lg font-medium">{asset?.productName}</td>
                  <td className="p-4">{asset?.productType}</td>
                  <td className="p-4">{asset?.productQuantity}</td>
                  <td className="p-4">{new Date(asset?.postAt).toLocaleDateString()}</td>

                  <td className="p-4 flex gap-5 items-center">
                    <Link className="button">
    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Edit
</Link>

                    <button className="noselect"><span className="text">Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
