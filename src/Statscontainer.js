import React,{useState} from 'react'
import StatsItem from './StatsItem'
import {uniqueCustomer, ordersTotal } from './helperFunctions'

const StatsContainer =(props)=>{
    const {customers,amount}=props
    
    const cust = ordersTotal(customers)
    

    return (<div className="row mb-3">
        <StatsItem count={customers.length} text="orders"/>
        <StatsItem count={ordersTotal(customers)} text="Amount"/> 
       <StatsItem count={uniqueCustomer(customers).length} text="Customers"/> 
    </div>)
}

export default StatsContainer