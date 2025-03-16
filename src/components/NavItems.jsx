import React from 'react'

function NavItems({name,Icon}) {
  return (
    <div>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default NavItems;