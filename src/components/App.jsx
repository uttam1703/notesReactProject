import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item,setItem]=useState([]);
  function additem(input){
    setItem(prevValue=>{
      return [...prevValue,input]
    });
  }
  function deleteItem(id){
    setItem(prev => {
      return prev.filter((noteItem,index) =>
      {
        return index!==id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onChecked={additem} />
      {item.map((term,index)=>{
        return  <Note
        key={index}
        id={index}
         title={term.title}
          content={term.title}
          onChecked={deleteItem} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
