import React from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section>
            <Helmet>
                <title>VTNE Simplified - Privacy Policy</title>
                <meta name="description" content="Sign up, access study resources, and prepare effectively for the VTNE!" />
                <link rel="canonical" href="https://vtne-simplified.netlify.app" />
            </Helmet>
            <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
                <div className="flex max-w-3xl flex-col py-16 md:py-24 lg:py-32">
                    <div className="flex flex-row items-center gap-4 py-10">
                        <FaArrowLeft className="text-3xl md:text-5xl hover:text-[#9e67f7]" onClick={() => { navigate('/') }} />
                        <h1 className="text-3xl font-bold md:text-5xl">Privacy Policy</h1>
                    </div>
                    <p className="mb-5 text-sm font-bold sm:text-base">Last updated as of July 25, 2024</p>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="text-sm sm:text-base">VTNE Simplified is dedicated to helping users prepare for the VTNE by providing quizzes and tracking their progress. This Privacy Policy outlines how we handle your data to protect your privacy.</p>
                        <p className="text-sm sm:text-base">This policy is intended to clearly explain in human-readable language what data we collect and how it is used. If after reading this policy you have further questions, please contact us at <a href="mailto:quizifycompany@gmail.com" className="font-bold">quizifycompany@gmail.com</a></p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Information Collected</p>
                        <p className="text-sm sm:text-base">VTNE Simplified collects and stores the following types of information to provide and improve our services:</p>
                        <ul className="list-disc ml-5 text-sm sm:text-base">
                            <li>Testing Data: Your quiz scores, progress, and other related information are stored locally on your device.</li>
                        </ul>
                        <p className="text-sm sm:text-base">No other personal information is collected or stored by VTNE Simplified.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Use of Your Data</p>
                        <p className="text-sm sm:text-base">Your testing data is used solely to provide you with personalized feedback and track your progress within the app. We do not share this data with third parties.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Data Security</p>
                        <p className="text-sm sm:text-base">We employ reasonable protections for your information that are appropriate to its sensitivity. However, please be advised that we cannot fully eliminate security risks associated with the storage and transmission of data.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Data Retention</p>
                        <p className="text-sm sm:text-base">We keep your testing data on your device for as long as you use the app. If you choose to delete the app, your data will be removed from your device.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Deleting Your Data</p>
                        <p className="text-sm sm:text-base">You can delete your testing data by uninstalling the VTNE Simplified app from your device. This will remove all stored data associated with your use of the app.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Changes to this Policy</p>
                        <p className="text-sm sm:text-base">We reserve the right to change our Privacy Policy in the future without prior notice. Any changes to our privacy policy will be posted here.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">More Information</p>
                        <p className="text-sm sm:text-base">Contact us at <a href="mailto:quizifycompany@gmail.com" className="font-bold">quizifycompany@gmail.com</a> if you have further questions or concerns about your data.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;
