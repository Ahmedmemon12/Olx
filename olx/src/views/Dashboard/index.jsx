import { useEffect,useState } from "react"
import {useNavigate } from "react-router-dom"
import { getAllProducts } from "../../config/firebase"
import Footer from "../NavBar/footer"
function Dashboard(){
  const navigate = useNavigate()
    const[products,setproducts] = useState([]) 

    useEffect(() =>{
        getproducts()
    },[])
    async function getproducts(){
        // fetch('https://dummyjson.com/products')
        // .then((res) => res.json() )
        // .then(res => setproducts(res.products))
        const res = await getAllProducts()
        setproducts(res)
    }
    // const cont = document.getElementsByClassName('producted')
    // var row
    // for (let i= 0; i < products.length; i++){
    //   if (i % 4 == 0)
    //   {
    //     row = document.createElement('div')
    //     row.className = 'row row-cols-1 row-cols-md-4 g-4 '
    //     cont.append(row
    //   }
    // }
    return <div>
<div style={{minHeight:1000}}>
   <img width={"100%"} src="src/views/Dashboard/bandicam 2024-01-14 22-44-23-677.jpg" />
<div className="container-fluid mt-2 mb-6">
  <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
    {products.map(item => {
      const { title, description, id, imageURL, price} = item;
      return (
        <div style={{cursor:'pointer'}} key={id} className="col mb-4">
          <div className="card h-100" onClick={() => navigate('detail/'+id)}>
            <img style={{height:'250px'}} src={imageURL} className="card-img-top w-100" alt="" />
            <div className="card-body">
              <h4 className="card-text">Rs. {price}</h4>
              <h6 className="card-title">{title}</h6>
              <p>ABC road, Karachi</p>
            </div>
          </div>

        </div>
      );
    })}
  </div>
  </div></div>
     </div>
    }  
    
export default Dashboard;