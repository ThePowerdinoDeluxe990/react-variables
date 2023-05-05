import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"))

function Saludar(){
    const user={
        firstName: 'Joe',
        lastname:'mama'
    }
  return (
  <div>
    <h1>{user.firstName}</h1>
    <h3>{user.lastname}</h3>
  </div>
  )
}
root.render(<div>
    <Saludar/>
</div>)

