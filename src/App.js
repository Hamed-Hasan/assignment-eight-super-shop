import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactWork from './component/ReactWork/ReactWork';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      {/*--------main shop container---------- */}
   <Shop/>

    {/*--------React Reviews container---------- */}
   <ReactWork/>
    </div>
  );
}

export default App;
