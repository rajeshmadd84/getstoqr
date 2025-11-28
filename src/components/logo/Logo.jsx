import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/stoqr.svg';
import logoLight from '../../assets/img/stoqr.svg';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='AIMass'
        width='128'       
      />
    </Link>
  );
};

export default LogoDark;
