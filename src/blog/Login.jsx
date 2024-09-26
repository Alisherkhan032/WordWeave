import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    const data = { email, password };

    const url = "http://localhost:4000/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", // This sends the cookie along with the request
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        console.log("Login successful!");
        setInvalid(false);
        navigate("/allblogs");
      } else {
        console.error("Login failed:", result.error);
        setInvalid(true);
        navigate("/login");

        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setInvalid(true);
      navigate("/login");

      setEmail("");
      setPassword("");
      console.error(err);
    }
  };

  return (
    <div className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        {invalid && <div className="Invalid-error">invalid credentials</div>}
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="form-label">
          Password:
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
