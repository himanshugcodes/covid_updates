import React, { useEffect, useState } from "react";

const Up = () => {
  const [data, setData] = useState([]);

  const covidUpdates = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[35]);
    setData(actualData.statewise[35]);
  };

  useEffect(() => {
    covidUpdates();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center pt-3 p-3  text-white bg-dark text-uppercase">
            Covid 19 Uttar Pradesh Updates (LIVE){" "}
          </h2>
          <div className="card-warp mt-4">
            <div className="row">
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> State </span> Name
                  </h3>
                  <h2> {data.state} </h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> Total </span> Recovered
                  </h3>
                  <h2> {data.recovered} </h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> Total </span> Confirmed
                  </h3>
                  <h2> {data.confirmed} </h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> Total </span> Death
                  </h3>
                  <h2> {data.deaths} </h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> Total </span> Active
                  </h3>
                  <h2> {data.active} </h2>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card text-center py-4 mb-4 bg-dark text-white">
                  <h3>
                    {" "}
                    <span> Last </span> Updated
                  </h3>
                  <h2> {data.lastupdatedtime} </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Up;
