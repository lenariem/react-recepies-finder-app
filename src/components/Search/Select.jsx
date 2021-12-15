import { useState, useEffect } from "react";
import Select from "react-select";

export default function SelectCategory({ cb }) {
  const [searchTerm, setSearchTerm] = useState("");

  const options = [
    { value: "", label: "All categories" },
    { value: "beef", label: "Beef" },
    { value: "dessert", label: "Dessert" },
    { value: "chicken", label: "Chicken" },
    { value: "miscellaneous", label: "Miscellaneous" },
    { value: "pasta", label: "Pasta" },
    { value: "pork", label: "Pork" },
    { value: "seafood", label: "Seafood" },
    { value: "side", label: "Side" },
  ];

  const handleChange = (selectedOption) => {
    setSearchTerm(selectedOption);
  };

  useEffect(() => {
    cb(searchTerm.value);
  }, [searchTerm]);

  return (
    <Select value={searchTerm} onChange={handleChange} options={options} placeholder="Choose a category"/>
  );
}
