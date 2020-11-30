import React from 'react'


const Customerorderstable=(props)=>{
    const {data}= props;
          

          return (<div>
          <div className="col-md-6">
          <table border="1" className="table">
            <thead>
            <tr><th>Orders</th>
              <th>No. of customers</th></tr></thead>
              <tbody>
              {Object.keys(data).map((ele ,i)=>{
                return (<tr key={i}><td>{ele}</td>
                <td>{data[ele]}</td></tr>)
              })}
              </tbody>
            
            
          </table>
          </div>
          </div>)

        }
export default Customerorderstable