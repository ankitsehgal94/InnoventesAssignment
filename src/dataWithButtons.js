import React from 'react'

export default class ButtonWithClass extends React.Component{
    render(){

        

        return(
            <div style={{margin:'3%',width:'93%',backgroundColor:'',display:'flex'}}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>


            <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                
                
            <i style={{fontSize:25,color:'#2D3685'}} className={this.props.classname}></i>
                
                <p style={{marginLeft:'20px',color:'#2D3685',fontSize:20}}>{this.props.title}</p>
            </div>

            <div style={{justifyContent:'space-around',width:'150px',alignItems:'center',display:'flex',flexDirection:'row'}}>
                <i onClick={this.props.decChange} style={{fontSize:25,color:this.props.colorMinus,cursor:'pointer'}} className='fa fa-minus-circle'></i>
                <p style={{color:'#878787',fontSize:20}}>{this.props.data}</p>
                <i onClick={this.props.incChange} style={{fontSize:25,color:this.props.colorPlus,cursor:'pointer'}} className='fa fa-plus-circle'></i>
            </div>
            </div>
        )
    }
}