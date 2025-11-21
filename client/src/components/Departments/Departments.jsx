import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import { FaBriefcaseMedical } from "react-icons/fa";

const departments = [
  {
    icon: <FaHeartbeat size={42} className="text-white" />,
    title: "CARDIOLOGY",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <MdOutlineMedicalServices size={42} className="text-white" />,
    title: "DIAGNOSIS",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <GiScalpel size={42} className="text-white" />,   // FIXED HERE
    title: "SURGERY",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <FaBriefcaseMedical size={42} className="text-white" />,
    title: "FIRST AID",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
];

const Departments = () => {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
          OUR DEPARTMENTS
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum
          dolores doloremque accusantium.
        </p>

        {/* GRID */}
        <div className="
          grid gap-12 mt-16
          grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
        ">
          {departments.map((item, index) => (
            <div
              key={index}
              className="
                text-center px-4 py-4 transition 
                hover:scale-[1.03] hover:shadow-md duration-300
              "
            >
              {/* ICON CIRCLE */}
              <div className="
                mx-auto w-24 h-24 rounded-full bg-[#2DBCA6]
                flex items-center justify-center shadow-lg
              ">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Departments;
