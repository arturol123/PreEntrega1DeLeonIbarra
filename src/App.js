import logo from './logo.svg';
import './App.css';
import NavBar from './Componente/NavBar';

const products = [
  {id: 1,Marca: 'Mattel',price: 100,description: 'Monster',ImageUrl: 'https://th.bing.com/th/id/R.8c1840a1cbd7f4c40435af8164d4e705?rik=nTdNHmYckXShtA&riu=http%3a%2f%2fjuegosjuguetesycoleccionables.com%2fwp-content%2fuploads%2f2018%2f12%2ffisher-price-oo0.jpg&ehk=Abnj4CO6qytQC3inIr8mhaxkVzvcEejJ4O%2f2RY7QntA%3d&risl=&pid=ImgRaw&r=0'},
  {id: 2,Marca: 'Product 2',price: 200,description: 'Buddy',ImageUrl: 'https://th.bing.com/th/id/OIP.k7_IiXxI6a0scD-fSY4_RQHaLL?w=137&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
  {id: 3,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},
  {id: 4,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},
  {id: 5,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},
  {id: 6,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},
  {id: 7,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},
  {id: 8,Marca: 'Product 3',price: 300,description: 'Product 3 description',ImageUrl: 'https://th.bing.com/th/id/OIP.-Uqzj7TLmGN2TSa7sbuWYwAAAA?pid=ImgDet&w=184&h=236&c=7&dpr=1.3'},]

const BtnGeneral = ({onClick,text}) =>{
  return(
    <button onClick={onClick}  className='Btn-Primary'>{text}</button>
  )
  }

function App() {

  const ClickOnOk = () =>{ 
    console.log('was clicked')
  }

  
  const BtnComprar = () =>{
    console.log('Comprando')
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Jugueteria Arthur!</h1>
        <div className="Navigator">
          <NavBar/>
          </div>
        <BtnGeneral onClick={ClickOnOk} text='Evaluar'/>
     
     <div className='ListaProd'>
     {products.map((product) =>(
        <div key={product.id}>
          <h3>{product.Marca}</h3>
          <p>{product.description}</p>
          <img className='Img-gral' src={product.ImageUrl} alt={product.name}></img>
          <p>{product.price}</p>
          <BtnGeneral onClick={BtnComprar} text='Comprar'/>
        </div>
      ))}
     </div>
     
      </header>
      <footer>
      <p>Made by Arthur ®</p>
      </footer>
    </div>
    

   
  );


}

export default App;
