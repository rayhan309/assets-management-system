import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import { Box, Image, Layers, Hash } from "lucide-react";
import useAxiosSquere from "../../../Hooks/useAxiosSquere";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddAsset = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSquere = useAxiosSquere();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    // console.log(data); // placeholder

    const formData = new FormData();
    formData.append("image", data.productImage[0]);
    // console.log(formData);

    const apiKey = import.meta.env.VITE_imagebb_api_key;

    // image uploade
    const res = await axiosSquere.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );
    const imageUrl = res.data.data.url;

     data.productImage = imageUrl;

    axiosSquere
      .post("/assets", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your asset has been posted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-12 p-6 bg-white/10 rounded-2xl border border-slate-800 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Add an Asset
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* email */}
        <div className="input-container">
          <input
            defaultValue={user?.email}
            readOnly
            {...register("HREmail")}
            className="input-field"
            type="text"
          />
          <label for="input-field" className="input-label">
           Your Email
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Product Name */}
        <div className="input-container">
          <input
            placeholder="Product Name"
            {...register("productName")}
            className="input-field"
            type="text"
          />
          <label for="input-field" className="input-label">
            Product Name
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Product Image */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Product Image</span>
          </label>
          <div>
            <input
              type="file"
              className="file-input file-input-bordered w-full text-white"
              {...register("productImage")}
            />
          </div>
        </div>

        {/* Product Type */}
        <div className="w-full">
          <div className="relative">
            <label className="label">
              <span className="label-text text-white">Product Quantity</span>
            </label>
            <select
              className="select select-bordered w-full pl-3"
              {...register("productType")}
            >
              <option value="">Select type</option>
              <option value="Returnable">Returnable</option>
              <option value="Non-returnable">Non-returnable</option>
            </select>

            <label for="input-field" className="input-label">
              Product Quantity
            </label>
          </div>
        </div>

        {/* Product Quantity */}
        <div className="input-container">
          <input
            placeholder="Enter quantity"
            {...register("productQuantity")}
            className="input-field"
            type="number"
          />
          <label for="input-field" className="input-label">
            Product Quantity
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn btn-primary mt-3 w-full bg-blue-600 border-none hover:bg-blue-500"
        >
          Add Asset
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddAsset;
