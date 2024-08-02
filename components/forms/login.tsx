"use client";
import React from "react";
import { Button, Input, Link } from "@nextui-org/react";

export default function Login() {
  // const [logForm, setLogForm] = useState({ email: "", password: "" });
  // const handleForm = (formData: FormData) => {
  //   // authenticate(undefined, formData);
  //   console.log(formData);
  // };

  return (
    <div>
      <form>
        <div className="bg-gray-50 mt-4 p-4 rounded-lg max-w-screen-lg">
          <div className="text-3xl text-center font-bold text-primary mb-4">
            Login
          </div>
          <div className="flex flex-col align-items-center justify-center justify-items-center">
            <Input
              className=" max-sm:w-full w-8/12 mb-4 mx-auto"
              color="primary"
              label="Email"
              name="email"
              variant="bordered"
            />
            <Input
              className="max-sm:w-full w-8/12 mb-4 mx-auto"
              color="primary"
              label="Password"
              name="password"
              type="password"
              variant="bordered"
            />

            <Button
              className="text-white font-bold w-fit mx-auto mt-6"
              color="primary"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </div>
          <div className="flex justify-evenly">
            <div>
              <Link
                className="text-center mx-auto w-full mt-4"
                underline="always"
              >
                Create Account
              </Link>
            </div>
            <div>
              <Link
                className="text-center mx-auto w-full mt-4"
                underline="always"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
