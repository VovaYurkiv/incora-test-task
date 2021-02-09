import { React } from 'react'

const ApiPost = ({ post, showDetails, users }) => {

    const styles = {
        p: {
            fontSize: '16px',
            paddingLeft: '5px',
            maxWidth: '900px',
            textAlign: 'justify',
            textJustify: 'inter-word'
        },
        mydiv: {
            margin: '10px 20px 20px 20px',
            textAlign: 'left'
        },
        span: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          btns: {
            flex: '1'
          },
          name: {
            flex: '9'
          },
          btn: {
            marginRight: '4px',
            outline: 'none',
            border: '1px solid grey',
            borderRadius: '2px',
            padding: '1px 5px',
            fontSize: '11px',
            cursor: 'pointer'
          }
    }

    const getName = users.map(id => id = id.name)

    return (
            <div style={styles.mydiv}>
                <span style={styles.span}>
                <h4 style={styles.name}>
                    {getName.filter((name, index) => index === post.userId - 1)}:</h4>
               <span style={styles.btns}>
               <button 
                    className='btn-edit'
                    style={styles.btn}
                >
                    Edit
                </button>
               <button
                    className='btn-delete'
                    style={styles.btn}
                >
                    Delete
                </button>
                </span>
                </span>
                    <p style={styles.p}>{post.body}</p>
                {showDetails()}
            </div>
    )
}

export default ApiPost


