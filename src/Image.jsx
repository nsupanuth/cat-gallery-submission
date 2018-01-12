import React,{ Component } from 'react'

class Image extends Component{

    render(){

        const imgs = this.props.imgs

        const imgStyle = { 
            display : 'inline-block',
            height  : '176px',
            width   : '176px',
            padding : '10px',
            margin  : '3px',
            border  : '2px',
            borderStyle : 'solid',
            borderColor : '#e2e2e2'
        }
        
        return(
            <div>
                { imgs.map((img,index)=>{
                    return <div style={imgStyle} key={index}>
                        <img height="160px" width="160px" role="presentation" src={img.image}/>
                        <div> {img.label.toUpperCase()} </div>
                    </div>
                })
            }
            </div>
        );
    }

}

export default Image