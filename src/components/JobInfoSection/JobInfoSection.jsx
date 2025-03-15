import React from 'react'
import './JobInfoSection.css'

const JobInfoSection = () => {
  return (
    <div className='jobinfoitems'>
        <div className="job-info">
            <p># India No's 1 Job Portal</p>
            <h1>We Are Hiring...</h1>
        </div>
        <div className="search-job">
          <label>Search Job's Near By You</label>
          <input type="text" placeholder='Search Job' />
        </div>
    </div>
  )
}

export default JobInfoSection
