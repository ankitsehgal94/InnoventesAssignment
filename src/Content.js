import React from 'react'
import Data from './dataWithButtons'
import './Content.css'
export default class Content extends React.Component{

    state={
        rooms:1,
        adults:4,
        children:0
    }

    roomIncHandler=()=>{
        this.setState((prevState)=>{
            let adults = this.state.rooms<5?this.state.adults+4:this.state.adults
            this.setState({
                adults:adults>=20?(20-this.state.children):adults
            })
            if(this.state.rooms>=5){
                return{
                
                    rooms:5
                }
            }
            else return{
                
                rooms:prevState.rooms+1
            }
            
            
        })
    }

    adultIncHandler=()=>{
        this.setState((prevState)=>{
            if((this.state.adults+this.state.children)%4===0){
                const rooms = this.state.rooms+1
                this.setState({
                    rooms:rooms>5?5:rooms
                })
            }
            return{
                adults:(this.state.adults+this.state.children)>=20?prevState.adults:(prevState.adults+1)
            }
        })
    }

    childrenIncHandler=()=>{
        this.setState((prevState)=>{
            if((this.state.adults+this.state.children)%4===0){
                const rooms = this.state.rooms+1
                this.setState({
                    rooms:rooms>5?5:rooms
                })
            }
            return{
                children:(this.state.children+this.state.adults)>=20?prevState.children:prevState.children+1
            }
        })
    }


    roomDecHandler=()=>{
        this.setState((prevState)=>{
            if(this.state.children>0){
                let children = this.state.children-4
                let adults= this.state.adults+this.state.children
                this.setState({
                    children:children<0?0:children,
                    adults:adults>=(this.state.rooms*4)?this.state.adults-2:this.state.adults
                })
            }

        else {
                let adults = this.state.adults-4
                this.setState({
                    adults:adults<4?4:adults
                })
        }
           

            if(this.state.rooms<=1){
                return{
                
                    rooms:1
                }
            }
            else return{
                
                rooms:prevState.rooms-1
            }
            
            
        })
    }

    adultDecHandler=()=>{
        this.setState((prevState)=>{
            if((this.state.adults)%4===1){
                let rooms=this.state.rooms-1
                
                this.setState({
                    rooms:rooms<1?1:rooms
                })
            }
            if(this.state.adults<=1){
                return{
                
                    adults:1
                }
            }
            else return{
                
                adults:prevState.adults-1
            }
            
            
        })
    }

    childrenDecHandler=()=>{
        this.setState((prevState)=>{

            if((this.state.adults+this.state.children)%4===1){
                let rooms=this.state.rooms-1
                //let adults=this.state.adults
                this.setState({
                    rooms:rooms<1?1:rooms,
                    //adults:adults>=(this.state.rooms*4)?(this.state.adults-4):this.state.adults
                })
            }

            if(this.state.children<=0)
            return{
                children:0
            }

            else return{
                children:prevState.children-1
            }
        })
    }

    render() {

        const roomMinusColor = (this.state.rooms<=1)?'#878787':'#2D3685';
        const adultMinusColor = (this.state.adults<=1)?'#878787':'#2D3685';
        const childMinusColor = (this.state.children<=0)?'#878787':'#2D3685';

        const roomsPlusColor = (this.state.rooms>=5)?'#878787':'#ED3158';
        const adultPlusColor = (this.state.adults+this.state.children>=20)?'#878787':'#ED3158';
        const childPlusColor = (this.state.children+this.state.adults>=20)?'#878787':'#ED3158';



      return (
         <div className='main'> 
         
        <div className="headline">
        <i style={{color:'#2D3685',fontSize:25}} className="icon fa fa-users"></i>
        <p style={{color:'#2D3685',marginLeft:'15px',fontSize:23}}>Choose number of <strong>people</strong></p>
        </div>

        <div className='mainContent' >
          <Data
            colorMinus={roomMinusColor}
            colorPlus={roomsPlusColor} 
            decChange={this.roomDecHandler} 
            incChange={this.roomIncHandler} 
            data={this.state.rooms} 
            title='ROOMS' 
            classname="fa fa-bed"/>

          <hr style={{marginLeft:10,marginRight:10}}/>
          
          <Data 
            colorMinus={adultMinusColor} 
            colorPlus={adultPlusColor}  
            decChange={this.adultDecHandler} 
            incChange={this.adultIncHandler} 
            data={this.state.adults} 
            title='ADULTS' 
            classname='fa fa-user'/>

          <hr style={{marginLeft:10,marginRight:10}}/>

          <Data 
            colorMinus={childMinusColor} 
            colorPlus={childPlusColor}  
            decChange={this.childrenDecHandler} 
            incChange={this.childrenIncHandler} 
            data={this.state.children} 
            title='CHILDREN' 
            classname='fa fa-child'/>
        </div>
        </div>
      )
    }
}