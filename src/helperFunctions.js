import React from 'react'
import _ from 'lodash'

export   const uniqueCustomer=(customers)=>{
    const result =_.uniqBy(customers,"Phone");
    return result;
  }

export  const ordersTotal=(customers)=>{
    let sum=0;
    for(const cust of customers){
        sum+= cust.Amount;
    }return sum;
  }

 
