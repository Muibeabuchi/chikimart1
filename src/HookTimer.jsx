import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef(null);

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1);
        },[1000])

        return ()=> clearInterval(intervalRef.current)
    },[])
  return (
    <>
        <div>HookTimer - {timer}</div>
        <button onClick={()=>clearInterval(intervalRef.current )}>Clear Hook Timer</button>
    </>
  )
}

export default HookTimer