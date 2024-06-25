import React from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TermsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section>
            <Helmet>
                <title>Step Comp - make stepping fun</title>
                <meta name="description" content="Sign up, add friends and start competing to become the step champion!" />
                <link rel="canonical" href="https://joinwaddle.netlify.app" />
            </Helmet>
            <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
                <div className="flex max-w-3xl flex-col py-16 md:py-24 lg:py-32">
                    <div className="flex flex-row items-center gap-4 py-10">
                        <FaArrowLeft className="text-3xl md:text-5xl hover:text-[#9e67f7]" onClick={() => { navigate('/') }} />
                        <h1 className="text-3xl font-bold md:text-5xl">Terms Of Service</h1>
                    </div>
                    <p className="mb-5 text-sm font-bold sm:text-base">Last updated as of June 25, 2024</p>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">1. Services</p>
                        <p className="text-sm sm:text-base">1.1. Step Competition helps users live more active and healthier lives using advanced mobile internet technology. <br />1.2. The app and services collect, store, and analyze a variety of activity-related data, both on your mobile device and via cloud-based services. <br />1.3. Specific details about the services will be provided within the app.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">2. Information Collected</p>
                        <p className="text-sm sm:text-base">2.1. When you use Step Competition, we receive some personal information such as your device type and IP address. <br />2.2. Additional optional information includes daily step goal, steps taken, floors climbed, distance traveled, calorie profile (age, gender, height, weight), and login information from Apple, Google, or Facebook.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">3. Use of Your Data</p>
                        <p className="text-sm sm:text-base">3.1. We use the collected data to provide, improve, and personalize our services. <br />3.2. Aggregated user data may be used for research purposes to enhance our services.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">4. Data Security</p>
                        <p className="text-sm sm:text-base">4.1. We employ reasonable protections for your information that are appropriate to its sensitivity. <br />4.2. However, we cannot fully eliminate security risks associated with the storage and transmission of personal data.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">5. Data Retention</p>
                        <p className="text-sm sm:text-base">5.1. We keep your account information for as long as your account is active. <br />5.2. Activity data is retained until you delete the data or your account.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">6. Deleting Your Data</p>
                        <p className="text-sm sm:text-base">6.1. On Android, go to Settings &gt; Delete data to delete your account and data immediately. <br />6.2. On iPhone, after signing in, go to Settings &gt; Sign Out &gt;Delete account to delete your account and data immediately, then uninstall the app to delete local data.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">7. Ads</p>
                        <p className="text-sm sm:text-base">7.1. Step Competition displays ads through Google's ad network Google AdMob. <br />7.2. You may opt out of personalized ads within your device's settings. No ads will be shown after an in-app purchase.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">8. Social Sharing</p>
                        <p className="text-sm sm:text-base">8.1. If you use the social features of Step Competition, your activity data may be visible to your friends on the app. <br />8.2. You can stop sharing this data at any time by blocking friends or logging out of the app.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">9. Communication</p>
                        <p className="text-sm sm:text-base">9.1. We may use your contact information to send you updates about our services. <br />9.2. Promotional communications will include an opt-out option.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">10. Policy for Children</p>
                        <p className="text-sm sm:text-base">10.1. Step Competition's services are not directed at persons under the age of 13. <br />10.2. If you are under 13, please do not submit any personal data. If we discover data from a person under 13, we will delete it.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">11. Changes to this Policy</p>
                        <p className="text-sm sm:text-base">11.1. We reserve the right to change our Privacy Policy in the future without prior notice. <br />11.2. Any changes will be posted here.</p>
                    </div>
                    <div className="mb-6 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
                    <p className="mb-6 text-sm sm:text-base">By accessing and using the Step Competition app, you agree to these terms of service.</p>
                    <p className="text-sm sm:text-base">For further questions, contact us at zaydadnan08@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

export default TermsPage;
