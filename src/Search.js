import React,{useState} from 'react'


const  Search=(props)=>{
    const {term,handleChange} =props;

    return (<input type="text" placeholder ="search by name or Phone" value={term} onChange={handleChange}/>)
  }

export default Search