import React from 'react'
import "./index.css";

export default function footer() {
  return (
    <div className='footer'>
      <div className="row container-fluid mt-4" style={{ backgroundColor: 'black', color: " white", display:'flex', justifyContent:'center' }}>
        <div className="col-6 col-md-4 col-lg-2 mb-2 ">


          <b>TRENDING SEARCH</b><br />
          Bikes<br />
          Watches<br />
          Books<br />
          Dogs<br />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>Contact Us</b><br />
          OLX for Businesses<br />
          OLX<br />
          Help<br />
          Sitemap<br />
          Terms of use<br />
          Privacy Policy<br />
        </div>
        <div className="col-7 col-md-4 col-lg-2 mb-2 mt-2">
          <b>FOLLOW US</b>
          <img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" height="20px" />
          <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" height="20px" />
          <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" height="20px" />
          <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" height="20px" /><br /><br />
          <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" height="30px" />
          <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" height="30px" />
          <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" height="30px" /><br />
        </div>
      </div>
    </div>
  )
}
