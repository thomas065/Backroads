import './App.css';
import Counter from './useState/Counter';
import People from './useState/People';

function App() {
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-evenly'>
                <Counter />
                <People />
            </div>
        </div>
    );
}

export default App;
