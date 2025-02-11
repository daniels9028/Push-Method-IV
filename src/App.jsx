import React, { useEffect, useState } from "react";
import { getAllUsers } from "./services/user";
import Table from "./components/table";

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleGetAllUsers = async () => {
    try {
      const { data } = await getAllUsers(page);

      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <div className="py-5 px-10">
      <h2 className="text-2xl font-bold mb-4 text-center">List of Users</h2>
      <Table data={users} />
    </div>
  );
};

export default App;
