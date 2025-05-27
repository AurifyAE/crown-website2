import React from 'react'
import { useNavigate } from "react-router-dom";
import tradingVideo from '../assets/gold-trading-graph.mp4'


export default function MyAccount() {
    const navigate = useNavigate();
    return (
        <div className='relative flex flex-col items-center justify-center py-30 min-h-screen overflow-hidden'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0  brightness-60"
            >
                <source src={tradingVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h1 className='text-5xl font-bold mb-5 z-10'>Account Opening Criteria</h1>
            <p  className='text-xl font-light mb-10 z-10'>To open an account with Crown Gold, the applicants must provide the following documents and details</p>
            <ol className="relative z-10 w-11/12 bg-[#ffffffd7] text-black list-decimal py-20 px-10 md:px-30 space-y-12 rounded-[60px] max-w-5xl">
                <li>
                <strong>Proof of Legal Existence</strong>
                <ul className="list-disc pl-5">
                    <li>Valid Trade License (minimum 3 months before expiry)</li>
                    <li>Memorandum & Articles of Association (if applicable)</li>
                    <li>Shareholder Certificate</li>
                    <li>Tax Registration Certificate</li>
                </ul>
                </li>

                <li>
                <strong>Proof of Registered or Principal Address</strong>
                <ul className="list-disc pl-5">
                    <li>Latest Utility Bill or Tenancy Contract (matching the registered address on the license)</li>
                    <li>Board Resolution stating intent and purpose of account opening</li>
                </ul>
                </li>

                <li>
                <strong>Applicant Company Details</strong>
                <ul className="list-disc pl-5">
                    <li>Office Telephone & Fax Numbers</li>
                    <li>Official Email ID</li>
                    <li>Website URL</li>
                </ul>
                </li>

                <li>
                <strong>Identification of Authorised Persons</strong>
                <ul className="list-disc pl-5">
                    <li>Passport Copy & Visa Page for:</li>
                    <ul className="list-[circle] pl-5">
                    <li>Beneficial Owners & Shareholders</li>
                    <li>Individuals operating the account</li>
                    </ul>
                </ul>
                </li>

                <li>
                <strong>Identification of Authorised Signatories (if different from above)</strong>
                <ul className="list-disc pl-5">
                    <li>Full Name, Designation, Contact Details & Email ID</li>
                    <li>Supporting document with Specimen Signature</li>
                </ul>
                </li>

                <li>
                <strong>Identification of Individuals Authorised to Act on Behalf of the Company (if different from above)</strong>
                <ul className="list-disc pl-5">
                    <li>Power of Attorney Holders</li>
                    <li>Third-Party Mandate Holders</li>
                </ul>
                </li>

                <li>
                <strong>Bank Reference</strong>
                <ul className="list-disc pl-5">
                    <li>Reference letter from a bank where the company has held an account for at least two years</li>
                </ul>
                </li>
                <button 
                    className='w-64 h-15 bg-[#7F4F20] rounded-xl text-white cursor-pointer'
                    onClick={() => navigate("/contact")}
                >
                    Open an Account Now
                </button>
            </ol>
        </div>
    )
}
