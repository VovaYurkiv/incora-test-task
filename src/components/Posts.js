import { React } from 'react'
import { useSelector } from 'react-redux'
import PostForm from './PostForm'
import NewPost from './NewPost'
import ApiPost from './ApiPost'
import { Link } from 'react-router-dom'

const Posts = ({ users, posts }) => {
  const styles = {
    nav: {
        textDecoration: 'none',
        color: 'brown',
        fontSize: '14px',
        paddingLeft: '5px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    }
}

  let newPosts = useSelector(state => state)

  const showDetails = () => {
    return <Link style={styles.nav}  to='/post'>Details</Link>
}

    return (
        <div>
          <PostForm 
            users={users}
            posts={posts}
          />
          {newPosts.map(post => {
            return (
              <NewPost 
                key={post.id}
                post={post}
                showDetails={showDetails}
              />
            )
          })}
          {posts.map(post => {
            return (
              <ApiPost 
                key={post.id}
                post={post}
                showDetails={showDetails}
                users={users}
              />
            )
          })}
        </div>
    )
}

export default Posts


