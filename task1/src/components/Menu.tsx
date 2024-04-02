import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Image component from next/image

type dataType = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

const pastries = [
  {
    title: "Alexandertorte",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Aleksanterinleivos.jpg/120px-Aleksanterinleivos.jpg",
    des: "Pastry strips filled with berries.",
    id: 1,
  },
  {
    title: "Alfajor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Alfajor_H.jpg/120px-Alfajor_H.jpg",
    des: "Pastry strips filled with dulce de leche.",
    id: 2,
  },
  {
    title: "Birnbrot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/B%C3%BCndner_Birnbrot.jpg/120px-B%C3%BCndner_Birnbrot.jpg",
    des: "A traditional pastry originating in Switzerland with a filling of dried pears",
    id: 3,
  },
  {
    title: "Bizcocho",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Strudel.jpg/120px-Strudel.jpg",
    des: "Pastry strips filled with berries.",
    id: 4,
  },
];

export default function Menu() {
  const [data, setData] = useState<dataType[]>([]);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");

    const json = await resp.json();
    console.log(JSON.stringify(json));
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        padding: "0 20px",
        backgroundColor: "black",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "gold",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Menu
      </h1>
      <h1
        style={{
          textAlign: "center",
          color: "gold",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Coffee's
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data?.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "8px",
              height: "auto", // Set height to auto for responsiveness
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
            }}
          >
            <Image
              src={item.image}
              width={250}
              height={200}
              alt={item.title}
            />
            <div>
              <h2
                style={{
                  textAlign: "center",
                  color: "gold",
                  fontWeight: "bold",
                  fontFamily: "1.5rem",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "gold",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Pastries
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {pastries?.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "8px",
              height: "auto", // Set height to auto for responsiveness
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
            }}
          >
            <Image
              src={item.image}
              width={250}
              height={200}
              alt={item.title}
            />
            <div>
              <h2
                style={{
                  textAlign: "center",
                  color: "gold",
                  fontWeight: "bold",
                  fontFamily: "1.5rem",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
