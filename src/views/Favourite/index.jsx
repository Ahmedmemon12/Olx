import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { removeLiked } from '../../store/likeSlice'
import './favourite.css'

export default function Favourite() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedItemId, setSelectedItemId] = useState(null)
  const favourites = useSelector(state => state.likeSlice.liked)

  const uniqueFavourites = Array.from(new Set(favourites.map(item => item.id)))
    .map(id => favourites.find(item => item.id === id));

  const removeLike = (itemId) => {
    setSelectedItemId(itemId);
    dispatch(removeLiked(itemId))
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <button onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left" /></button>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{ width: '130vh', borderBottom:'1px solid black', marginBottom:'10px' }}>
          <p style={{ fontSize: '30px', fontWeight: '800' }}>Favourites</p>
          <p style={{ fontSize: '20px', fontWeight: '600' }}>{uniqueFavourites.length} Item(s) Found</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
          {uniqueFavourites?.map(item => (
            <div className="card" key={item.id}>
              <div
                onClick={() => removeLike(item.id)}
                style={{ position: 'absolute', backgroundColor: '#ffffffb8', zIndex: 10, borderRadius: '100px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="fa-solid fa-xmark" />
              </div>
              <div style={{ height: '20vh', overflow: 'hidden' }}>
                <img src={item.imageURL[0]} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.price}</h5>
                <p className="card-text title" onClick={() => navigate(`/detail/${item.id}`)}>{item.title}</p>
                <br />
                <p className="card-text">ABC Road, Karachi</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
