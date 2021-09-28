import { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax';
import './style.scss';

const SinglePost = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        fetch('data.json')
            .then(res => res.json())
            .then(res => setPosts(res[0]))
            .catch(err => console.log(err))
    }

    return (
        <div className='post_container'>
            <section className='post_header'>
                <h3 className='post_title'>{posts && posts.post_description.title}</h3>
                <img src={posts && posts.title_image} alt="art that is presenting title" />
            </section>
            <section className='post_body'>
                <div className='post_content'>
                    <h1>Today we're traveling to - {posts && posts.post_description.location}</h1>
                    <Parallax blur='3' bgImage={posts && posts.post_description.description.img_link} bgImageAlt="the lake" strength={150}>
                        <div className='post_paraph'>
                            {posts && posts.post_description.description.par1}
                        </div>

                        <div className='post_paraph'>
                            {posts && posts.post_description.description.par2}
                        </div>
                    </Parallax>
                    <div className='post_places'><h4>Places near that location:</h4> <div>{posts && posts.post_description.description.places_near.map(elem => <p key={`posts-${Math.random()}-paraph`}>{elem}</p>)}</div></div>
                </div>
            </section>
            <section className='post_footer'>
                <div className='post_author'>
                    <h5> Author: {posts && posts.author.job} {posts && posts.author.name} Recoment these #Tags:</h5>
                </div>
                <div className='post_tags'>
                    {posts && posts.tags.map((elem) => <label key={`tags-${Math.random()}-tag`}>{elem}</label>)}
                </div>
            </section>
        </div>
    )

}
export default SinglePost;