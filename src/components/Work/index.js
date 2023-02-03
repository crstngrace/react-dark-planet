import { Row, Col } from 'react-bootstrap';
import './index.scss';
import { data } from './data.js';

const Work = () => {
  let isEven = true;

  const works = data.map((work, i) => {
    isEven = i % 2 === 0;

    return (
      <Row
        key={i}
        className={`work-item g-0 animate__animated animate__slideInDown`}
      >
        <Col
          md={{
            offset: isEven ? 3 : 0,
            span: 4,
            order: isEven ? 1 : 2,
          }}
        >
          <div
            className="work-image "
            style={{ backgroundImage: `url(${work.img})` }}
          ></div>
        </Col>
        <Col
          md={{
            offset: !isEven ? 3 : 0,
            span: 4,
            order: !isEven ? 1 : 2,
          }}
        >
          <div className="work-details py-5 px-4">
            <h1 className="title">{work.title}</h1>
            <p className="description">{work.description}</p>
            <div className="pt-4">
              Learn more{' '}
              <svg
                width="33"
                height="9"
                viewBox="0 0 33 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3536 4.85355C32.5488 4.65829 32.5488 4.34171 32.3536 4.14645L29.1716 0.964466C28.9763 0.769204 28.6597 0.769204 28.4645 0.964466C28.2692 1.15973 28.2692 1.47631 28.4645 1.67157L31.2929 4.5L28.4645 7.32843C28.2692 7.52369 28.2692 7.84027 28.4645 8.03553C28.6597 8.2308 28.9763 8.2308 29.1716 8.03553L32.3536 4.85355ZM0 5H32V4H0V5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Col>
      </Row>
    );
  });

  return <div className="content w-100">{works}</div>;
};

export default Work;
