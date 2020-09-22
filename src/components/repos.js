'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h4 className="title">{title}</h4>
        <ul>
            <div className="grid2">
                {repos.map((repo, index) => (
                    <div className="repo" key={index}>
                        <li className="list">
                            <a href={repo.link} className="links">
                                {repo.name}
                            </a>
                        </li>
                        <div className="description">
                            <p >{repo.description}</p>
                            <p className="language">{repo.language}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ul>
    </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos