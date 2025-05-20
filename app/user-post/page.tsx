"use client";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";

const Posts = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:3000/posts/user/1",
    []
  );

  return loading ? (
    <p>Loading data</p>
  ) : error ? (
    <p>Error in loading Data</p>
  ) : (
    data && (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {data.map((item) => {
            return <Card key={item.id} title={item.title} body={item.body} />;
          })}
        </div>
      </>
    )
  );
};

export default Posts;
