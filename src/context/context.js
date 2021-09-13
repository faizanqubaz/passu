import React, { useState, createContext } from 'react';



const initalState = {
    toogleMenu: false,
    Notification:10,
    Message:2
}


// Now iam able to create a Context

export const storeContext = createContext()



export const Context = (props) => {

    const [state, setState] = useState(initalState);

    return (
        <>

            <storeContext.Provider value={{ state, setState }}>
                {props.children}
            </storeContext.Provider>
        </>
    )
}