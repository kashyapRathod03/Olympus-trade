import React from 'react'
import './SidebarQ.css';
import { useNavigate } from "react-router-dom";


function Sidebar() {
    const nevigate = useNavigate();

    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">All Section Detailes Are Here</button>
                <div className="dropdown-content">
                    <span onClick={() => nevigate('/que and ans')}>Olympus trade q and a<hr/></span>
                    <span onClick={() => nevigate('/que and ans/Why have I not moved up a rank?')}>Why have I not moved up a rank?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/The possible reasons of an abnormal order')}>The possible reasons of an abnormal order<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/What does it mean to synchronous opening doubled')}>What does it mean to synchronous opening doubled<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why is the amount of my buying transaction in the transaction record higher than the amount of my se')}>Why is the amount of my buying transaction in the transaction record higher than the amount of my se<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/After I closed the position, I used partial liquidation. This order should have been profitable. Why')}>After I closed the position, I used partial liquidation. This order should have been profitable. Why<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Tip API binding error?')}>Tip API binding error?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Description of sub-storage mode')}>Description of sub-storage mode<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Are my funds safe?')}>Are my funds safe?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/I set the first pre-pending order, how do I cancel it?')}>I set the first pre-pending order, how do I cancel it?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why is there an abnormal state')}>Why is there an abnormal state<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/The robot is running, can I operate it on my account?')}>The robot is running, can I operate it on my account?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why don’t you buy for me immediately after selling in the cycle strategy?')}>Why don’t you buy for me immediately after selling in the cycle strategy?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why the robot automatically stops strategy')}>Why the robot automatically stops strategy<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Will the robot sell my own coins?')}>Will the robot sell my own coins?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Can bots run Huobi and Binance at the same time?')}>Can bots run Huobi and Binance at the same time?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/My strategy is cyclic, why does the robot stop?')}>My strategy is cyclic, why does the robot stop?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/No response when starting the robot?')}>No response when starting the robot?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/What is LIQUIDATION and REPLENISHMENT?')}>What is LIQUIDATION and REPLENISHMENT?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Order prompts abnormal operation')}>Order prompts abnormal operation<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Incorrect display of team data')}>Incorrect display of team data<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/I cannot log in to Olympus Trade')}>I cannot log in to Olympus Trade<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/May I ask the difference between the quantity bought and sold each time, where is the rest?')}>May I ask the difference between the quantity bought and sold each time, where is the rest?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/The current exchange balance is not displayed')}>The current exchange balance is not displayed<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/I accidentally deposited other currencies to the Olympus Trade platform, can I get it back?')}>I accidentally deposited other currencies to the Olympus Trade platform, can I get it back?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why didn’t the USDT increase in my Olympus Trade account?')}>Why didn’t the USDT increase in my Olympus Trade account?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Set a drop')}>Set a drop of 4%, why the robot has not covered the position after more than 4%<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why does my synchronization strategy have an amount of 5USDT in the first order?')}>Why does my synchronization strategy have an amount of 5USDT in the first order?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why is the total amount bought different from the total amount sold?')}>Why is the total amount bought different from the total amount sold?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why is the balance of BINANCE and Olympus Trade different?')}>Why is the balance of BINANCE and Olympus Trade different?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why hasnt I bought in for me after I started the robot?')}>Why hasn't I bought in for me after I started the robot?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Can I sell manually?')}>Can I sell manually?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Can I use two mobile phones to log in with one robot account?')}>Can I use two mobile phones to log in with one robot account?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Can I bind two robots with one API?')}>Can I bind two robots with one API?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why does it prompt an API exception when the API is bound?')}>Why does it prompt an API exception when the API is bound?<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/The robot prompts that the balance is insufficient')}>The robot prompts that the balance is insufficient<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/I set a take profit')}>I set a take profit of 1.3%, why the robot sells not 1.3%<hr/></span> 
                    <span onClick={() => nevigate('/que and ans/Why did my deposit or withdrawal not arrive?')}>Why did my deposit or withdrawal not arrive?<hr/></span> 


                    
                </div>
            </div>

        </>
    )
}

export default Sidebar
