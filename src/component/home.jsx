import Header from './header.jsx';
import Chair from './Chairs.jsx';
import Tables from './Tables.jsx';
import Sofa from './Sofa.jsx';
import Lamp from './Lamps.jsx';
import { useState } from 'react';

const Home = () => {
    const [chair, setchair] = useState(false);
    const [table, settable] = useState(false);
    const [lamp, setlamp] = useState(false);
    const [sofa, setsofa] = useState(false);
    const [All, setAll] = useState(true); 

    const showAll = () => {
        setAll(true);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(false);
    };

    const showchair = () => {
        setAll(false);
        setchair(true);
        settable(false);
        setsofa(false);
        setlamp(false);
    };
    const showlamp = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(false);
        setlamp(true);
    };
    const showsofa = () => {
        setAll(false);
        setchair(false);
        settable(false);
        setsofa(true);
        setlamp(false);
    };

    const showtable = () => {
        setAll(false);
        setchair(false);
        settable(true);
        setsofa(false);
        setlamp(false);
    };

    return (
        <>
            <Header />
            <div className='tags'>
                <button onClick={showAll}>All</button>
                <button onClick={showchair}>Chairs</button>
                <button onClick={showtable}>Tables</button>
                <button onClick={showlamp}>Lamps</button>
                <button onClick={showsofa}>Sofa`s</button>
            </div>
            <div className="Furniture">
                <div className="ornament-head">
                    <div>
                    <h1>{All ? 'All' : chair ? 'Chairs' : table?'Table':lamp?'Lamp':'Sofas'}</h1>
                    </div>
                </div>
                {All && 
                <>
                    <Chair/>
                    <Tables/>
                    <Lamp/>
                    <Sofa/>
                </>}
                {chair && <Chair />}
                {table && <Tables />}
                {lamp && <Lamp />}
                {sofa && <Sofa />}
            </div>
        </>
    );
};

export default Home;
