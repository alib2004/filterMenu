/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import "./App.css";
import {useEffect, useRef, useState} from 'react';
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import menu from "./data";
const allcategoris = menu.map((item)=> item.category)
let filtercategoris = allcategoris.filter((item, index) => allcategoris.indexOf(item) === index);
filtercategoris.unshift('all')

function App() {
  const [allmenu,setAllmenu] = useState(menu)
  const [categ,setCateg] = useState(filtercategoris)
  const filtermenus = (category)=>{
    if (category === 'all') {
      setAllmenu(menu)
      return
    }
    let filteredmenus = menu.filter((item)=> item.category === category)
    setAllmenu(filteredmenus)
  }
  return (
    <div className="menu section">
    <div className="title">
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <Categories cat={categ} filteredmenus={filtermenus}/>
      <Menu menus={allmenu}/>
    </div>
    </div>
  );
}
export default App;
