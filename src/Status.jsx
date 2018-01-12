import React,{ Component } from 'react'

class Status extends Component{

    render(){

        let statusStyle = null

        if(this.props.statusState === 'Success'){
            statusStyle = <div style={{color : 'green'}}>{this.props.statusState.toLocaleUpperCase()}</div>
        }else if(this.props.statusState === 'Loading...'){
            statusStyle = <div style={{color : 'orange'}}>{this.props.statusState.toLocaleUpperCase()}</div>       
        }else{
            statusStyle = <div style={{color : 'red'}}>{this.props.statusState.toLocaleUpperCase()}</div>
        }

        return(
            <div style={{margin : '10px'}}>
                {statusStyle}
            </div>
        );
    }

}

export default Status