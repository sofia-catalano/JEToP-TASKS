import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation.js';
import WeatherForm from './Components/WeatherForm.js';
import {Container, Row, Alert} from 'react-bootstrap';
import showWeather from './API.js';
import {useState} from 'react';
function App() {
  const [message, setMessage] = useState('');

  const fetchWeather = async (info) => {
    try {
      const weatherInfo = await showWeather(info);
      console.log(weatherInfo);
    } catch(err) {
      handleErrors(err);
    }
  }

  //manage the  errors
const handleErrors = (err) => {
  setMessage(err);
  setTimeout(() => {
    // After 3 seconds set the message empty 
    setMessage('');
  }, 3000)
}


  return (
    <> 
      <Navigation/>
      <Container className="below-nav">
      {message &&
          <Row>
            <Alert variant="danger" className="mx-auto w-75" onClose={() => setMessage('')} dismissible>
              <Alert.Heading>{`Oh snap! You got an error!`}</Alert.Heading>
                <p>{message} </p>
            </Alert> 
          </Row>}

        <WeatherForm handleErrors={handleErrors} fetchWeather={fetchWeather}/> 
      </Container>
    </>
  );
}

export default App;
