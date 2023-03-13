import React from 'react'

function Collection({heading, collectItem}) {
  return (
    <div className='collect'>
         <p className='head1'>{heading}</p>
        <ul>
        {collectItem && collectItem.map((Discover) =>(
            <li>
                <a href="j"><i>{Discover.logo}</i>
               <span>{Discover.name}</span>
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default Collection;