"use client";
import React from "react";

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.name}</p>
      <br />
      <p>{error.stack}</p>
    </div>
  );
};

export default Error;
