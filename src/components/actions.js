'use strict'

import React from 'react'

const Actions = ({ seeRepo, seeStar }) => (
    <div>
        <button className="actions" onClick={seeRepo}>Repositories</button>
        <button className="actions" onClick={seeStar}>Favorites</button>
    </div>
)

export default Actions