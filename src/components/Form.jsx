import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Form = () => {
  const nav = useNavigate();
  const [create, setCreate] = useState({
    name: "",
    email: "",
    password: "",
  });
  const createField = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
    console.log(create);
  };

  const [loading, setLoading] = useState();
  const HandleChange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/add/user",
        create
      );
      console.log(res);
      setLoading(true);
    } catch (err) {
      console.log("Something went wrong");
    }
  };
  if (loading) {
    return <Form />;
  }
  return (
    <>
      <section className="flex flex-col h-[350px] p-2 justify-center items-center gap-3 border-b-2 border-black">
        <h1 className="flex text-3xl font-extrabold justify-center items-center">
          ADD USER HERE!
        </h1>
        <form className="flex flex-col gap-2 w-2/5" action="">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              placeholder="Grifin"
              name="name"
              onChange={(e) => createField(e)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              placeholder="example@gmail.com"
              name="email"
              onChange={(e) => createField(e)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={(e) => createField(e)}
            />
          </label>
          <div className=" flex justify-center items-center text-center">
            <button
              className="btn btn-neutral w-[255px] text-white hover:bg-transparent hover:text-black"
              onClick={(e) => HandleChange(e)}
            >
              Create
            </button>
          </div>
        </form>
      </section>
      <Table />
    </>
  );
};

export default Form;
