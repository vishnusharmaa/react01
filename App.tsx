import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// import Home from './Home'
// import './index.css ';
// import Navbar from './Navbar' 


// function App() {
//   const username ="Welcome to my Blog"
  

//   return (
//     <> 
//     <Navbar/>
//     <Home/>  
//       <h1>{username} <p>
//         </p></h1>   
//     </>
//   )
// }

// export default App
