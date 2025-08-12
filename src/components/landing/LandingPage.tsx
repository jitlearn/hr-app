"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logopng from '../../assets/images/logo.jpg';
import './landingPageStyles.css';
import UploadJobDescription from './upload-jd/UploadJobDescription';
import { ArrowBigRightDash } from 'lucide-react';


const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="start-page-container">
      {/* Main Content */}
      <div className="content-wrapper">
        <Image
          src={logopng}
          alt="Scan Document"
          className="scan-icon"
        />
        <Link href={'/job-dashboard'} className="start-title">
          To Get Started 
          <ArrowBigRightDash className="arrow-icon" />
        </Link>
        <p className="subtitle">
          Create a new job by either uploading a job description or detailing the job yourself.
        </p>
        <button 
          className="create-job-link"
          onClick={handleOpenPopup}
        >
          Create a Job
        </button>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <UploadJobDescription onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default LandingPage;
