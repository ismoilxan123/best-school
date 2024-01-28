import { Card, Select } from "antd";
import React from "react";

const WeekDayCard = ({ data }) => {
  return (
    <Card
      type="inner"
      style={{ background: "#bc8e5c", color: "white" }}
      title={data.day}
      bordered={false}
    >
      1. <Select placeholder="choose subject"></Select>
    </Card>
  );
};

export default WeekDayCard;
