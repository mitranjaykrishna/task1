/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

export default function Dash() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const getAllData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-20 pt-28 pb-20  bg-[#c2dedc79]">
          {data.map((d) => (
            <div key={d.id}>
              <Cards
                name={d.title}
                description={d.description}
                image={d.image}
                price={d.price}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
