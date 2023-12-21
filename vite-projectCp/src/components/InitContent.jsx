import PropTypes from 'prop-types';
import './styles/InitContent.css'

function InitContent({ h1, h2, h3 }) {
  return (
    <>
        <hr className='separator'/>
        <section>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
        </section>
        <hr className='separator'/>
    </>

  );
}

InitContent.propTypes = {
    h1: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    h3: PropTypes.string.isRequired,
};

export default InitContent;
