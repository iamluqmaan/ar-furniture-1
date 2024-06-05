import React, { useState } from 'react';
import Header from './header.jsx';
import Hero from './Hero.jsx';
import Chair from './Chairs.jsx';
import Tables from './Tables.jsx';
import Sofa from './Sofa.jsx';
import Lamp from './Lamps.jsx';
import Kitchen from './Kitchen.jsx';
import Elevator from './Elevator.jsx';
import '../Home.css'

const Home = () => {
    const [chair, setChair] = useState(false);
    const [table, setTable] = useState(false);
    const [lamp, setLamp] = useState(false);
    const [sofa, setSofa] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [elevator, setElevator] = useState(false);
    const [all, setAll] = useState(true);

    const showAll = () => {
        setAll(true);
        setChair(false);
        setTable(false);
        setSofa(false);
        setLamp(false);
        setKitchen(false);
        setElevator(false);
    };

    const showChair = () => {
        setAll(false);
        setChair(true);
        setTable(false);
        setSofa(false);
        setLamp(false);
        setKitchen(false);
        setElevator(false);
    };

    const showLamp = () => {
        setAll(false);
        setChair(false);
        setTable(false);
        setSofa(false);
        setLamp(true);
        setKitchen(false);
        setElevator(false);
    };

    const showSofa = () => {
        setAll(false);
        setChair(false);
        setTable(false);
        setSofa(true);
        setLamp(false);
        setKitchen(false);
        setElevator(false);
    };

    const showTable = () => {
        setAll(false);
        setChair(false);
        setTable(true);
        setSofa(false);
        setLamp(false);
        setKitchen(false);
        setElevator(false);
    };

    const showKitchen = () => {
        setAll(false);
        setChair(false);
        setTable(false);
        setSofa(false);
        setLamp(false);
        setKitchen(true);
        setElevator(false);
    };

    const showElevator = () => {
        setAll(false);
        setChair(false);
        setTable(false);
        setSofa(false);
        setLamp(false);
        setKitchen(false);
        setElevator(true);
    };

    return (
        <>
            
           <Hero />
           <Header />
            <div className="tags-container">
                <div className="tags">
                    <button onClick={showAll}>All products</button>
                    <button onClick={showSofa}>Sofas</button>
                    <button onClick={showChair}>Chairs</button>
                    <button onClick={showTable}>Tables</button>
                    <button onClick={showLamp}>Lamps</button>
                    <button onClick={showKitchen}>Kitchens</button>
                    <button onClick={showElevator}>Elevators</button>
                </div>
            </div>

            <div className="Furniture">
                <div className="ornament-head">
                    <div>
                        <h1>{all ? 'All' : sofa ? 'Sofas' : table ? 'Tables' : lamp ? 'Lamps' : kitchen ? 
                        'Kitchens' : elevator?'Elevator': 'Chairs'}</h1>
                    </div>
                </div>
               <div className='allItem'>
               {all &&
                    <>
                        <Sofa />
                        <Chair />
                        <Tables />
                        <Lamp />
                        <Kitchen />
                        <Elevator />
                    </>}
                {chair && <Chair />}
                {table && <Tables />}
                {lamp && <Lamp />}
                {sofa && <Sofa />}
                {kitchen && <Kitchen />}
                {elevator && <Elevator />}
               </div>
            </div>
        </>
    );
};
export default Home;
