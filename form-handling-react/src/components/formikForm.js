import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(`User ${values.username} registered successfully!`);
    },
  });

  return (
    <div className="p-8 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Formik Registration Form
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded"
        />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500">{formik.errors.username}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormikForm;
