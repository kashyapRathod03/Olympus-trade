import React from 'react'
import './Sidebar.css';
import { useNavigate } from "react-router-dom";


function Sidebar() {
    const nevigate = useNavigate();

    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">All Section Detailes Are Here</button>
                <div className="dropdown-content">
                    <span onClick={() => nevigate('/Userguide')}>UserGuide<hr/></span>
                    <span onClick={() => nevigate('/Userguide/BinancePro')}>Binance Pro Api Binding<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Instructions on binding Telegram')}>Instructions on binding Telegram<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Instrcutions on creating Martingale Strategy Bot')}>Instrcutions on creating Martingale Strategy Bot<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Olympus Trade operation setting instructions')}>Olympus Trade operation setting instructions<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Introduction on Grid strategy')}>Introduction on Grid strategy<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How to create a website shortcut')}>How to create a website shortcut<hr/></span>
                    <span onClick={() => nevigate('/Userguide/What will happen if my account expires?')}>What will happen if my account expires?<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How to check the security questions?')}>How to check the security questions?<hr/></span>
                    <span onClick={() => nevigate('/Userguide/What are Rewards Lost?')}>What are Rewards Lost?<hr/></span>
                    <span onClick={() => nevigate('/Userguide/First present buy in price')}>First present buy in price<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Google Authenticator Tutorial')}>Google Authenticator Tutorial<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Introducing transaction page')}>Introducing transaction page<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How to find my counselor?')}>How to find my counselor?<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How to create a copier')}>How to create a copier<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Transaction Records and Revenue Details')}>Transaction Records and Revenue Details<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Quantitative trading parameter setting tutorial')}>Quantitative trading parameter setting tutorial<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Unable to receieve the verfication email')}>Unable to receieve the verfication email<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Double opening function')}>Double opening function<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Take Profit Rules')}>Take Profit Rules<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Description of margin call configuration')}>Description of margin call configuration<hr/></span>
                    <span onClick={() => nevigate('/Userguide/One-shot strategy and Cycle strategy')}>One-shot strategy and Cycle strategy<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Batch setting function')}>Batch setting function<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Trigger margin call price calculation')}>Trigger margin call price calculation<hr/></span>
                    <span onClick={() => nevigate('/Userguide/BNB as handling fee in Binance')}>BNB as handling fee in Binance<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How do I bind to the new Binance or Huobi API?')}>How do I bind to the new Binance or Huobi API?<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Detailed explanation of common professional terms in the transaction process')}>Detailed explanation of common professional terms in the transaction process<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Binance connect tutorial')}>Binance connect tutorial<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Deposit')}>Deposit<hr/></span>
                    <span onClick={() => nevigate('/Userguide/Activation')}>Activation<hr/></span>
                    <span onClick={() => nevigate('/Userguide/The withdrawal has not arrived')}>The withdrawal has not arrived<hr/></span>
                    <span onClick={() => nevigate('/Userguide/How to Choose a Copier to Join')}>How to Choose a Copier to Join<hr/></span>

                </div>
            </div>

        </>
    )
}

export default Sidebar
