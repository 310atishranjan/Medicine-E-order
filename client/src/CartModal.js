import React from 'react'
import ReactDom from 'react-dom';
const MODAL_STYLES={
    position:'fixed',
    top:'20%',
    left:'20%',
    right:'50%',
    backgroundColor:'rgb(34,34,34)',
    // transform:'translate(-50%,50%)',
    zIndex:1000,
    height:"70%",
    width:"70%",
    color:"red"
}
const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,.7)',
    zIndex:1000,
}
export default function CartModal({children,onClose}) {
  return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
    <button onClick={onClose}>X</button>
    {children}
    </div>
    </>,
    document.getElementById('cart-root')
  )
}
