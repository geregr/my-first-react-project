import React from 'react'

const App = () => {
    var name ="lol"
    function his(){
        alert("hey")
    }

    var style={
        color:"red"
    }

    return (
    <div style={style}>
        <h1>{name}</h1>
        <button onClick={his}>lol</button>
    </div>
    )
}

export default App;