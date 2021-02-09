import React from 'react'

const Users = ({ users }) => {

  const styles = {
    li: {
        textAlign: 'left',
        marginLeft: '25px',
        padding: '10px 5px 10px 5px',
        color: 'rgb(0, 0, 0)',
        listStyle: 'none',
        fontSize: '18px',
        width: '500px'
    }
}

    return (
        <div>
          { users.map(person => {
              return ( 
              <li
                key={person.id}
                style={styles.li}>
                {person.id}.
                {' ' + person.name}
              </li> 
              )})}     
      </div>
    )
}

export default Users

