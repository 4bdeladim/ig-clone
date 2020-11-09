import React from 'react'
import Status from './Status'
import { posts } from './data'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="left-side">
                <Status />
                <div className='posts'>
                             {posts.map((user) => (
                                 <div className='post'>
                                     <div className="top">
                                        
                                        <img className='avatar' src={user.postimg} />
                                        <div className="name-place">
                                            <a href='#' className="name"> {user.name} </a>
                                            <a className='place'> {user.place} </a>
                                        </div>
                                        <div className='points' >...</div >
                                     </div>
                                    <div className="middle">
                                        <img src={user.postimg} />
                                    </div>
                                    <div className='icons'>

                                    </div>
                                    <div className="dscreption">
                                        <h1 className="likes"> {user.likes} likes </h1>
                                        <p className='desc' > <span className='post-owner'> <a href='#'> {user.name}</a></span>{user.desc} </p>
                                    </div>
                                    <div className='tags'>
                                        { user.tags }
                                    </div>
                                    <div className="comments">
                                        <div className="comment">
                                            <h3 className='friend-comment'> {user.name1} </h3>
                                            <p className='comment1'> {user.comment1} </p>
                                        </div>
                                        <div className="comment">
                                            <h3 className='friend-comment'> {user.name2} </h3>
                                            <p className='comment1'> {user.comment2} </p>
                                        </div>
                                    </div>
                                    <div className='date'>
                                        { user.date }
                                    </div>
                                    <div className='type-comment'>
                                        <input className='input' placeholder='Add a comment..' />
                                        <a href='#' className='post-btn' > Post </a>
                                    </div>
                                 </div>

                                 
                                 
                             ))}
                     
                </div>
            </div>
            <div className="suggestions">
                <p>dzifezif</p>
            </div>

        </div>
    )
}

export default Home
