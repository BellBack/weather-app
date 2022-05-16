import Weathers from './Weathers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadWeather } from '../redux/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWeather());
  }, [dispatch]);

  return (
    <div className="App">
      <Weathers />
    </div>
  );
}

export default App;
