import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function WindowEvent () {
  // see here https://developer.mozilla.org/en-US/docs/Web/Events
  // and here: https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
  const eventTypeDbl = 'dblclick'
  const doubleClick = () => alert('mouse pressed');
  const disconnectLogic = () => {
    console.log('removing');
    window.removeEventListener(eventTypeDbl, doubleClick);
    console.log('removed');
  };

  useEffect(( )=> {
    console.log("start up logic is here");
    return () => {console.log("shutdown effect here")}
  }, [] );

  useEffect(() => {
    window.addEventListener(eventTypeDbl, doubleClick);
    return disconnectLogic;
  }, []);

  return (
    <h2>Window event active</h2>
  )
}
