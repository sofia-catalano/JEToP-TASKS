import './../App.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import dayjs from 'dayjs';

function WeatherForm(props) {
  const [city, setCity] = useState('');
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if(form.checkValidity() === false){
        setValidated(true); //enable bootstrap validation
    }
    else{
      const info = { city: city, date: dayjs(date).format("YYYY-MM-DD")};
      props.fetchWeather(info)
        .catch((err) => props.handleErrors(err.error))
    }

  };

  return (
    <Container as={Col} sm={8} md={5} className="form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="justify-content-center pt-4">
          <Form.Group as={Col} sm={10} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Enter your city.."
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            />
              <Form.Control.Feedback type="invalid">
              Please choose a city..
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} sm={10} className="mt-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              min= {dayjs().format("YYYY-MM-DD")}
              max= {dayjs().add(4, 'day').format("YYYY-MM-DD")}
              onChange={(event) => setDate(event.target.value)}
              required
            />
             <Form.Control.Feedback type="invalid">
              Please choose a date..
            </Form.Control.Feedback>
          </Form.Group>
          <Container className='d-flex justify-content-center'>
            <Button className="log-button my-4" type="submit">
              View your weather
            </Button>
          </Container>
      
          </Row>
      </Form>
    </Container>
  );
}

export default WeatherForm;
