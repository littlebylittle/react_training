import {useEffect, useRef} from 'react'

export default function FocusInput() {
  const focusedInput = useRef(null);
  useEffect(()=>{
    focusedInput.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      {/* attribute REF! */}
      <input name='focused-input' ref={focusedInput} ></input>
    </div>
  )
}
