import Appcontext from "./appcontext";
import React, { useState } from "react";

const AppProvider = (props) => {
    const [cart, setcart] = useState([]);
    return (
        <Appcontext.Provider
            value={{ cart, setcart }}>
        {props.children}
        </Appcontext.Provider>

    )
}

export default AppProvider;