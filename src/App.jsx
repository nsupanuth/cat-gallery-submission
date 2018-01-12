import React, { Component } from 'react'
import Status from './Status.jsx'
import Image from './Image.jsx'
import Service from './service.js';

class App extends Component {

  state = {
     value : 0,
     status : '',
     formStatus : false,
     imgs : []
  }  

  handleChange(event){

    this.setState({
        value: event.target.value
    });
  } 

  getImage(){

    console.log("Get Image")
    this.setState({
        imgs : [],
        status : 'Loading...',
        formStatus : !this.state.formStatus
    })

    Service.getImageItems(this.state.value)
          .then(res => {
            this.setState({
                imgs : res,
                status : 'Success',
                formStatus : !this.state.formStatus
            })
          })
          .catch(err => {
              this.setState({
                  status : 'Failed',
                  formStatus : !this.state.formStatus,
              })
          })
  }

  render() {

    return (    
        <div>
            <div style={{marginTop:10}} >   
                
                <fieldset disabled={this.state.formStatus} style={{border : 0,color : this.state.formStatus ? 'grey' : 'black'}}>                    
                    Type amount of image : 
                    <input  type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}/>
                    <button onClick={() => this.getImage()} >Submit</button>
                    <Status statusState={this.state.status} />
                </fieldset>
                
            </div>

            <Image imgs={this.state.imgs}/>
           
        </div>
    );
  }

}


export default App;
