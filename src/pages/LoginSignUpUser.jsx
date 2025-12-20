import React, { useState, useContext } from "react"; 
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../config/AuthContext"; // ✅ import context

const LoginSignUp = () => {
  const { signUp, login } = useContext(AuthContext); // ✅ get signUp from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [action, setAction] = useState("Log In");
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (action === "signup")  {
        await signUp(email, password, displayName);// ✅ await the promise
        alert("Sign Up Successful please log in");
        setAction("login");
        }else {
            await login(email, password);
            alert("Welcome to Findo")
            navigate("/Home");
        }
    } catch (err)  {

        if (err.code === "auth/email-already-in-use") {
            setError("Email already in use. Log In" );
        }else if(err.code === "auth/user-not-found") {
            setError("User not found");
        }else if (err.code === "auth/user-not-found") {
            setError("Incorrect password . Please Try Again");
        }
    }

  function goBack() {
    navigate(-1);
  }
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <h3 className="title-h3">{ action === "signup" ? "Sign Up" : "Log In"}</h3>
        {action === "signup" && (
            <input 
            type="text"
            placeholder="Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
        />
        )}

        <input
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        <button type="submit">{action === "signup" ? "Sign Up" : "LOG IN"}</button>
        {error && <p>{error}</p>}
    </form>

    <p> 
        {action === "signup" ? "Already have an account?" : "Don't have an account" }
        <span
            style={{ color: "blue", cursor:"pointer"}} 
            onClick={()  => setAction(action === "signup" ? "login" : "signup")}
        >
        {action === "signup" ? "Login" : "Sign Up"}
        </span>
    </p>
</div>
   
  );
};

export default LoginSignUp;
