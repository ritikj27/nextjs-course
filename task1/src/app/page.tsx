"use client";

import Contact from "@/components/Contact";
import Menu from "@/components/Menu";
import "./style.css";

export default function Home() {
  return (
    <main>
      <div
        id="home"
        style={{
          backgroundImage: `url("/img3.avif")`, // Set background image for the hero section
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* <div
          style={{
            backgroundColor: "rgba(0,0,0,0.72)",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.7em",
            position: "fixed",
            zIndex: 9999,
            width: "100%",
            // flex:1
          }}
        >
          <div>
            <h2
              style={{
                color: "gold",
                fontWeight: "bold",
                fontSize: "1.7rem",
              }}
            >
              <a href="#home">QScript Coffee</a>
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "34%",
            }}
          >
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <a href="#about">About Us</a>
              </h4>
            </div>
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <a href="#menu"> Menu</a>
              </h4>
            </div>
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <a href="#contact">Contact Us</a>
              </h4>
            </div>
          </div>
        </div> */}
        <div
          className="header-container"

        >
          <div>
            <h2
              style={{
                color: "gold",
                fontWeight: "bold",
                fontSize: "1.7rem",
                margin: 0, // Remove margin for smaller screens
              }}
            >
              <a href="#home" style={{ textDecoration: "none" }}>
                QScript Coffee
              </a>
            </h2>
          </div>
          <div
           
            className="navigation-container"
          >
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  margin: 0, // Remove margin for smaller screens
                }}
              >
                <a href="#about" style={{ textDecoration: "none" }}>
                  About Us
                </a>
              </h4>
            </div>
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  margin: 0, // Remove margin for smaller screens
                }}
              >
                <a href="#menu" style={{ textDecoration: "none" }}>
                  Menu
                </a>
              </h4>
            </div>
            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  margin: 0, // Remove margin for smaller screens
                }}
              >
                <a href="#contact" style={{ textDecoration: "none" }}>
                  Contact Us
                </a>
              </h4>
            </div>
          </div>
        </div>

        <section
          style={{
            position: "relative",
            minHeight: "110vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2em",
          }}
        >
          <div
            className="hero-content"
            style={{
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            <h1
              style={{ fontSize: "2.3rem", color: "white", fontWeight: "bold" }}
            >
              Welcome to <span style={{ color: "gold" }}>QScript Coffee</span>
            </h1>
            <p style={{ color: "white", fontWeight: "bold" }}>
              Experience our specialty coffee and delicious pastries!
            </p>
            <button
              style={{
                backgroundColor: "gold",
                color: "black",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              <a href="#contact">Contact Us</a>
            </button>
          </div>
          <div id="about"></div>
        </section>
      </div>
      {/* </main>
      <main> */}
      <div className="aboutus-section">
        <section
          style={{
            position: "relative",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2em",
            backgroundImage: `url("/img6.jpg")`, // Set background image for the hero section
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                color: "gold",
                marginBottom: "1em",
                fontSize: "1.7rem",
                fontWeight: "bold",
              }}
            >
              About Us
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "rgba(0,0,0,0.32)",
                fontFamily: "monospace",
                fontSize: "1rem",
              }}
            >
              QScript Coffee began with a simple yet ambitious mission: to
              provide a unique coffee experience rooted in quality, community,
              and sustainability. Our journey started with a love for coffee and
              a desire to share that passion with others. Today, we continue to
              uphold our commitment to sourcing the finest beans, crafting
              exceptional brews, and fostering connections within our community.
              At QScript Coffee, every cup tells a story, and we invite you to
              be a part of ours.
            </p>
          </div>
          <div id="menu"></div>
        </section>
      </div>

      <Menu />

      <Contact />
    </main>
  );
}
