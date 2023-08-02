import './App.css';
import { useState } from 'react';
import Card from './components/cad.js'
import CityCard from './components/cityCard'

function App() {
  var message = "Hi its my first application"

  var cards= [
    {
      id: 1,
      title: "First card",
      description: "First card description",
      img: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" 
    },
    {
      id: 2,
      title: "second card",
      description: "second card description",
      img: "https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png" 
    },
    {
      id: 3,
      title: "Third card",
      description: "Third card description",
    },
    {
      id: 4,
      title: "Fourth card",
      description: "Fourth card description",
      img: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
    }
  ]

  const [city , setCity] = useState({
    name:"lahore",
    description:"City of food",
    img:"https://cdn.pixabay.com/photo/2018/04/20/20/04/lahore-fort-3336909_640.png"
  })
  const clicHandler = ()=>{
    setCity((oldState)=>{
      return {
        ...oldState,
        name:"Peshawar",
        description:"City Of Flower",
        img:"https://alsadatmarketing.com/wp-content/uploads/2022/11/PESHAWAR.png"
      }
    })
    console.log("I am Clicked!!!!")
  }
  const resetHandler = (newObj)=>{
    setCity({
      name: newObj.defaulttitle,
      description:newObj.defaultdescription,
      img: newObj.defaultimg
    })
  }

  return (
      <>
      {/* <h1 className='heading'>Hello its me waleed</h1>
      <p>{message}</p>
      <button style={{backgroundColor:"olive"}}>Click me</button><br/>
      {cards.map((card) => <CityCard key = {card.id} title ={card.title} description={card.description} img = {card.img}/>)} */}

      {/* <Card>
        <img src={city.img}/>
        <h3>{city.name}</h3>
        <p>{city.description}</p>
        <button onClick={clicHandler}>Click Me</button>
      </Card> */}
      <CityCard title={city.name} description={city.description} img={city.img} changename={clicHandler} resetHandler = {resetHandler} />
      </>
  );
}

export default App;
