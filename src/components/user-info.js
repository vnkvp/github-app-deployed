'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
    <div className="user-info">
        <div className="pic">
        <img src={userinfo.photo} className="picture" />
        </div>
        <div>
        <h1>
        <a href={`https://github.com/${userinfo.login}`} className="username">
            {userinfo.username}
        </a>
        </h1>
        <p className="login">{userinfo.login}</p>
        <p>{userinfo.location}</p>
        <ul className="repo-info">
            <li>Repositories: {userinfo.repos}</li>
            <li>Following: {userinfo.following}</li>
            <li>Followers: {userinfo.followers}</li>
        </ul>
        </div>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo