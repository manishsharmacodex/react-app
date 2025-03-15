import React from 'react'
import './Home.css'
import JobInfoSection from '../../components/JobInfoSection/JobInfoSection'
import AppDownload from '../../components/AppDownload/AppDownload'
import JobSection from '../../components/JobSection/JobSection'

const Home = () => {
  return (
    <div className='home'>
        <JobInfoSection/>
        <AppDownload/>
        <JobSection/>
    </div>
  )
}

export default Home
