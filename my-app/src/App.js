import {React,useState} from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Main from './components/Main'
import data from './data';
import State from './components/State';
import boxes from "./boxes";
import Box from './components/Box'


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const [squares,setSquares]=useState(boxes);
  const squareElements=squares.map(square =>(
    <Box key={square.id} on={square.on}/>
  ))
const cards=data.map(item => {
  return( 
    <Card 
        img = {item.coverImg}
        rating= {item.stats}
        reviewCount= {item.stats.reviewCount}
        location= {item.location}
        title= {item.title}
        price ={item.price}
    />
  )
})      
    return (
        <div>
            <Navbar />
            <Main />
            {cards}
            <State />
            {squareElements}
        </div>
    )
}