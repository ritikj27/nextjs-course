import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: mess,
    };
    alert("data send !!!");
    console.log(formData);
    setName("");
    setEmail("");
    setMess("");
  };

  return (
    <div
      id="contact"
      style={{
        display: "flex",
        minHeight: "95vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/img10.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.52)",
          padding: "2rem",
          marginTop: "2rem",
          borderRadius: "20px",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "gold",
            fontSize: "1.7rem",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <label
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "left",
            }}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: "1.2rem",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid white",
              padding: "0.5rem",
              borderRadius: "8px",
            }}
          />
          <label
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "left",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: "1.2rem",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid white",
              padding: "0.5rem",
              borderRadius: "8px",
            }}
          />
          <label
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "left",
            }}
          >
            Message
          </label>
          <textarea
            placeholder="Enter your Message"
            value={mess}
            onChange={(e) => setMess(e.target.value)}
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: "1.2rem",
              backgroundColor: "rgba(0, 0, 0, 0.72)",
              border: "1px solid white",
              padding: "0.5rem",
              borderRadius: "8px",
            }}
          />
          <button
            type="submit"
            style={{
              color: "black",
              backgroundColor: "gold",
              width: "40%",
              borderRadius: "8px",
              padding: "0.5rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
