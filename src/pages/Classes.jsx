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

const Claases = () => {
  return (
    <CrudPage
      pageColumns={columns}
      title={"Classe"}
      pageForum={forms}
      collectionName={"classes"}
    ></CrudPage>
  );
};

export default Claases;
