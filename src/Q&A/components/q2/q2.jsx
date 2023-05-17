import React from 'react';
import "./q2.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q2() {
    return (
        <>

            <div className='lmain-div_q2'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q2'>
                    <div className='main-head_q2'>The possible reasons of an abnormal order</div>

                    <span className="main-span_q2">Abnormal orders occur when the crypto in your exchange spot wallet is less than what you have bought through Royal Q system. Here are some of possibilities of leading to an abnormal order other than making sells in the exchange.<br /><br />
                        Converting to BNB<br />
                        When converting crypto to BNB, it will decrease the amount of crypto you have in the spot wallet.<br /><br />

                        Binance Simple Earn<br />

                        When applying for Binance Simple Earn, it will decrease the amount of crypto you have in the spot wallet.<br /><br />

                        Placing sell orders in the exchange<br />
                        When you place sell orders in the exchange, it will freeze the crypto you have in the exchange. If the take profit triggers during this period, the system will detect different amount of crypto and lead to an abnormal order.<br /><br />

                        Transfer<br />
                        By transferring crypto, it will decrease the amount of crypto you have in the spot wallet.<br /><br />

                    </span>

                </div>

            </div>
        </>
    )
}

export default q2