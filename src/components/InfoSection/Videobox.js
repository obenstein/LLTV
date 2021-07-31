import React from 'react'
import "./Videobox.css"
import { useState } from 'react';
import { Button } from '../ButtonElements';

function Videobox(props) {

    const { hybridDetails } = props
    console.log({ hybridDetails })

    const [check, setCheck] = useState(0)

    const handleCheckone = (() => {
        console.log({ check })
        setCheck(0)
    })

    const handleChecktwo = (() => {
        console.log({ check })
        setCheck(1)
    })

    const handleCheckthree = (() => {
        console.log({ check })
        setCheck(2)
    })

    return (

        <div className="video_wrapper">
            <div className="video_text">
                <h3>
                    {hybridDetails[0].title}
                    <br />
                    <br />
                </h3>
                <p>
                    {hybridDetails[0].desc}
                </p>


                <div>
                    <button style={{
                        color: `${check === 0 ? "#00adb5" : ""}`
                    }} onClick={handleCheckone}>
                        {hybridDetails[0].bt1}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 1 ? "#00adb5" : ""}`
                        }}
                        onClick={handleChecktwo}>
                        {hybridDetails[0].bt2}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 2 ? "#00adb5" : ""}`
                        }}
                        onClick={handleCheckthree}>
                        {hybridDetails[0].bt3}
                    </button>
                </div>
            </div>
            <div className="videos_wrapper">
                {check === 0 ? <div className="video_vid">
                    <video width="400" height="250  " loop autoPlay>
                        <source src={hybridDetails[0].v1}></source>

                    </video>
                </div> : ""
                }
                {
                    check === 1 ? <div className="video_vid">
                        <video width="400" height="250  " loop autoPlay>
                            <source src={hybridDetails[0].v2}></source>

                        </video>
                    </div> : ""
                }
                {
                    check === 2 ? <div className="video_vid">
                        <video width="400" height="250  " loop autoPlay>
                            <source src={hybridDetails[0].v3}></source>

                        </video>
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default Videobox

