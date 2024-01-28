import { Card, Col, Divider, Row, Select } from "antd";
import useTimetable from "../hooks/useTimetable";
import WeekDayCard from "../components/WeekDayCard";
const options = [
  {
    value: 1,
    label: "9-b",
  },
  {
    value: 2,
    label: "7-a",
  },
];

const weekDay = [
  {
    day: "Monday",
  },
  {
    day: "Tuesday",
  },
  {
    day: "Wednesday",
  },
  {
    day: "Thursday",
  },
  {
    day: "Firday",
  },
  {
    day: "Saturay",
  },
];

const Timetable = () => {
  const { loading, classes } = useTimetable();
  return (
    <div>
      <h1>Timetable</h1>
      <Divider />
      <Select
        loading={loading}
        options={classes.map((cl) => ({ value: cl.id, label: cl.name }))}
        placeholder="Choose Class"
        style={{ width: "300px" }}
      />
      <div style={{ height: "30px" }}></div>
      <Row gutter={16}>
        <Col span={8}>
          <WeekDayCard data={weekDay[0]} />
        </Col>
        <Col span={8}>
          <WeekDayCard data={weekDay[1]} />
        </Col>
        <Col span={8}>
          <WeekDayCard data={weekDay[2]} />
        </Col>
      </Row>
      <div style={{ height: "30px" }}></div>
      <Row gutter={16}>
        <Col span={8}>
          <WeekDayCard data={weekDay[3]} />
        </Col>
        <Col span={8}>
          <WeekDayCard data={weekDay[4]} />
        </Col>
        <Col span={8}>
          <WeekDayCard data={weekDay[5]} />
        </Col>
      </Row>
    </div>
  );
};

export default Timetable;
