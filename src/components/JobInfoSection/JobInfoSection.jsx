import React from 'react'
import './JobInfoSection.css'

const JobInfoSection = () => {
  return (
    <div className='jobinfoitems'>
        <div className="job-info">
            <p># India No's 1 Job Portal</p>
            <h1>We Are Hiring You</h1>
        </div>
        <div className="search-job">
          <label>Search Job's Near By You</label>
          <div className="search-box">
            <input type="text" placeholder='Search Job' />
            <button>Search</button>
          </div>
        </div>
        <div className='app-download'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non laborum maiores laudantium, praesentium odit</p>
        <div className="job-btn-box">
            <button>Download App</button>
            <button>Apply Job's</button>
        </div>
        <div className="job-apply">
          <div>+3L Apply Job</div>
          <div>+10L Download App</div>
        </div>
    </div>
    </div>
  )
}

export default JobInfoSection
