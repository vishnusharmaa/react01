import { useState } from "react";
import Bloglist from "./Bloglist";

// proprs are use to pass the data from one file to another file


const Home = () =>{
  const[blogs, setBlogs] = useState([
    {title: 'My new website', body: 'I m vishnu sharma', author: 'Vishnu', id:1 },
    {title: 'My Schooling', body: 'I have pass 10th n 12th from DPS BSR', author:'Vishnu', id:2},
 ]);
  return (
    <div className="Home">
      <Bloglist blogs={blogs} title= "All Blogs!" />
      </div>
    
  );
}
   
  export default Home;

// function Vishnu(){
//     return(
//     <div className="Home">
//         <h2>Homepage </h2>
//     </div>
//     )
// }
// export default Vishnu 