import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "./components/Dialog";
import Toast from "./components/Toast";
import { toast } from "react-hot-toast";
import { login } from "../services/authService";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  // Toast state
  const [toastMessage, setToastMessage] = useState("");

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmitSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        setDialogTitle("Login Successful 🎉");
        setDialogMessage("Welcome back! You have logged in successfully.");
        setDialogOpen(true);
        setToastMessage("✅ Login successful!");
      } else {
        setDialogTitle("Login Failed ❌");
        setDialogMessage("Invalid email or password. Please try again.");
        setDialogOpen(true);
      }
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("accessToken", "");
    if (!email || !password) {
      toast.error("Please enter both username and password");
      return;
    }

    setLoading(true);
    try {
      const res = await login({
        username: "dk988",
        password: "Pass@321",
        login_type: "CREDENTIALS",
        deviceId: "7A87DA66-DE6A-4C68-B40C-3095CF8AAE65",
      });

      if (res.status === "00") {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        toast.success("Login successful ✅");
        navigate("/dashboard");
      } else {
        toast.error(res.message || "Invalid credentials ❌");
      }
    } catch (err) {
      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          {error && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address or User Name
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

          <button onClick={handleSubmitSimulate} className="mt-4 text-sm text-gray-500 underline">
             Simulate Login
          </button>

      </div>

      {/* Dialog */}
      <Dialog
        isOpen={dialogOpen}
        title={dialogTitle}
        message={dialogMessage}
        onClose={() => setDialogOpen(false)}
      />

      {/* Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </>
  );
};

export default Login;
