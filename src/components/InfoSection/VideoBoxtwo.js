import React from 'react'
import "./Videobox.css"
import { useState } from 'react';
import { Button } from '../ButtonElements';

function Videoboxtwo(props) {
    const { hybridDetails } = props
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

            <div className="videos_wrapper">
                {check === 0 ? <div className="video_vid">
                    <video width="400" height="250  " loop autoPlay>
                        <source src={hybridDetails[2].v1}></source>

                    </video>
                </div> : ""
                }
                {
                    check === 1 ? <div className="video_vid">
                        <video width="400" height="250  " loop autoPlay>
                            <source src={hybridDetails[2].v2}></source>

                        </video>
                    </div> : ""
                }
                {
                    check === 2 ? <div className="video_vid">
                        <video width="400" height="250  " loop autoPlay>
                            <source src={hybridDetails[2].v3}></source>

                        </video>
                    </div> : ""
                }
            </div>
            <div className="video_text">
                <h3>
                    {hybridDetails[2].title}
                    <br />
                    <br />
                </h3>
                <p style={{
                    padding: "0"
                }}>
                    {hybridDetails[2].desc}
                </p>


                <div>
                    <button style={{
                        color: `${check === 0 ? "#00adb5" : ""}`
                    }} onClick={handleCheckone}>
                        {hybridDetails[2].bt1}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 1 ? "#00adb5" : ""}`
                        }}
                        onClick={handleChecktwo}>
                        {hybridDetails[2].bt2}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 2 ? "#00adb5" : ""}`
                        }}
                        onClick={handleCheckthree}>
                        {hybridDetails[2].bt3}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Videoboxtwo
