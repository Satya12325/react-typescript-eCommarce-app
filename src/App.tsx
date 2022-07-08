import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { useState,useEffect } from 'react';
import Cards from './Components/Cards'

export type CartItemTypes = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

function IsLoading(){
  return (
    <div className="spiner-div"><div className="spinner-container">
    <div className="loading-spinner">
    </div>
  </div></div>
  )
}


function App() {

 
  const [data, setData] = useState<CartItemTypes[]>([]);
  const [looding,setLooding] = useState<boolean>(true);
  useEffect(() => {
    
    const fetchProducts = async ()=> {
    //  setLooding(true)
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      
      setData(result);
      setLooding(false)
    };
    fetchProducts()
  },[data])

  const handleAddToCart = (clickedItem: CartItemTypes) => null;





  return (
    <div className="App">
     <Navbar
      cartvelue={5}
     />
     <div className="text">
      {looding ?  < IsLoading/> : data.map((item) => (
         
         <Cards items={item} handleAddToCart={handleAddToCart} />
      
     )) }
     
     </div>
     
    </div>
  );
}

export default App;
