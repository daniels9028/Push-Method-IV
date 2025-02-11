import React, { useState } from "react";
import { formatDate } from "../utils/changeFormatDate";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import Select from "react-select";

const Table = ({
  data,
  loading,
  page,
  previousPage,
  nextPage,
  search,
  handleChangeSearch,
  selectedOption,
  setSelectedOption,
  resetFilter,
}) => {
  const filteredData = data.filter(
    (item) =>
      item.name.first.toLowerCase().includes(search.toLowerCase()) ||
      item.name.last.toLowerCase().includes(search.toLowerCase()) ||
      item.login.username.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const options = [
    { value: "", label: "All" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="mb-4 flex items-center gap-4">
        <div className="w-full max-w-sm gap-4 flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => handleChangeSearch(e)}
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-full outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="w-full max-w-sm gap-4 flex items-center">
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="w-full"
          />
          <button
            className="py-2 px-4 border bg-white text-nowrap rounded-lg cursor-pointer"
            onClick={resetFilter}
          >
            Reset Filter
          </button>
        </div>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="h-8 bg-gray-300 rounded-md"></div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-xl">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Gender</th>
                <th className="py-2 px-4 text-left">Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((user) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-2">
                    <div className="flex justify-center font-bold text-lg">
                      Data not found
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-gray-200">
              <tr>
                <td colSpan="5" className="py-2 px-4">
                  <div className="flex justify-end space-x-2">
                    {/* Previous Button */}
                    <button
                      className={`p-1 rounded-md flex items-center justify-center hover:bg-gray-200 transition-all ${
                        page === 1
                          ? "cursor-not-allowed bg-gray-400"
                          : "cursor-pointer bg-white"
                      }`}
                      disabled={page === 1}
                      onClick={previousPage}
                    >
                      <FaAngleLeft size={20} />
                    </button>

                    {/* Page Indicator */}
                    <span className="px-3 py-1 bg-white cursor-pointer">
                      {page}
                    </span>

                    {/* Next Button */}
                    <button
                      className="cursor-pointer p-1 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition-all"
                      onClick={nextPage}
                    >
                      <FaAngleRight size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
