import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Table = () => {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/users");
      //   console.log(result.data.results);
      setUserData(result.data.results);
    } catch (err) {
      console.log("Something went Wrong");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
    const newData = userdata.filter((item) => {
      return item.id !== id;
    });
    setUserData(newData);
  };
  return (
    <>
      <section className="grid h-[calc(1fr-350px)] items-center text-center p-2">
        <table className="mx-96">
          <tbody>
            <tr className="text-2xl font-semibold">
              <th>NO.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACTION</th>
            </tr>
            {userdata.map((user, i) => {
              return (
                <tr key={i} className="odd:bg-white even:bg-gray-300 ">
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="flex justify-center gap-10">
                    <NavLink
                      to={`/user/${user.id}`}
                      className="cursor-pointer py-1 px-6 bg-sky-800 text-white rounded-lg"
                    >
                      <button>View</button>
                    </NavLink>
                    <NavLink
                      to={`/edit/${user.id}`}
                      className="cursor-pointer py-1 px-6 bg-green-800 text-white rounded-lg"
                    >
                      <button>Edit</button>
                    </NavLink>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="cursor-pointer py-1 px-6 bg-red-800 text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
