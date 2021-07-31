import React from 'react'
import "./Reach.css"
import { Button } from '../ButtonElements'
function Reach(props) {
    const { hybridDetails } = props
    return (
        <div className="top__wrapper">
            <div className="text_wrap">
                <div className="top__heading">
                    <h1>{hybridDetails[3].title}</h1>



                </div>
                <div className>
                    <p>
                        {hybridDetails[3]?.desc}
                    </p>
                </div>
            </div>

            <div className="info__cards">
                <div className="card_one">
                    <img src={hybridDetails[3].img1} />
                    <div className="texxxt">
                        <h3>
                            {hybridDetails[3].img1tit}

                        </h3>
                        <p>{hybridDetails[3].img1desc}</p>
                    </div>

                </div>
                <div className="card_two">
                    <img src={hybridDetails[3].img2}
                        style={{
                            paddingLeft: "100px"
                        }} />
                    <div className="texxxt">
                        <h3>
                            {hybridDetails[3].img2tit}

                        </h3>
                        <p>{hybridDetails[3].img2desc} </p>
                    </div>
                </div>
                <div className="card_three">
                    <img src={hybridDetails[3].img3} />
                    <div className="texxxt">
                        <h3>
                            {hybridDetails[3].img3tit}
                        </h3>
                        <p>{hybridDetails[3].img3desc}</p>
                    </div>
                </div>
            </div>
            <div className="the__buttons">
                <Button
                    style={{
                        width: "30%",
                        backgroundColor: "#00adb5"
                    }}
                >{hybridDetails[3].bt1}</Button>
            </div>
        </div>
    )
}

export default Reach
