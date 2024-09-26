import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Define state variables outside of handleSubmit
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/auth/signup";
    const data = { name: username, email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const result = await response.json();
      if (result.success) {
        // Handle successful signup
        console.log("Signup successful!");
        setInvalid(false);
        navigate("/allblogs");
      } else {
        // Handle failed signup
        setInvalid(true);
        console.error("Signup failed:", result.error);
        setEmail('')
        setPassword('')
        setUsername('')
      }
    } catch (error) {
      // Handle network error
      setInvalid(true);
      setEmail('')
        setPassword('')
        setUsername('')
      console.error("Network error:", error);
    }
  };

  return (
    <div className="signup-section">
      <form className="signup-form" onSubmit={handleSubmit}>
        {invalid && <div className="Invalid-error">Error in registering user</div>}
        <label className="form-label">
          Username:
          <input
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-label">
          Password:
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="submit-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
