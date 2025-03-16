import React, { useEffect, useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Header from "../components/hiddenscreen/Header";
import { generateRegion } from "../global";
import moment from "moment-timezone";

const areaOptions = ["Home", "About", "Projects"];
const timeOptions = ["All time", "Last month", "Last half year", "Last year"];

const SelectedOptions = ({ option, selected, setSelected }) => {
  const active = option == selected;
  return (
    <div
      className={`py-2 cursor-pointer px-3 rounded-lg ${
        active ? "bg-blue-200" : ""
      }`}
      onClick={() => {
        setSelected(option);
      }}
    >
      <p className="text-xl font-semibold text-black">{option}</p>
    </div>
  );
};

const home = () => {
  const [area, setArea] = useState(areaOptions[0]);
  const [time, setTime] = useState(timeOptions[0]);
  const [total, setTotal] = useState(64);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let result = [];
      const temp = await fetch("/api/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ area, time }),
      });

      result = await temp.json();
      setTotal(result.length);
      if (result.length == 0) {
        setRows([]);
      } else {
        setRows(result.rows);
      }
      setLoading(false);
      console.log(result.host);
    };

    getData();
  }, [area, time]);

  return (
    <ProtectedRoute>
      <Header />
      {/* Body */}
      <div className="w-full min-h-screen">
        <div className="w-full max-w-6xl mx-auto py-10 px-5 flex flex-col justify-start items-center space-y-10">
          {/* Selectors */}
          <div className="flex flex-col justify-center items-start space-y-5 w-full">
            {/* Area */}
            <div className="flex space-x-5 flex-col md:flex-row text-center justify-center items-start md:justify-start md:items-center w-full">
              {areaOptions.map((option, index) => {
                return (
                  <SelectedOptions
                    key={index}
                    option={option}
                    selected={area}
                    setSelected={setArea}
                  />
                );
              })}
            </div>
            {/* Time */}
            <div className="flex space-x-5 flex-col md:flex-row text-center justify-center items-start md:justify-start md:items-center w-full">
              {timeOptions.map((option, index) => {
                return (
                  <SelectedOptions
                    key={index}
                    option={option}
                    selected={time}
                    setSelected={setTime}
                  />
                );
              })}
            </div>
            {/* Total  */}
            <div className="w-full">
              <p className="text-black text-xl font-semibold">Total: {total}</p>
            </div>
          </div>

          <div className="w-full">
            <table className="table">
              <thead className="tableHeader">
                <tr className="tableHeaderRow">
                  <th className="tableHeaderData">No</th>
                  <th className="tableHeaderData">IP address</th>
                  <th className="tableHeaderData">Project</th>
                  <th className="tableHeaderData">Time and date</th>
                  <th className="tableHeaderData">Region</th>
                </tr>
              </thead>
              {loading ? (
                <tbody className="tableBody">
                  <tr className="tableBodyDataRow">
                    <td className="tableBodyData">Loading ...</td>
                  </tr>
                </tbody>
              ) : (
                <tbody className="tableBody">
                  {rows.map((doc, index) => {
                    return (
                      <tr className="tableBodyDataRow" key={index}>
                        <td className="tableBodyData">{index + 1}</td>
                        <td className="tableBodyData">{doc.ip}</td>
                        <td className="tableBodyData">{doc.project}</td>
                        <td className="tableBodyData">
                          <p className="hidden md:inline">
                            {moment(doc.dateTime)
                              .tz("Atlantic/Reykjavik")
                              .format("Do MMM YYYY HH:mm:ss")}
                          </p>
                          <p className="inline md:hidden">
                            {moment(doc.dateTime)
                              .tz("Atlantic/Reykjavik")
                              .format("DD/MM/YY HH:mm:ss")}
                          </p>
                        </td>
                        <td className="tableBodyData">
                          {generateRegion(doc.country, doc.city)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
          {/* Table */}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default home;
