import React from 'react'
import CustomerContainer from './CustomerContainer'

const CustomersTable=(props)=>{
    const {customers,showDetails} = props;
    

    return (<div><table className="table table-striped" >
        <thead>
            <tr ><th>Name</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {customers.map((ele)=>{
                return(<tr key ={ele.Phone}>
                    <td>{ele.Name}</td>
                    <td>{ele.Phone}</td>
                    <td><button onClick={()=>{
                      showDetails(ele)
                    }} className="btn btn-primary">Show</button></td>
                    </tr>)
            })}
        </tbody>
        </table>
        </div>)
}

export default CustomersTable