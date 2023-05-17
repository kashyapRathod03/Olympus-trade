import React from 'react';
import "./l38.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l38() {
    return (
        <>

            <div className='lmain-div_l38'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l38'>
                    <div className='main-head_l38'>Introducing Price Alerts</div>

                    <span className="main-span_l38">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l38"> Do you want to know what is happening in the market instantly but do not have time to monitor it? Royal Q has added a new price alert feature. <br /> You will be able to know instantly without constantly checking the  market.<br />   What are price alerts?  When you want to be on top of the market and get information straight  away.<br /> You simply need to set your price and conditions. Once the market  meets your settings, it will give you an alert.<br /><br />
                        How to set it up? <br />
                        Please refer to the link below.  <br /> <a href='https://news.royalqs.com/#/articles/4934'>https://news.royalqs.com/#/articles/4934</a><br /><br />

                        Precautions: Please make sure you have turned on the phone notifications.<br /><br /> Push  notifications will differ from phone models and systems.<br /> You might not  be able to receive it on time. Please make risk controls.  <br /><br />

                        Thank you for your support to Royal Q!</span>
                </div>

            </div>
        </>
    )
}

export default l38