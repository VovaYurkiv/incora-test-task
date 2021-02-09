import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, editPost } from '../redux/actions'

const NewPost = ({ post, showDetails }) => {

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
          },
          textarea: {
            margin: '5px 0px',
            padding: '5px 5px',
            lineHeight: '150%',
            height: '300px',
            width: '900px',
            resize: 'none',
            fontSize: '16px',
            fontFamily: 'Montserrat',
            outline: 'none',
            border: '1px solid grey',
            borderRadius: '3px',
            background: 'rgb(220, 220, 220)',
        },
        section: {

        }
    }

    const [editable, setEditable] = useState(false)
    const [postText, setPostText] = useState(post.text)
    let dispatch = useDispatch()

    return (
            <div style={styles.mydiv}>
                <span style={styles.span}>
                    <h4 style={styles.name}>{post.author}:</h4>
               <span style={styles.btns}>
               <button 
                    className='btn-edit'
                    style={styles.btn}
                    onClick={() => {
                        dispatch(editPost(
                            {
                                ...post,
                                text: postText
                            }
                        ))
                        if(editable) {
                            setPostText(post.text)
                        }
                        setEditable(!editable)
                    }}
                    >
                        {editable ? 'Save' : 'Edit'}
                </button>
               <button
                    className='btn-delete'
                    style={styles.btn}
                    onClick={() => dispatch(deletePost(post.id))}
                    >
                        Delete
                </button>
                </span>
                </span>
                <section style={styles.section}>
               { editable ? (
                    <textarea
                        className='textarea'
                        style={styles.textarea}
                        type='text'
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    /> 
                ) : (
                    <p style={styles.p}>{post.text}</p>
               )}
                </section>
                {showDetails()}
            </div>
    )
}

export default NewPost


