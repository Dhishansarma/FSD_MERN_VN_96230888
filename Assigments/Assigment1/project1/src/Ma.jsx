import React from 'react'

function Ma() {
    const users = [
  { id: 101, 
    name: 'Alice',
    address: {
        city: 'dindigul'
    }
 },
  { id: 102, name: 'Bob',address: {
        city: 'dindigul'
    } },
  { id: 103, name: 'Charlie',address: {
        city: 'dindigul'
    } },
];

  return (
    <div>
       
      {users.map((user) => (
        // Correctly using the stable, unique 'user.id' as the key
        <li key={user.id}> 
        user ID: {user.id}, Name: {user.name} city :{user.address.city}
        
          {/* {user.address.map((add)=> (
        <li key={add.city}>address: {add.city}</li> */}
        
        ))}
       
   </li>
      
        
      ))}

      
   
    </div>
  )
}

export default Ma

