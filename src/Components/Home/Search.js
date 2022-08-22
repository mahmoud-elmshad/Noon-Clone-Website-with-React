import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
export default function Search() {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  return (
    <ReactSearchBox
      placeholder="Placeholder"
      value="Doe"
      data={data}
      callback={(record) => console.log(record)}
    />
  );
}
