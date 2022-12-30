import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import TableHeading from "../components/TableHeading";
import { columns } from "../utils/Column";
import MkdSDK from "../utils/MkdSDK";
import { data } from "../data";
const AdminDashboardPage = () => {
  // Call pagination API
  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     let sdk = new MkdSDK();

  //     const payload = {
  //       table: "users",
  //       page: 1,
  //       limit: 10,
  //     };

  //     const response = await sdk.callRestAPI(payload, "GET");

  //     console.log({ response });

  //     setData(response.data);
  //   };
  //   fetchData();
  // }, []);

  console.log({ data });
  return (
    <>
      <div className="w-full lg:text-4xl h-screen text-gray-700 bg-primary lg:px-[5.5rem] px-[2rem]">
        <Header />
        <TableHeading />
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default AdminDashboardPage;
