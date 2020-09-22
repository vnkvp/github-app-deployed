'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'
import './dist/css/style.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            isFetching: false
        }
    }

    actions(type) {
        return () => {
            const user = this.state.userinfo.login
            ajax()
                .get(`https://api.github.com/users/${user}/${type}`)
                .then((result) => {
                    this.setState({
                        [type]: result.map((repo) => ({
                            name: repo.name,
                            link: repo.html_url,
                            description: repo.description,
                            language: repo.language
                        }))
                    })
                })
        }
    }

    handleSearch(e) {
        const key = e.which || e.keyCode
        const ENTER = 13
        const value = e.target.value

        if (key === ENTER) {
            this.setState({ isFetching: true })
            ajax()
                .get(`https://api.github.com/users/${value}`)
                .then((result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            login: result.login,
                            location: result.location,
                            lastUpdated: result.updated_at,
                            repos: result.public_repos,
                            following: result.following,
                            followers: result.followers
                        },
                        repos: [],
                        starred: []
                    })
                })
                .always(() => {
                    this.setState({
                        isFetching: false
                    })
                })
        }
    }

    render() {

        return (
            <AppContent
                {...this.state}
                handleSearch={(e) => this.handleSearch(e)}
                seeRepo={this.actions('repos')}
                seeStar={this.actions('starred')}
            />
        );
    }

}
export default App