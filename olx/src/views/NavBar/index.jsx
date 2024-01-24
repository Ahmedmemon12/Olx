import React, { useState,useEffect } from 'react'
import "./index.css"
import { useNavigate, useParams } from 'react-router-dom'
import { auth, getUserInfo, logout } from '../../config/firebase'

export default function Navbar({ user }) {
  const uid = user?.uid
  console.log(uid);
  const navigate = useNavigate()
  const [dropper, setDropper] = useState(false)
  const [UserDetail, setUserDetail] = useState([])
  let rotation
  {
    dropper
      ?
      rotation = '180deg'
      :
      rotation = '0deg'
  }

  useEffect(() => {
    getUserDetail();
  }, [uid]);  // Include uid in the dependency array

  async function getUserDetail() {
    if (uid) {
      const res = await getUserInfo(uid);
      setUserDetail(res);
    }
  } 
console.log(UserDetail);
  return (
    <div className='header'>
      <div className='upperbody'>
        <img className='fisrtLogo' width={32} src='src/views/navBar/olx_logo_small-removebg-preview.png' />

        <div className='CarsOpt'>
          <img width={25} src="src/views/navBar/car-removebg-preview.png" />
          <span>MOTORS</span>
        </div>

        <div className='propOpt'>
          <img width={23} src="src/views/navBar/property-removebg-preview.png" />
          <span>PROPERTY</span>
        </div>

      </div>
      <div className='lowerBody'>
        <img src="src/views/navBar/olx_logo_Big-removebg-preview.png" />

        <div className='searchContainer'>

          <div className='searchIcon'>
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }} />
          </div>

          <div className='searchInp'>
            <input placeholder='Search city, area or locality' value={'Pakistan'} />
          </div>

          <div className='dropDown'>
            <img src="src/views/navBar/dropdown.png" />
          </div>

        </div>
        <div className='searchContainer _searchContainer '>
          <input type="text" placeholder='Find Cars, Mobile Phones and More...' />
          <div className="_searchIcon">
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#fff' }} />
          </div>
        </div>
        <div className="authBtn">
          {
            user
              ?
              <div className="profile">
                <img width={'15%'} src="src/views/NavBar/chat Icon.svg" alt="" />
                <img width={'15%'} src="src/views/NavBar/notification.svg" alt="" />
                <div className="Dp" onClick={() => { setDropper(!dropper) }}>
                  <img width={40} src="src/views/NavBar/iconProfile.png" alt="" />
                  <i style={{ rotate: rotation }} className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              :

              <span className='LoginSpan' onClick={() => navigate("/login")} >login</span>

          }
        </div>
        <div onClick={() => {
                if (auth.currentUser) {
                  navigate('/post')
                }
                else {
                  navigate('/login')
                }
              }} className="_6bd5cb3c">
          <div className="button-content">
            <img src="src/views/navBar/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="Border Image" />
            <div className="_1075545d a662c662 _42f36e3b _96d4439a">
              <img src="src/views/navBar/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" alt="Plus Icon" />
              <span><b>SELL</b></span>
            </div>
          </div>
        </div>

      </div>
      {user
      ?
      dropper
        ?
        <div className="lastPart">
          <div className="dropdownDiv">
            <div className="Name">
              <img src="src/views/NavBar/iconProfile.png" width={56} alt="" />
              <div>
                <span style={{fontSize:'12px'}}>Hello,</span>
                <br />
                <span style={{fontSize: '18px', fontWeight:'900'}}>{UserDetail.fullName}</span>
                <br />
                <p>view and edit your profile</p>
                </div>
                </div>

            <div className="Logout"><button className='btn btn-primary' onClick={logout}>Logout</button></div>
          </div>
        </div>
        :
        <></>
      
    :<></>}

    </div>
  )
}
