import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import './index.css'
import { getAllProducts } from "../../config/firebase"

function Dashboard() {
  const navigate = useNavigate()
  const [products, setproducts] = useState([])

  useEffect(() => {
    getproducts()
  }, [])
  async function getproducts() {
    const res = await getAllProducts()
    setproducts(res)
  }
  return (
  <div>
    <div style={{ minHeight: 1000 }}>
      <div className="UpperBody">
        <div className="slider">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.olx.com.pk/thumbnails/430329513-800x600.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://images.olx.com.pk/thumbnails/430329237-800x600.webp" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="catogery">
          <h4>All categories</h4>

          <div className="container text-center">
            <div className="row">
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
                Mobiles
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />
                Vehicles
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
                Property For Sale
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />
                Property For Rent
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />
                Electronics & Home Appliances
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />
                Bikes
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />
                Business, Industrial & Agriculture
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />
                Services
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />
                Jobs
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />
                Animals
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />
                Furniture & Home Decor
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />
                Fashion & Beauty
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />
                Books, Sports & Hobbies
              </div>
              <div className="col-lg-1 mb-5 mx-3 col-md-2 col-sm-3 col-4">
                <img width={88} src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
                Kids
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DlowerBody">
        <div className="mobile" style={{ width: '100%' }}>
          <span>Mobile Phones</span>
          <div className="cards">
      {products.map(item => (
            <div className="card" key={item.id} onClick={()=>{navigate(`/detail/${item.id}`)}}>
              <div style={{height:'20vh', overflow:'hidden'}}>
              <img src={item.imageURL[0]} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.price}</h5>
                <p className="card-text">{item.title}</p>
                <br />
                <p className="card-text">ABC Road, Karachi</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  // <div className="bg-white">
  //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //       <h2 className="sr-only">Products</h2>

  //       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  //         {products.map((item) => (
  //           <a key={item.id} onClick={()=>{navigate(`/detail/${item.id}`)}} className="group">
  //             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  //               <img
  //                 src={item.imageURL[0]}
  //                 alt={item.title}
  //                 className="h-full w-full object-cover object-center group-hover:opacity-75"
  //               />
  //             </div>
  //             <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
  //             <p className="mt-1 text-lg font-medium text-gray-900">{item.price}</p>
  //           </a>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  )
}

export default Dashboard;