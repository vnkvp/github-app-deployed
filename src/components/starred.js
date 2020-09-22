'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Starred = ({ className, title, starred }) => (
    <div className={className}>
        <h4 className="title">{title}</h4>
        <ul>
            <div className="grid2">
                {starred.map((star, index) => (
                    <div className="star" key={index}>
                        <li className="list">
                            <a href={star.link} className="links">
                                {star.name}
                            </a>
                        </li>
                        <div className="description">
                            <p>{star.description}</p>
                            <p className="language">{star.language}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ul>
    </div >
)

Starred.defaultProps = {
    className: ''
}

Starred.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    starred: PropTypes.array
}

export default Starred