import './App.css';
import Values from './useEffect/Values';
import Counter from './useState/Counter';
import Objects from './useState/Objects';
import People from './useState/People';

function App() {
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-evenly'>
                <Counter />
                <People />
                <Objects />
                <Values />
            </div>
        </div>
    );
}

export default App;
