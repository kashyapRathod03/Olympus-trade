import React from 'react';
import  './Latestanno.css';
import Option from '../../../MainHelp/optionbar/Option';
import { useNavigate } from "react-router-dom";

function Userguide() {
    const nevigate = useNavigate();
    return (
        <>
            <Option/>
            <div className='main-div'>
                <ul>
                    <li onClick={() => nevigate('/announcement')} className='main-list'>LATEST ANNOUNCEMENT</li>
                    <hr/>
                    <ol className='ol-list'>
                        <li className="ol-child" onClick={() => nevigate('/announcement/New Trading Pairs')}>New Trading Pairs</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/User Ranking Promotion Adjustment Notice')}>User Ranking Promotion Adjustment Notice</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/iOS Limitations Notice')}>iOS Limitations Notice</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/New Investment Currency Feature')}>New Investment Currency Feature</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Copier Owner Expiration Notice')}>Copier Owner Expiration Notice</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Bind Telegram to receive latest information')}>Bind Telegram to receive latest information</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Strategy Adjustments')}>Strategy Adjustments</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Please Do Not Use Olympus Trade to Collect Outer Payments')}>Please Do Not Use Olympus Trade to Collect Outer Payments</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Please do not share your API binding process')}>Please do not share your API binding process</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Adjusting first buy in amount')}>Adjusting first buy in amount</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Adjusting withdrawal transaction fee')}>Adjusting withdrawal transaction fee</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Team Page Adjustments')}>Team Page Adjustments </li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Grid Strategy Now Available')}>Grid Strategy Now Available</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Exchange cease operations in Japan')}>Exchange cease operations in Japan</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Beware of new scams')}>Beware of new scams</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Beware of scam websites')}>Beware of scam websites</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/System maintenances')}>System maintenances</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Reminder on Binance API binding')}>Reminder on Binance API binding</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Binance transaction system fixed')}>Binance transaction system fixed</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/System update complete')}>System update complete</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/System update delay')}>System update delay</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Olympus Trade System Upgrade Announcement')}>Olympus Trade System Upgrade Announcement</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Security Questions Notice')}>Security Questions Notice</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/French and Arabic Now Available')}>French and Arabic Now Available</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Adding Fiat Currency Conversion')}>Adding Fiat Currency Conversion</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Notice for Adjusting first buy in amount')}>Notice for Adjusting first buy in amount</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Reducing Withdrawal Fee')}>Reducing Withdrawal Fee</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Margin call limit changes')}>Margin call limit changes</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Account Security Update')}>Account Security Update</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Modify the mailbox/password/transaction password related matters')}>Modify the mailbox/password/transaction password related matters</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/V6 Bonus Assessment Suspended')}>V6 Bonus Assessment Suspended</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Online customer service time adjustment')}>Online customer service time adjustment</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Scamming Website Warning')}>Scamming Website Warning</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Beware of false information')}>Beware of false information</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Be aware of scam websites and hackers!')}>Be aware of scam websites and hackers!</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Do not believe any false information about the migration and transfer accounts, leaking account pass')}>Do not believe any false information about the migration and transfer accounts, leaking account pass</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/The first order amount is adjusted to a minimum of 15USDT')}>The first order amount is adjusted to a minimum of 15USDT </li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/announcement/Introducing Price Alerts')}>Introducing Price Alerts</li><br/><hr/><br/>

                    </ol>
                </ul>
            </div>
        </>
    )
}

export default Userguide
