import PropTypes from 'prop-types';

export const BtnCalculator = ({ children, className = '', onClick }) => {
    return (
       <button className={className} onClick={onClick}>{children}</button>
    ); 
    
};

BtnCalculator.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
