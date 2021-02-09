import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Users from './components/Users'
import Posts from './components/Posts'
import Post from './components/Post'
import Header from './components/Header'
import preloader from './components/assets/preloader.gif'

const App = () => {

  const styles = {
    div: {
      textAlign: 'center',
      margin: 'auto',
      width: '50%'
    },
    section: {
      textAlign: 'center',
      marginTop: '10%',
    },
    h1: {
      fontSize: '30px',
      marginBottom: '20px'
    }
  }

  const [users, setUsers] = useState()
  const [isLoading, setLoading] = useState(true)
  const [isWaiting, setWaiting] = useState(true)
  const [isAwaiting, setAwaiting] = useState(true)
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data)
        setWaiting(false)
      })
  }, [])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      setComments(response.data)
      setAwaiting(false)
    })
}, [])

  if(isLoading || isWaiting || isAwaiting) {
    return (
      <section style={styles.section}>
        <h1 style={styles.h1}>Loading...wait</h1>
        <img src={preloader}></img>
      </section>
    )
  }

  return (
    <>
    <Router>
      <Header />
      <div style={styles.div}>
        <Switch>
          <Route path='/users'>
            <Users 
              users={users}
            />
          </Route>
          <Route path='/posts'>
                <Posts
                  posts={posts}
                  users={users}
                />
          </Route>
          <Route path='/post'>
              <Post 
                users={users}
                posts={posts}
                comments={comments}
              />
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  )
}

export default App