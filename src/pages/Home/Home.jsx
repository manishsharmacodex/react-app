import React from 'react'
import './Home.css'
import JobInfoSection from '../../components/JobInfoSection/JobInfoSection'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  return (
    <div className='home'>
        <JobInfoSection/>
        <AppDownload/>
    </div>
  )
}

export default Home
