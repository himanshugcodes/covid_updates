import React, { useEffect, useState } from "react";

const States = () => {
  const [data, setdata] = useState([]);

  const getCovidDataState = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");

    const actualData = await res.json();
    /*console.log(actualData.statewise);*/
    setdata(actualData.statewise);
  };

  useEffect(() => {
    getCovidDataState();
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h2 className="text-center pt-3 p-3  text-white bg-dark text-uppercase">
                Covid 19 State Wise Updates (LIVE){" "}
              </h2>
              <div class="table-responsive mb-5">
                <table className=" table-striped table-bordered  table table-hover  table-dark text-white mt-4">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th> State</th>
                      <th> Confirmed</th>
                      <th> Deaths</th>
                      <th> Active</th>
                      <th> Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((curElem, ind) => {
                      return (
                        <tr>
                          <td> {curElem.state}</td>
                          <td> {curElem.confirmed}</td>
                          <td> {curElem.deaths}</td>
                          <td> {curElem.active}</td>
                          <td> {curElem.lastupdatedtime}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default States;
