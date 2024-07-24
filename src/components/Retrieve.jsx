import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Retrieve = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetchUser();
  }, [id]);
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/users/" + id);
      //   console.log(res.data.user);
      setUser(res.data.user);
    } catch (err) {
      console.log("Something went wrong");
    }
  };
  const HandleBack = () => {
    nav("/");
  };

  return (
    <>
      <section className="grid h-[calc(1fr-350px)] items-center text-center p-2">
        <table className="mx-96">
          <tbody>
            <tr className="text-2xl font-semibold">
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACTION</th>
            </tr>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link>
                  <button
                    className="cursor-pointer py-1 px-6 bg-sky-800 text-white rounded-lg"
                    onClick={HandleBack}
                  >
                    Back to Lobby
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Retrieve;
