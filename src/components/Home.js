import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>

        <div style={{backgroundImage:'url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',height:'90vh'}}>
            {/* <img src='https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' style={{background:'no-repeat', backgroundSize:'cover', height:'90vh',width:'100vw'}}/> */}
            <h1 style={{color:'white',textAlign:'center',position:'relative',top:'200px'}}>Plant Store Website</h1>
        </div>

      </div>
    )
  }
}

export default Home