import React from 'react'
import user from "../../assets/img/User.webp"

export default function MyCustomAvatar() {
  return (
    <>
      <div className="w-10 h-10 border-2 border-black rounded-full flex ml-2">
        <img className="w-6 m-auto" alt="" src={user} />
      </div>
    </>
  )
}


