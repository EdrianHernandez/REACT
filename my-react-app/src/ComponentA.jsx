import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Panda");
  
  return(   <div className="box">
                <h1>Component A</h1>
                <h2>Hello {user}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB user={user}/>  
                </UserContext.Provider>
                <ComponentB user={user}/>
            </div>);
}

export default ComponentA
