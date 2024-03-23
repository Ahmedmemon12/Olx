import React, { useState, useEffect } from 'react'
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
  console.log(user);
  return (
    <div className='header'>
      <div className='upperbody'>
        <img className='fisrtLogo' width={32} src='https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Folx_logo_small.png?alt=media&token=fbc4e826-dfcf-4f47-b5d5-bd3017d77d3e' />

        <div className='CarsOpt'>
          <img width={25} src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Fproperty-removebg-preview.png?alt=media&token=cef4be1d-5aac-4b67-a81f-cb9ad992292d" />
          <span>MOTORS</span>
        </div>

        <div className='propOpt'>
          <img width={26} src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Fcar-removebg-preview.png?alt=media&token=9fa9b7eb-a4f9-415d-9c41-22a4ea7a3086" />
          <span>PROPERTY</span>
        </div>

      </div>
      <div className='lowerBody'>
        <img src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Folx_logo_Big-removebg-preview.png?alt=media&token=304faf7a-b97d-42e9-bd74-fc0950c5ad99" />

        <div className='searchContainer SearchContainer'>

          <div className='searchIcon'>
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }} />
          </div>

          <div className='searchInp'>
            <input placeholder='Search city, area or locality' value={'Pakistan'} />
          </div>

          <div className='dropDown'>
            <img src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Fdropdown.png?alt=media&token=4fc6b959-b2fc-490d-bd9e-b4dbe622d58d" />
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
                <img width={'15%'} src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg" alt="" />
                <img width={'15%'} src="https://www.olx.com.pk/assets/iconNotifications_noinline.4444f6b42acbe30d772d80ef1225f574.svg" alt="" />
                <div className="Dp" onClick={() => { setDropper(!dropper) }}>
                  <img width={40} style={{ borderRadius: '100%' , marginRight:'5px'}} src={user.photoURL} alt="" />
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
            <img src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Fsell%20border.svg?alt=media&token=9cc24f4a-5a47-4fb0-bd1c-55fb963bd8ad"/>
            <div className="_1075545d a662c662 _42f36e3b _96d4439a">
              <img src="https://firebasestorage.googleapis.com/v0/b/olx-app-976a5.appspot.com/o/OLX%20UI%2Fsell%20plus.svg?alt=media&token=790395b8-7ec7-45ef-9df1-4a6450d51ab1"/>
              <span><b>SELL</b></span>
            </div>
          </div>
        </div>

      </div>
      {user
        ?
        dropper
          ?
          <div className="lastPart animated" style={{ zIndex: '65' }}>
            <div className="dropdownDiv">
              <div className="Name">
                <img src={user.photoURL} width={56} alt="" />
                <div>
                  <span style={{ fontSize: '12px' }}>Hello,</span>
                  <br />
                  <span style={{ fontSize: '18px', fontWeight: '900' }}>{user ? user.displayName : <></>}</span>
                  <br />
                  <p>view and edit your profile</p>
                </div>
              </div>
              <div className="FButton" onClick={()=>{navigate('/favourite'),setDropper(false)}}>
                <i className="fa-regular fa-heart"></i>
                <span>Favourite & Saved Searches</span>
              </div>

              <div className="FButton" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
                </div>
            </div>
          </div>
          :
          <></>

        : <></>}

    </div>
  )
}
