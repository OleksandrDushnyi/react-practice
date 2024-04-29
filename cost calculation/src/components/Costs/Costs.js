import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs
    ? props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
      })
    : [];

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram Mycosts={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
