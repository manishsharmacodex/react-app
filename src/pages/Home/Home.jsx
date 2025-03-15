import React from 'react'
import './Home.css'
import JobInfoSection from '../../components/JobInfoSection/JobInfoSection'
import JobSection from '../../components/JobSection/JobSection'

const Home = () => {
  return (
    <div className='home'>
        <JobInfoSection/>
        <JobSection/>
    </div>
  )
}

export default Home
