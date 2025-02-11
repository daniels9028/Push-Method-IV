import React, { useState } from "react";
import { formatDate } from "../utils/changeFormatDate";

const Table = ({ data }) => {
  console.log(data);
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Gender</th>
              <th className="py-2 px-4 text-left">Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr
                className="border-b hover:bg-gray-100 transition duration-200"
                key={user?.login?.uuid}
              >
                <td className="py-2 px-4">{user?.login?.username}</td>
                <td className="py-2 px-4">
                  {user?.name?.title} {user?.name?.first} {user?.name?.last}
                </td>
                <td className="py-2 px-4">{user?.email}</td>
                <td className="py-2 px-4 capitalize">{user?.gender}</td>
                <td className="py-2 px-4">
                  {formatDate(user?.registered?.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
