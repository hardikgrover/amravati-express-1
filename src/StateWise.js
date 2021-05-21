import React, { useEffect, useState }  from 'react'
import "./StateWise.css";


const StateWise = () => {

    const [data, setData] = useState([]);

    const getData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData);
       setData(actualData.statewise);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
          <div className="container mt-5">

              <div className="table-responsive">
                  <table className="table table-hover">
                      <thead className="thead-dark">
                          <tr>
                              <th>State</th>
                              <th>Confirmed</th>
                              <th>Recovered</th>
                              <th>active</th>
                              <th>updated</th>
                          </tr>
                      </thead>
                      <tbody>
                         {
                             data.map((curElem, index) =>{
                                 return(
                                    <tr key={index}>
                                        <td>{curElem.state}</td>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.lastupdatedtime}</td>
                                    </tr>
                                 )
                             })
                         }
                      </tbody>
                  </table>
              </div>
          </div>
        </>
    )
}

export default StateWise
