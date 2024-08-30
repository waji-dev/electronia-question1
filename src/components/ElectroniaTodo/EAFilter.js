import React, { useState, useContext } from 'react';
import { EAContext } from './EAContext';

const EAFilter  = () => {
  const { setFilterValue,filterByStatus } = useContext(EAContext);
  const handleFilterChange=(e)=>{
    setFilterValue(e.target.value);
  }
  return (
    <div className='d-flex'>
        <label for="statusFilter">Filter : </label>
        <select className='m-1' id="statusFilter" onChange={handleFilterChange}>
            <option  value="all">All</option>
            <option value="active">Active</option>
            <option  value="completed">Completed</option>
        </select>
    </div>
  
  );
};

export default EAFilter;
