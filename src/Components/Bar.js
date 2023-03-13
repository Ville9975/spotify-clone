import React from 'react'

function Bar({barContent}) {
  return (
    <div className='barcontent'>
      <ul>
        {barContent && barContent.map((bar) =>(
            <li>
                <a href="h"><i>{bar.logo}</i>
               <span>{bar.name}</span>
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default Bar
