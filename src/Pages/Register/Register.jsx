import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useAxiosSquere from "../../Hooks/useAxiosSquere";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const axiosSquere = useAxiosSquere();
  const { createUser, updateUser } = useAuth();

  const role = watch("role");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    const apiKey = import.meta.env.VITE_imagebb_api_key;

    // image uploade
    const res = await axiosSquere.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );
    const imageUrl = res.data.data.url;
    // console.log(imageUrl);

    imageUrl
      ? (data.photo = imageUrl)
      : "https://i.ibb.co.com/Lw5NHb1/pexels-moein-moradi-209759-672636.jpg";
    if (data.role === "hr") {
      data.packageLimit = 5;
      data.currentEmployees = 0;
      data.subscription = "basic";
    }

    createUser(data.email, data.password)
      .then((res) => {
        if (res.user) {
          axiosSquere
            .post("/users", data)
            .then((res) => {
              if (res.data.message === "this user alrady create account") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  // footer: '<a href="#">Why do I have this issue?</a>',
                });
              }
              if (res.data.insertedId) {
                updateUser(data.name, imageUrl)
                  .then(() => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Your acount has been created!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  })
                  .catch(() => {
                    toast.error("photo Update issus");
                  });
              }
            })
            .catch((err) => {
              toast.error(err);
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-full max-w-4xl bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/30"
      >
        <h2 className="text-4xl font-bold text-center text-white drop-shadow mb-8">
          Create Your Account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-white text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-yellow-300 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-yellow-300 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-white text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              {errors.password && (
                <p className="text-yellow-300 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* photo */}
            <div>
              <label className="text-white text-sm font-semibold">
                Your Photo
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("photo", {
                  required: "photo is required",
                })}
              />
              {errors.photo && (
                <p className="text-yellow-300 text-sm">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="text-white text-sm font-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
              />
              {errors.dateOfBirth && (
                <p className="text-yellow-300 text-sm">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {/* Role Selection */}
            <div>
              <label className="text-white text-sm font-semibold">
                Select Role
              </label>
              <select
                className="select select-bordered w-full bg-white/40 backdrop-blur-md"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Choose Role</option>
                <option value="hr">HR Manager</option>
                <option value="employee">Employee</option>
              </select>
              {errors.role && (
                <p className="text-yellow-300 text-sm">{errors.role.message}</p>
              )}
            </div>

            {/* HR Fields */}
            {role === "hr" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {/* Company Name */}
                <div>
                  <label className="text-white text-sm font-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                    {...register("companyName", {
                      required: "Company name is required for HR",
                    })}
                  />
                  {errors.companyName && (
                    <p className="text-yellow-300 text-sm">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Company Logo */}
                <div>
                  <label className="text-white text-sm font-semibold">
                    Company Logo URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="input input-bordered w-full bg-white/40 backdrop-blur-md"
                    {...register("companyLogo", {
                      required: "Logo URL is required for HR",
                    })}
                  />
                  {errors.companyLogo && (
                    <p className="text-yellow-300 text-sm">
                      {errors.companyLogo.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-primary w-full col-span-1 md:col-span-2 mt-4 text-white text-lg"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
