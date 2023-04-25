import React from 'react'
import Navbar from './Navbar';
import Button from 'react-bootstrap/esm/Button';

const Project = () => {
    return (
        <div>
            <Navbar />
            <div style={{textAlign :"left"}}>
                <h1>My Projects</h1>
                <br/>
                <h3>Shopping Cart</h3>
                <h6>Tech Stack: React.js, Redux, Tailwind CSS</h6>
                <p>This is an eCommerce website built with React.js.
                     Users can browse the available products and give orders with a fully functional cart. 
                     You can also check individual product details and adjust the number of products you want to buy.
                     </p>
                
                  </div>
                  <div  style={{textAlign :"center",}}>
                    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/35352/image/her%20pride%20Shopify%20store%20examples.jpg" alt='shoping website'  className='project_image'></img>
                  
                  </div>
                  <br/>
                      <div>
                  <Button>Live</Button> {" "}{" "}
                   <Button>Source Code</Button>
                  </div>
        </div>

    )
}

export default Project