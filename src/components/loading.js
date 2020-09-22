import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
 
const Loading = ({ type, color }) => (
    <ReactLoading className="loading" type={type} color={color} height={'33%'} width={'33%'} />
);
 
Loading.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string
}

export default Loading;