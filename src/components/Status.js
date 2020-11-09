import React from 'react'
import { names } from './data'
import './status.css'

const Status = () => {
    return (
        <div className="status">
           <div className='story'>
                {names.map((user) => (
            <p className="user">{user.name}</p>
                ))}
            </div> 
        </div>
        
    )
}

export default Status
