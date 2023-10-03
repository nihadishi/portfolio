import React from 'react'

const Loading = () => {
  return (
    <div style={{width:"100vw", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"50", backgroundColor:"#fff", overflow:"hidden"}}>
        <img style={{scale:"1.5"}} src={require("./img/loading.gif")} alt="" />
    </div>
  )
}

export default Loading