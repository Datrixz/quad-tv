import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Detail = () => {
    let navigate = useNavigate();
    const navi = () => {
        navigate(-1);
    }
  return (
    <div>Detail page <button onClick={navi}>Go back</button></div>
  )
}

export default Detail