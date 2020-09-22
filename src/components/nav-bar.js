'use strict'

import React from 'react'
import Search from './search'
import Actions from './actions'
import PropTypes from 'prop-types'

const NavBar = ({ handleSearch, seeRepo, seeStar}) => (
    <div className="navbar">
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dtNE8IQSVDx0zNH7JJPWBwHaHa%26pid%3DApi&f=1' className="logo" />
        <Search handleSearch={handleSearch} />
        <Actions
            seeRepo={seeRepo}
            seeStar={seeStar}
        />
    </div>
)

NavBar.propTypes = {
    handleSearch: PropTypes.func,
    seeRepo: PropTypes.func,
    seeStar: PropTypes.func
}

export default NavBar