import React from 'react'

function Discover({heading, discoverItem}) {
  return (
    <div className='discoveritem'>
        <p className='head'>{heading}</p>
        <ul>
        {discoverItem && discoverItem.map((Discover) =>(
            <li>
                <a href="j"><i>{Discover.logo}</i>
               <span>{Discover.name}</span>
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default Discover;