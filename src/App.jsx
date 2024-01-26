import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { ConfigProvider } from "antd";
import Teacher from "./pages/Teacher";
import Subjects from "./pages/Subjects";
import Timetable from "./pages/Timetable";
import Classes from "./pages/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "teacher",
        element: <Teacher />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "timetable",
        element: <Timetable />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#bc8e5c",
          },
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
