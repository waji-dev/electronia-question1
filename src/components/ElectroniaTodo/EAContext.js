import React, { createContext, useEffect, useState } from 'react';
export const EAContext = createContext();

export const EAProvider = ({ children }) => {
  const[filterValue,setFilterValue]=useState('all')
  const [workItems, setWorkItems] = useState([{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",completed:false},
    {text:"Duis ultrices est at lacus tincidunt, vitae tempus felis aliquam.",completed:false},
    {text:"Curabitur maximus magna non magna mattis, et sodales ligula mollis.",completed:false},
    {text:"Phasellus sit amet nunc finibus turpis tristique iaculis at a nibh.",completed:false},
    {text:"Aliquam quis ipsum ornare est egestas volutpat eget id ex",completed:false}]);
  const [filterItems, setFilterItems]=useState(workItems)

  const toggleItem = (index) => {
    setWorkItems(
      workItems.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addItem = (text) => {
    setWorkItems([...workItems, { text, completed: false }]);
  };

  const removeItem = (index) => {
    setWorkItems(workItems.filter((todo, i) => i !== index));
  };

  const updateItem = (index,text) => {
    setWorkItems(
      workItems.map((todo, i) =>
        i === index ? { ...todo, text: text } : todo
      )
    );
  };
  const getItemByIndex=(index)=>{
    return workItems[index];
  }
  useEffect(() => {
    switch (filterValue) {
      case 'active':
        setFilterItems(workItems.filter(todo => !todo.completed));
        break;
      case 'completed':
        setFilterItems(workItems.filter(todo => todo.completed));
        break;
      default:
        setFilterItems(workItems);
        break;
    }
  }, [filterValue, workItems]);
  
  return (
    <EAContext.Provider value={{ workItems, toggleItem, addItem, removeItem,updateItem,getItemByIndex,filterItems,setFilterValue }}>
      {children}
    </EAContext.Provider>
  );
};
