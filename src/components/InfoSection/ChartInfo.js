import React from 'react'
import "./Videobox.css"
import { useState } from 'react';
import { Button } from '../ButtonElements';

function ChartInfo(props) {
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
            <div className="video_text">
                <h3>
                    {hybridDetails[1].chartTitle}
                    <br />
                    <br />
                </h3>
                <p>
                    {hybridDetails[1].chartDesc}
                </p>


                <div>
                    <button style={{
                        color: `${check === 0 ? "#00adb5" : ""}`
                    }} onClick={handleCheckone}>
                        {hybridDetails[1].bt1}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 1 ? "#00adb5" : ""}`
                        }}
                        onClick={handleChecktwo}>
                        {hybridDetails[1].bt2}
                    </button>
                </div>
                <div>
                    <button
                        style={{
                            color: `${check === 2 ? "#00adb5" : ""}`
                        }}
                        onClick={handleCheckthree}>
                        {hybridDetails[1].bt3}
                    </button>
                </div>
            </div>
            <div className="videos_wrapper">
                {check === 0 ? <div className="video_vid">
                    <img
                        style={{
                            width: "400px"
                        }}
                        src={hybridDetails[1].img1} />
                </div> : ""
                }
                {
                    check === 1 ? <div className="video_vid">
                        <img
                            style={{
                                width: "400px"
                            }}
                            src={hybridDetails[1].img2} />
                    </div> : ""
                }
                {
                    check === 2 ? <div className="video_vid">
                        <img
                            style={{
                                width: "400px"
                            }}
                            src={hybridDetails[1].img3} />
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default ChartInfo

