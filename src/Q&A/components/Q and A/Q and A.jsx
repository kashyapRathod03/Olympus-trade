import React from 'react';
import './Q and A.css';
import Option from '../../../MainHelp/optionbar/Option';
import { useNavigate } from "react-router-dom";

function Userguide() {
    const nevigate = useNavigate();
    return (
        <>
            <Option />
            <div className='main-div'>
                <ul>
                    <li onClick={() => nevigate('/que and ans')} className='main-list'>OLYMPUS TRADE Q&A</li>
                    <hr />
                    <ol className='ol-list'>
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why have I not moved up a rank?')}>Why have I not moved up a rank?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/The possible reasons of an abnormal order')}>The possible reasons of an abnormal order</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/What does it mean to synchronous opening doubled')}>What does it mean to synchronous opening doubled</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why is the amount of my buying transaction in the transaction record higher than the amount of my se')}>Why is the amount of my buying transaction in the transaction record higher than the amount of my se</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/After I closed the position, I used partial liquidation. This order should have been profitable. Why')}>After I closed the position, I used partial liquidation. This order should have been profitable. Why</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Tip API binding error?')}>Tip API binding error?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Description of sub-storage mode')}>Description of sub-storage mode</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Are my funds safe?')}>Are my funds safe?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/I set the first pre-pending order, how do I cancel it?')}>I set the first pre-pending order, how do I cancel it?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why is there an abnormal state')}>Why is there an abnormal state</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/The robot is running, can I operate it on my account?')}>The robot is running, can I operate it on my account?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why don’t you buy for me immediately after selling in the cycle strategy?')}>Why don’t you buy for me immediately after selling in the cycle strategy?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why the robot automatically stops strategy')}>Why the robot automatically stops strategy</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Will the robot sell my own coins?')}>Will the robot sell my own coins?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Can bots run Huobi and Binance at the same time?')}>Can bots run Huobi and Binance at the same time?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/My strategy is cyclic, why does the robot stop?')}>My strategy is cyclic, why does the robot stop?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/No response when starting the robot?')}>No response when starting the robot?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/What is LIQUIDATION and REPLENISHMENT?')}>What is LIQUIDATION and REPLENISHMENT?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Order prompts abnormal operation')}>Order prompts abnormal operation</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Incorrect display of team data')}>Incorrect display of team data</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/I cannot log in to Olympus Trade')}>I can't log in to Olympus Trade</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/May I ask the difference between the quantity bought and sold each time, where is the rest?')}>May I ask the difference between the quantity bought and sold each time, where is the rest?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/The current exchange balance is not displayed')}>The current exchange balance is not displayed</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/I accidentally deposited other currencies to the Olympus Trade platform, can I get it back?')}>I accidentally deposited other currencies to the Olympus Trade platform, can I get it back?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why didn’t the USDT increase in my Olympus Trade account?')}>Why didn’t the USDT increase in my Olympus Trade account?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Set a drop')}>Set a drop of 4%, why the robot has not covered the position after more than 4%</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why does my synchronization strategy have an amount of 5USDT in the first order?')}>Why does my synchronization strategy have an amount of 5USDT in the first order?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why is the total amount bought different from the total amount sold?')}>Why is the total amount bought different from the total amount sold?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why is the balance of BINANCE and Olympus Trade different?')}>Why is the balance of BINANCE and Olympus Trade different?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why hasnt I bought in for me after I started the robot?')}>Why hasn't I bought in for me after I started the robot?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Can I sell manually?')}>Can I sell manually?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Can I use two mobile phones to log in with one robot account?')}>Can I use two mobile phones to log in with one robot account?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Can I bind two robots with one API?')}>Can I bind two robots with one API?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why does it prompt an API exception when the API is bound?')}>Why does it prompt an API exception when the API is bound?</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/The robot prompts that the balance is insufficient')}>The robot prompts that the balance is insufficient</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/I set a take profit')}>I set a take profit of 1.3%, why the robot sells not 1.3%</li><br /><hr /><br />
                        <li className="ol-child" onClick={() => nevigate('/que and ans/Why did my deposit or withdrawal not arrive?')}>Why did my deposit or withdrawal not arrive?</li><br /><hr /><br />


                    </ol>
                </ul>
            </div>
        </>
    )
}

export default Userguide
