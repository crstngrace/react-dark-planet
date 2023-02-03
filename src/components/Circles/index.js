import SmallCircle from './small-circle';
import './index.scss';

const Circles = (props) => {
  let circles = [];

  for (let i = 0; i < 4; i++) {
    circles[i] = <SmallCircle key={i} />;
  }

  return (
    <div
      id="circles"
      className={`circles ${props.navigate ? 'animate' : ''}`}
    >
      <div className="small-circles">{circles}</div>
      <div className="main-circle">
        <div className="outer-circle">
          <div className="outer-spinner">
            <div
              className={`inner-contents ${
                !props.navigate
                  ? 'animate__animated animate__zoomIn'
                  : ''
              }`}
            >
              {props.children}
              <div
                className={`inner-circle ${
                  !props.navigate
                    ? 'animate__animated animate__zoomIn'
                    : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circles;
