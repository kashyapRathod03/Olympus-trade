import React from 'react';
import "./l33.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l33() {
    return (
        <>

            <div className='lmain-div_l33'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l33'>
                    <div className='main-head_l33'>Scamming Website Warning</div>

                    <span className="main-span_l33">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l33"> Please be aware of the false information shared by <a href='www.rqtoken.io.'> www.rqtoken.io.  </a><br /><br /> To avoid a wrongful purchase, please always use the link below to download Royal Q App and only trade or make deposit/withdraw/transfer through Royal Q App. <br />( <a href='https://play.google.com/store/search?q=royalq&c=apps '>https://play.google.com/store/search?q=royalq&c=apps </a> or <a href='https://play.google.com/store/search?q=royalq&c=apps '>https://play.google.com/store/search?q=royalq&c=apps </a>) <br /><br />

                        If you find any sign-in request from any scamming website, please screenshot and send it to our customer service. We will reward you RP after validation. Our risk management team will take strict measures.  Royal Q will not be liable for any loss should you act on any request through the scamming website or App.<br /><br />  Thank you for your support! <br /><br />

                    </span>

                </div>

            </div>
        </>
    )
}

export default l33