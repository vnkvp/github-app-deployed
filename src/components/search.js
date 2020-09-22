'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => (
    <div className="search">
        <input type="search"
            placeholder="Search for a GitHub user"
            className="search-bar"
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func
}

export default Search