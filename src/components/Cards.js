import React from 'react'

const Cards =(props)=> {
  return (
    <>
    
 <div className="card m-2" style={{width :"16rem"}}>
  <img src={props.data.photo} classNameName="card-img-top" style={{height:"200px",width:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <h4 className="card-title">{props.data.price}</h4>
    <p className="card-text">{props.data.instock}</p>
    <a href="#"  className="btn btn-primary">By Now</a>
  </div>
</div>

    </>
  )
}

export default Cards