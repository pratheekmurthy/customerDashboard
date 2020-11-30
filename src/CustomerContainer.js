import React,{useState} from 'react'
import Search from './Search'
import CustomersTable from './CustomersTable'
import {uniqueCustomer, ordersTotal } from './helperFunctions'

const CustomerContainer=(props)=>{
const {customers} =props;
const [term,setTerm] =useState("")

const onlyUniqueCustomers = uniqueCustomer(customers);



const showDetails=(customer)=>{
  const customerOrders = customers.filter(c =>{return c.Phone === customer.Phone});
  alert(`Name - ${customer.Name}
        Order count - ${customerOrders.length}
        customer orders Total - ${ordersTotal(customerOrders)} `);

}

const handleChange =(e) =>{
  const term = e.target.value;
  setTerm(term);

}

const filterdcustomers =()=>{
  const result = onlyUniqueCustomers.filter((ele)=>{
    return ele.Name.toLowerCase().includes(term) || ele.Phone.toString().includes(term)

  })
  return result;
}


return(
  <div>
  <div className="row">
<div className="col-md-8"><h2>Listing Customers</h2></div>
<div className="col-md-4"><Search term={term} handleChange={handleChange} className="form-control"/></div>
  </div>
  <div className="row">
  <div className="col-md-12">
    <CustomersTable customers={filterdcustomers()} showDetails={showDetails}/></div>
    </div>

    
    </div>)

}

export default CustomerContainer