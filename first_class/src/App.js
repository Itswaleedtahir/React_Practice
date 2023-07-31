import './App.css';
import Card from './components/cad.js'

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
      img: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
    },
    {
      id: 4,
      title: "Fourth card",
      description: "Fourth card description",
      img: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"
    }
  ]
  return (
      <>
      <h1 className='heading'>Hello its me waleed</h1>
      <p>{message}</p>
      <button style={{backgroundColor:"olive"}}>Click me</button><br/>
      {cards.map((card) => <Card key = {card.id} title ={card.title} description={card.description} img = {card.img}/>)}
      </>
  );
}

export default App;
