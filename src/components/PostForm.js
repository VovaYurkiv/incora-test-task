import { React, useState } from 'react'
import { addPost } from '../redux/actions'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'

Modal.setAppElement("#root")

const PostForm = () => {
    
    const styles = {
        center: {
            textAlign: 'center',
            marginTop: '50px',
            background: 'rgb(245, 244, 244)'
        },
        addbtn: {
            fontSize: '25px',
            margin: '20px 0px',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            transition: '.1s linear'
        },
        postbtn: {
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '5px 70px',
            border: '1px solid grey',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            transition: '.1s linear',
            fontFamily: 'Montserrat',
            fontWeight: 'bold'
        },
        closebtn: {
            width: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            border: '1px solid grey',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            transition: '.1s linear',
            fontFamily: 'Montserrat',
            fontWeight: 'bold'
        },
        div: {
            display: 'flex',
            flexDirection: 'column',
            background: 'white'
        },
        input: {
            margin: '10px 10px',
            padding: '10px 10px',
            outline: 'none',
            border: '1px solid grey',
            borderRadius: '5px',
            background: 'white'
        },
        nav: {
            textDecoration: 'none',
            color: 'brown',
            fontSize: '14px',
        },
        h4: {
            background: 'rgb(245, 244, 244)'
        },
        span: {
            display: 'flex',
            justifyContent: 'space-between',
            background: 'rgb(245, 244, 244)',
            padding: '0px 10px',
            margin: '20px 0px 50px 0px'
        },
        p: {
            fontSize: '16px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            background: 'rgb(245, 244, 244)'
        }
    }

    const initialValues = {
        author: '',
        text: ''
    }
    
    let dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [values, setValues] = useState(initialValues)

    const handleChange = e => {
        const { name, value } = e.target
        if (e.target.value !== '') {
            setValues({
                ...values,
                [name]: value
            })
        }
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
        setValues(initialValues)
    }

    const toggleDispatch = () => {
       if(values.name === undefined || values.text === undefined) {
            toggleModal()
       } else {
            dispatch(
                addPost(
                    {
                        id: Math.floor(Math.random() * 10000),
                        author: values.name,
                        text: values.text
                    }
                ) 
               )
           }
        toggleModal()
    }

    return (
        <div>
            <button 
                className='add-btn'
                style={styles.addbtn} 
                onClick={toggleModal}>
                    Add new
            </button>
            <Modal
                className='modal'
                overlayClassName='modal-overlay'
                isOpen={isOpen}
                onRequestClose={toggleModal}
            >
                <span style={styles.span}>
                    <h4 style={styles.h4}>Add new post</h4>
                    <button 
                        className='close-btn'
                        style={styles.closebtn} 
                        onClick={toggleModal}
                    >
                        x
                    </button>
                </span>
                <div style={styles.div}>
                    <form 
                        style={styles.form}
                    >
                        <input
                            style={styles.input} 
                            placeholder='Enter your name'
                            value={values.name}
                            onChange={handleChange}
                            name='name'
                        />
                        <input 
                            style={styles.input}
                            placeholder='Enter your post'
                            value={values.text}
                            onChange={handleChange}
                            name='text'
                        />
                    </form>
                </div>
                <div style={styles.center}>
                <button 
                    className='post-btn'
                    style={styles.postbtn} 
                    onClick={toggleDispatch}
                >
                    POST
            </button>
                </div>
            </Modal>
        </div>
    )
}

export default PostForm