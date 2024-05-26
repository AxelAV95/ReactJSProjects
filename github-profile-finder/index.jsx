import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './user';
import './styles.css'

export function GithubProfileFinder() {
    const [userName, setUserName] = useState('AxelAV95');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showData, setShowData] = useState(false)
    const handleSubmit = () => {
        fetchGithubUserData()
        setShowData(true)
    };

    const fetchGithubUserData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();

            if (data) {
                setUserData(data);
                setLoading(false);
                setUserName('')
              }

            console.log(data)

        } catch (error) {
            console.log(error.message)
        }

    };

    const showDetails = (username) =>{
        setShowData(false)
        setUserName(username)
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data ! Please wait</h1>;
      } 
    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input type="search-by-username" placeholder='Search github username' value={userName} onChange={(event) => showDetails(event.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            
            {userData !== null && showData ? <User data={userData} /> : null}
        </div>
    );
}
