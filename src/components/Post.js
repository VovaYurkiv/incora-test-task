import { React, useState } from 'react'
import commentIcon from './assets/commentIcon.png'

const Post = ({ comments, posts, users }) => {

  const styles = { 
    div: {
        margin: '10px 20px 20px 20px',
        textAlign: 'left'
    },
    p: {
        fontSize: '20px',
        fontWeight: 'bold',
        paddingLeft: '5px',
        maxWidth: '950px'
    },
    button: {
      outline: 'none',
      color: 'brown',
      paddingLeft: '3px',
      border: 'none', 
      cursor: 'pointer',
      fontFamily: 'Montserrat',
      fontWeight: 'bold'
    },
    img: {
      width: '15px',
      paddingLeft: '5px'
    },
    email: {
      color: 'grey',
      padding: '10px 0px 5px 90px',
    },
    body: {
      fontWeight: 'lighter',
      maxWidth: '550px',
      paddingLeft: '105px',
      fontSize: '14px'
    },
    line: {
      content: '',
      backgroundColor: 'black',
      height: '1px',
      maxWidth: '550px',
      margin: '5px 0px 0px 90px'
    },
    name: {
      color: 'rgb(75, 75, 75)'
    }
}

const [showComments, setShowComments] = useState(false)

const displayInfo = () => {
  setShowComments(true)
}

const hideInfo = () => {
  setShowComments(false)
}

let postIndex = 1
const getComments = comments.filter(el => el.postId === postIndex)

    return (
        <div style={styles.div}>
            <h4 style={styles.name}>{users[0].name}:</h4>
          <p style={styles.p}>{posts[postIndex-1].body}</p>
          <span>
          <img src={commentIcon} style={styles.img}></img>
          { showComments ? (
          <button 
            style={styles.button} 
            onClick={hideInfo}
          >
              Hide comments
          </button> 
          
          ) : (
            <button 
              style={styles.button} 
              onClick={displayInfo}
            >
                Show comments
            </button>
          )} 
          </span>
          { showComments ? ( 
          <div>
            { getComments.map(comment => {
              return (
              <div key={comment.id}>
                <h5 style={styles.email}>{comment.email}:</h5>
                <h4 style={styles.body}>{comment.body}</h4>
                <div style={styles.line}></div>
              </div>
              )
            })}
          </div> 
          ) : (
            <div></div>
          )
        }
        </div>
    )
}

export default Post
