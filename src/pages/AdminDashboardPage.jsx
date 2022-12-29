import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full lg:text-4xl h-screen text-gray-700 bg-primary lg:px-[5.5rem] px-[2rem]">
        <Header />
        <Table/>
      </div>
    </>
  );
};

export default AdminDashboardPage;
