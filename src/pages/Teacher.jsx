import React from "react";
import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: 1,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: 2,
  },
];
const forms = [
  {
    label: "First Name",
    name: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
  },
];
const Teacher = () => {
  return (
    <CrudPage
      pageColumns={columns}
      title={"Teacher"}
      pageForum={forms}
      collectionName={"teachers"}
    ></CrudPage>
  );
};

export default Teacher;
