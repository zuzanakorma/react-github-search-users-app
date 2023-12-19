import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const GithubContext = React.createContext();
// provider, consumer

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    // request loading
    const [requests, setRequests] = useState(0);
    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    // check rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let { rate: { remaining } } = data;
                setRequests(remaining)
                if (remaining === 0) {
                    // error
                }
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(checkRequests, [])

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
            {children}
        </GithubContext.Provider>);
};

export { GithubProvider, GithubContext }