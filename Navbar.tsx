const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Vishnu's Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Blog</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;


// function Navbar(){
//     return(
//        <nav className="navbar">
//         <h1>The First blog</h1>
//         <div className="links">
//             <a href="/">Home</a>
//             <a href="/create">New Blog</a>
//         </div>
//        </nav>

//     )

// }
// export default Navbar;