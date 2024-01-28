import CrudPage from "../layout/CrudPage";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];
const forms = [
  {
    label: "Name",
    name: "name",
  },
];

const Subjects = () => {
  return (
    <CrudPage
      pageColumns={columns}
      title={"Subject"}
      pageForum={forms}
      collectionName={"subjects"}
    ></CrudPage>
  );
};

export default Subjects;
