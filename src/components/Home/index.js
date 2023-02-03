import { Container, Row, Col } from 'react-bootstrap';
import './index.scss';

const Home = () => {
  return (
    <Container className="content d-flex align-items-end py-5">
      <Row>
        <Col xs={{ offset: 2 }} sm={{ span: 4 }} lg={{ span: 3 }}>
          <h1 className="title animate__animated animate__fadeInUp">
            Hello.
          </h1>
          <p className="subtitle mb-2">My name is Lorem Ipsum</p>
          <p className=" description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
