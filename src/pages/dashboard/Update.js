import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Update() {
  const params = useParams();

  const getSingleItem = async () => {
    let response = await fetch(
      `http://localhost:8000/api/editItem/${params.id}`,
      {
        method: "GET",
      }
    );
    response = await response.json();
    console.log("response : ", response);
  };

  useEffect(() => {
    getSingleItem();
  }, []);
  return <div></div>;
}
