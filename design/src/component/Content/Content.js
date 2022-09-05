import React from 'react';
import pic1 from '../imgs/pic1.jpg';
import pic2 from '../imgs/pic2.jpg';
import './Content.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Content = () => {
    return (
        <div className='content'>
            <div className='all-cards'>
                <div className='card'>
                    <div className='circles' style={{ background: "palevioletred" }}>
                        <LocalAtmIcon style={{ margin: "0 auto", paddingTop: "10px" }} />

                    </div>
                    <div className='c-text'>
                        <span style={{ fontWeight: "bold", color: "black" }}>$123</span>
                        <span style={{ fontSize: "14px" }}>Lorem Ipsum is simply</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='circles' style={{ background: "#87e6fb" }} >
                        <MonetizationOnIcon style={{ margin: "0 auto", paddingTop: "10px" }} />

                    </div>
                    <div className='c-text'>
                        <span style={{ fontWeight: "bold", color: "black" }}>$223</span>
                        <span style={{ fontSize: "14px" }}>Lorem Ipsum is simply</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='circles' style={{ background: "#ffc05c " }}>
                        <PriceChangeIcon style={{ margin: "0 auto", paddingTop: "10px" }} />

                    </div>
                    <div className='c-text'>
                        <span style={{ fontWeight: "bold", color: "black" }}>$1523</span>
                        <span style={{ fontSize: "14px" }}>Lorem Ipsum is simply</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='circles' style={{ background: "tomato" }}>
                        <LocalMallIcon style={{ margin: "0 auto", paddingTop: "10px" }} />

                    </div>
                    <div className='c-text'>
                        <span style={{ fontWeight: "bold", color: "black" }}>$2302</span>
                        <span style={{ fontSize: "14px" }}>Lorem Ipsum is simply</span>
                    </div>
                </div>


            </div>
            <div className='notification'>
                <div className='notification-icon'>
                    <h4><NotificationsActiveIcon /></h4>
                    <hr />
                    <div className="update">
                        <img src={pic1} alt="profile" />
                        <div className="noti">
                            <div>
                                <span>Shahnaj Parven </span>
                                <span> Lorem Ipsum is simply dummy .</span>
                            </div>
                            <span style={{ fontSize: "14px" }}>10 seconds ago</span>
                        </div>
                    </div>
                    <div className="update">
                        <img src={pic2} alt="profile" />
                        <div className="noti">
                            <div>
                                <span>Shahnaj Parven </span>
                                <span> Lorem Ipsum is simply dummy text of .</span>
                            </div>
                            <span style={{ fontSize: "14px" }}>25 seconds ago</span>
                        </div>
                    </div>

                    <div className='arrow'><KeyboardArrowDownIcon /></div>


                </div>
            </div>

        </div>
    )
}

export default Content
