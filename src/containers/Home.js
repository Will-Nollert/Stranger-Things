import React, {
    useState, 
    useEffect 
} from 'react'
import "./Home.css";
import { PostCards } from './PostCards'


 const  Home = () => {
    const [posts, setPosts] = useState([])

    const URL = 'https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts'

    async function fetchPosts(url){
        const posts = await fetch(url)
        return await posts.json()
    }

    useEffect(() => {
        fetchPosts(URL).then((res) => setPosts([...res.data.posts]))
    }, [] )


    console.log(posts)


  return (
    <div className="Home">
      <div className="lander">
        <h1>Stranger's Things</h1>
        <p className="text-muted">a simple craigslist clone</p>
      </div>
      {posts.map((posts) => {
            console.log(posts.title)
            return <PostCards posts={posts} />
            })}
    </div>
  );
}

export default Home