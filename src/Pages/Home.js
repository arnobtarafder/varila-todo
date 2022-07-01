import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import InputForm from "../Components/InputForm/InputForm";
import Clock from 'react-live-clock';
import Table from "../Components/Table/Table";
import Task from "../Components/Task/Task";




const Home = () => {
  const date = new Date().getDate();


  return (
    <div className="">
      <div className="bg-base-100 h-screen">
        <section className="body-font bg-base-100">
          <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">

            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-secondary font-mono">
                Varila ToDo Web App
              </h1>
              <div className="container pt-4">
                <h1 className="text-center font-bold font-mono text-xl" id="heading">Seems it's 🤗
                  <span>
                    <Clock
                      className="pl-4 font-mono"
                      format={'h:mm:ssa'}
                      style={{ fontSize: '1.5em' }}
                      ticking={true} />
                  </span>
                </h1>
              </div>
              <h2 className="text-center font-mono">Make Your Plan And Add Some To-Do's Now!</h2>
            </div>

          </div>
        </section>

        <Task />

        <Table />
      </div>
    </div>
  );
};

export default Home;