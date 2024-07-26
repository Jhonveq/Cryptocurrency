import axios from "axios";
import { tree } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    axios
      .post("https://reqres.in/api/login", user)
      .then((data) => {
        setLoading(false);
        localStorage.setItem("CryptoToken", data.data.token);
        router.push("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-50/15 p-4 rounded-lg">
      <h1 className="text-4xl font-bold">Log In</h1>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-white text-xl">
          Username
        </label>
        <input
          required
          type="email"
          id="username"
          name="username"
          className="rounded-md px-2"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password" className="text-white text-xl">
          Password
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          className="rounded-md px-2"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="text-md font-bold text-center text-red-600 ">
          {error.toUpperCase()}
        </div>
        <div className="text-center mt-2">
          <button
            type="submit"
            className="bg-slate-950 duration-200 text-white rounded-lg border-white border hover:bg-blue-950 py-2 text-center w-32"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
