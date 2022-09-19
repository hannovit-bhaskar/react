import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types'
const Timer = (props)=>{
            const [milliSeconds,setMilliSeconds] = useState(0);
            const [seconds,setSeconds] = useState(0);
            const [minutes,setMinutes] = useState(0);
            const [stop,setStop] = useState(false);
            useEffect(()=>{
                var timer;
                if(stop){
                timer = setInterval(()=>{
                    setMilliSeconds(milliSeconds+1);
                    if(milliSeconds===99){
                        setSeconds(seconds+1);
                        setMilliSeconds(0);
                    }
                    if(seconds===59){
                        setMinutes(minutes+1);
                        setSeconds(0);
                        setMilliSeconds(0);
                    }
                },8)
            }else{
                clearInterval(timer);
            }
            return ()=>clearInterval(timer);
            });

            const onStart=()=>{
                setStop(true);
            }

            const reset=()=>{
                setMilliSeconds(0);
                setSeconds(0);
                setMinutes(0);
                setStop(false);
            }
            const onStop=()=>{
                setStop(false);
            }
    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-header bg-dark text-light">{props.projectName}</div>
                <div className="card-body bg-info">
                    <div className="h1">
                        {minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}:{milliSeconds<10?"0"+milliSeconds:milliSeconds}
                    </div>
                </div>
                <div className="card-footer bg-info">
                    <button className='start btn btn-primary rounded-pill' onClick={onStart} >Start</button>
                    <button className='reset btn btn-warning rounded-pill ms-2' onClick={reset} >Reset</button>
                    <button className='stop btn btn-danger rounded-pill ms-2' onClick={onStop}>Stop</button>
                </div>
            </div>

        </div>
    )
}

export default Timer
const name = "Bhaskar Mahor";
const message = "This is Day-5 Assignment";
export {name}
export {message}

Timer.propTypes = {projectName:PropTypes.string.isRequired}
Timer.defaultProps = {projectName:"This is stop watch"}
