import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    alert(`User ${values.username} registered successfully!`);
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Formik Registration Form
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
