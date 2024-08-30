import React from 'react';
import EAFilter from './EAFilter';
import EAList from './EAList';
import EAAddItems from './EAAddItems';
const EAUserControl =({header})=>{
return(
    <div className='row'>
    <div className='col-md-12'>
        <h1>{header}</h1>
        <div className='row'>
          <div className='col-md-12'>
            <EAAddItems />
          </div>
        </div>
      
        <div className='row'>
          <div className='col-md-12'>
            <div className='float-end'>
               <EAFilter /></div>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-12'>
                <EAList />
          </div>
        </div>
    </div>
  </div>
)}

export default EAUserControl;