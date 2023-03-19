import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='type here ...' className='focus:border-1px focus:!border-primary bg-[gray] rounded-[10px] p-[4px] mt-[4rem] mx-auto block' />
    </div>
  )
}

export default FocusInput