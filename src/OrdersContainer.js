import React,{useState} from 'react'
import OrdersChart from './OrdersChart'
import {uniqueCustomer} from './helperFunctions'
import Customerorderstable from './customersorderstable'


const OrdersContainer =(props)=>{
        const {customers}= props;
          

          const customerFrequency =()=>{
            const customerData = uniqueCustomer(customers)
           
          const frequencyObj = {1:0,2:0,3:0,4:0,"5+":0}
          // console.log(frequencyObj);

          customerData.forEach(customer => {
            const customerorders = customers.filter((c)=>{
              return c.Phone === customer.Phone;
            })
            
            
            if(customerorders.length >= 5){
              frequencyObj["5+"]++;
            }else {
              frequencyObj[customerorders.length]++;
            }
          });
         
          
          return frequencyObj;
            
          }

        
        
          
          return (<div className="row">
          <div className="col-md-12"> <h2> Orders Distribution</h2></div>
         
          <Customerorderstable data={customerFrequency()}/>
          <OrdersChart freq={customerFrequency()}/>
          </div>)
}

export default OrdersContainer