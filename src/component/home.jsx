import Header from './header.jsx';
import Chair from './Chairs.jsx';
import Tables from './Tables.jsx';
import Sofa from './Sofa.jsx';
import Lamp from './Lamps.jsx';
import Kitchen from './Kitchen.jsx';
import { useState } from 'react';

const Home = () => {
    const [chair, setchair] = useState(false);
    const [table, settable] = useState(false);
    const [lamp, setlamp] = useState(false);
    const [sofa, setsofa] = useState(false);
    const [kitchen, setkitchen] = useState(false);
    const [All, setAll] = useState(true);

    const showAll = () => {
        setAll(true);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(false);
    };

    const showchair = () => {
        setAll(false);
        setchair(true);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(false);

    };
    const showlamp = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(true);
        setkitchen(false);

    };
    const showsofa = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(true);
        setlamp(false);
        setkitchen(false);

    };

    const showtable = () => {
        setAll(false);
        setchair(false);
        settable(true);
        setsofa(false);
        setlamp(false);
        setkitchen(false);

    };
    const showkitchen = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(false);
        setkitchen(true);

    };

    return (
        <>
            <Header />
            <div className='tags-container'>
                <div className='tags'>
                    <button onClick={showAll}>All</button>
                    <button onClick={showsofa}>Sofas</button>
                    <button onClick={showchair}>Chairs</button>
                    <button onClick={showtable}>Tables</button>
                    <button onClick={showlamp}>Lamps</button>
                    <button onClick={showkitchen}>Kitchens</button>
                </div>
            </div>

            <div className="Furniture">
                <div className="ornament-head">
                    <div>
                        <h1>{All ? 'All' : sofa ? 'Sofas' : table ? 'Tables' : lamp ? 'Lamps' : kitchen ? 'Kitchens' : 'Chairs'}</h1>
                    </div>
                </div>
               <div className='allItem'>
               {All &&
                    <>
                        <Sofa />
                        <Chair />
                        <Tables />
                        <Lamp />
                        <Kitchen />
                    </>}
                {chair && <Chair />}
                {table && <Tables />}
                {lamp && <Lamp />}
                {sofa && <Sofa />}
                {kitchen && <Kitchen />}
               </div>
            </div>
        </>
    );
};

export default Home;
