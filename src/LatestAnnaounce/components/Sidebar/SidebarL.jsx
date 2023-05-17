import React from 'react'
import './SidebarL.css';
import { useNavigate } from "react-router-dom";


function Sidebar() {
    const nevigate = useNavigate();

    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">All Section Detailes Are Here</button>
                <div className="dropdown-content">
                    <span onClick={() => nevigate('/announcement')}>Latest AnnounceMent<hr/></span>
                    <span onClick={() => nevigate('/announcement/New Trading Pairs')}>New Trading Pairs<hr/></span> 
                    <span onClick={() => nevigate('/announcement/User Ranking Promotion Adjustment Notice ')}>User Ranking Promotion Adjustment Notice <hr/></span> 
                    <span onClick={() => nevigate('/announcement/iOS Limitations Notice')}>iOS Limitations Notice<hr/></span> 
                    <span onClick={() => nevigate('/announcement/New Investment Currency Feature')}>New Investment Currency Feature<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Copier Owner Expiration Notice')}>Copier Owner Expiration Notice<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Bind Telegram to receive latest information')}>Bind Telegram to receive latest information<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Strategy Adjustments')}>Strategy Adjustments<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Please Do Not Use Olympus Trade to Collect Outer Payments')}>New Trading PairsPlease Do Not Use Olympus Trade to Collect Outer PaymentsNew Trading Pairs<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Please do not share your API binding process')}>Please do not share your API binding process<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Adjusting first buy in amount')}>Adjusting first buy in amount<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Adjusting withdrawal transaction fee')}>Adjusting withdrawal transaction fee<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Team Page Adjustments')}>Team Page Adjustments <hr/></span> 
                    <span onClick={() => nevigate('/announcement/Grid Strategy Now Available')}>Grid Strategy Now Available<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Exchange cease operations in Japan')}>Exchange cease operations in Japan<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Beware of new scams')}>Beware of new scams<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Beware of scam websites')}>Beware of scam websites<hr/></span> 
                    <span onClick={() => nevigate('/announcement/System maintenances')}>System maintenances<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Reminder on Binance API binding')}>Reminder on Binance API binding<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Binance transaction system fixed')}>Binance transaction system fixed<hr/></span> 
                    <span onClick={() => nevigate('/announcement/System update complete')}>System update complete<hr/></span> 
                    <span onClick={() => nevigate('/announcement/System update delay')}>System update delay<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Olympus Trade System Upgrade Announcement')}>Olympus Trade System Upgrade Announcement<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Security Questions Notice')}>Security Questions Notice<hr/></span> 
                    <span onClick={() => nevigate('/announcement/French and Arabic Now Available')}>French and Arabic Now Available<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Adding Fiat Currency Conversion')}>Adding Fiat Currency Conversion<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Notice for Adjusting first buy in amount')}>Notice for Adjusting first buy in amount<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Reducing Withdrawal Fee')}>Reducing Withdrawal Fee<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Margin call limit changes')}>Margin call limit changes<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Account Security Update')}>Account Security Update<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Modify the mailbox/password/transaction password related matters')}>Modify the mailbox/password/transaction password related matters<hr/></span> 
                    <span onClick={() => nevigate('/announcement/V6 Bonus Assessment Suspended')}>V6 Bonus Assessment Suspended<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Online customer service time adjustment')}>Online customer service time adjustment<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Scamming Website Warning')}>Scamming Website Warning<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Beware of false information')}>Beware of false information<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Be aware of scam websites and hackers!')}>Be aware of scam websites and hackers!<hr/></span> 
                    <span onClick={() => nevigate('/announcement/Do not believe any false information about the migration and transfer accounts, leaking account pass')}>Do not believe any false information about the migration and transfer accounts, leaking account pass<hr/></span> 
                    <span onClick={() => nevigate('/announcement/The first order amount is adjusted to a minimum of 15USDT')}>The first order amount is adjusted to a minimum of 15USDT <hr/></span> 
                    <span onClick={() => nevigate('/announcement/Introducing Price Alerts')}>Introducing Price Alerts<hr/></span> 
                    
                </div>
            </div>

        </>
    )
}

export default Sidebar
