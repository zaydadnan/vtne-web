import React from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section>
            <Helmet>
                <title>Waddle - make stepping fun</title>
                <meta name="description" content="Sign up, add friends and start competing to become the step champion!" />
                <link rel="canonical" href="https://joinwaddle.netlify.app" />
            </Helmet>
            <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
                <div className="flex max-w-3xl flex-col py-16 md:py-24 lg:py-32">
                    <div className="flex flex-row items-center gap-4 py-10">
                        <FaArrowLeft className="text-3xl md:text-5xl hover:text-[#9e67f7]" onClick={() => { navigate('/') }} />
                        <h1 className="text-3xl font-bold md:text-5xl">Privacy Policy</h1>
                    </div>
                    <p className="mb-5 text-sm font-bold sm:text-base">Last updated as of August 7, 2023</p>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="text-sm sm:text-base">Waddle's goal is to help users live more active and healthier lives using advanced mobile internet technology. To that end, our applications and services collect, store, and analyze a variety of activity-related data, both on your mobile device and via cloud-based services.</p>
                        <p className="text-sm sm:text-base">When you use Waddle, we receive some personal information from you like the type of device you’re using and your IP address. You can choose to share additional information, for example, to help us monitor the performance of your installed app or to allow our service to send you push notifications from time to time. We give you control through your settings to limit the data we collect from you and how we use it. You can also always download the personal information related to you on Waddle.</p>
                        <p className="text-sm sm:text-base">This statement is intended to clearly explain in human-readable language what data we collect and how it is used. If after reading this statement you have further questions, please contact us at contact@stepcompetition.com.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Information Collected</p>
                        <p className="text-sm sm:text-base">When you choose to share the information below with us, we may collect the following types of information in order to provide services:</p>
                        <ul className="list-disc ml-5 text-sm sm:text-base">
                            <li>Activity related data: daily step goal, steps taken, floors climbed (iOS only), distance traveled</li>
                            <li>Calorie Profile (optional): age, gender, height, weight (used to calculate calories burnt)</li>
                            <li>Facebook Login (optional): Profile info, friend list, email address</li>
                            <li>Google Login (optional): Name, email address, profile photo</li>
                            <li>Apple Login (optional): Name, email address</li>
                            <li>Your friends on Waddle (optional)</li>
                        </ul>
                        <p className="text-sm sm:text-base">None of this data is shared publicly outside of the Waddle app.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Limited Use Policy</p>
                        <p className="text-sm sm:text-base">Waddle's use and transfer of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Login Credentials</p>
                        <p className="text-sm sm:text-base">When creating a Waddle account you can use an identity from Apple, Google, or Facebook. Waddle will not have access to any of your login credentials (e.g. username or password) from these login services and will only have access to a token. A token is an identifier created by the login provider for Waddle to use for the purpose of identifying you on their systems.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Public Information</p>
                        <p className="text-sm sm:text-base">The information you provide Waddle is not available publicly. Only individuals with a Waddle account who you explicitly connect with using the Waddle service (by adding them as a friend or joining a group with them) can see your profile name, photo, and daily steps. You can leave any group or block/hide/unfriend anyone at any time to stop sharing information with them.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Access to Device’s Health Services</p>
                        <p className="text-sm sm:text-base">In order to track the steps you take, Waddle uses the Health Services provided by the mobile device on which the Waddle app is installed.</p>
                        <p className="text-sm sm:text-base">For iOS you will be asked for permission for us to access your motion data or Apple Health. This provides the Waddle app access to the following information provided by your iOS Device:</p>
                        <ul className="list-disc ml-5 text-sm sm:text-base">
                            <li>Steps, distance travelled, floors climbed</li>
                        </ul>
                        <p className="text-sm sm:text-base">For Android you will be asked for permission to access Google Fit. This provides the Waddle app access to the following information provided by your Android Device:</p>
                        <ul className="list-disc ml-5 text-sm sm:text-base">
                            <li>Steps, distance travelled, floors climbed</li>
                        </ul>
                        <p className="text-sm sm:text-base">This data is not shared publicly but we use it to display to those Waddle users who you have invited to connect to you or those who’s invitation to connect you have accepted.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Analytics Information</p>
                        <p className="text-sm sm:text-base">We use Google Analytics for Firebase to understand the usage of Waddle in order to improve our product for users. A list of data captured by default by Google Analytics for Firebase can be found here.</p>
                        <p className="text-sm sm:text-base">In addition, we capture anonymized data to improve app usability about usage events like Install, SignUp, SetDailyGoal, InviteFriend, Cheer, Taunt, Nudge, AddFriend, HideFriend, SeeFriendDetail, SeeHistory, SeeAlerts, EnabledNotifications etc.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Use of Your Data</p>
                        <p className="text-sm sm:text-base">We use analytics tools to track in-app behavior anonymously for the purpose of informing future product improvements and creating a better Waddle experience. Examples of in-app behavior include frequency of use, user retention, and in-app page views.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Aggregated User Data Research</p>
                        <p className="text-sm sm:text-base">We may conduct research about our users' behavior and demographics based on the information provided through the use of our services, for the purposes of improving our services. Such research will only compile user data in aggregated, de-identified statistics. We may share these statistics with affiliates and business partners. This information will NEVER identify you personally.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Data Security</p>
                        <p className="text-sm sm:text-base">We employ reasonable protections for your information that are appropriate to its sensitivity. The Services use industry-standard Secure Sockets Layer (SSL) technology to allow for the encryption of personal information. Please be advised, however, that we cannot fully eliminate security risks associated with the storage and transmission of Personal Data.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Data Retention</p>
                        <p className="text-sm sm:text-base">We keep your account information, like your name, and email address for as long as your account is in existence because we need it to operate your account. We keep other information, like your activity data, until you delete the data or your account because we use this data to provide you with our Services. We also keep information about you and your use of the Services for as long as necessary for our legitimate business interests, for legal reasons, and to prevent harm.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Deleting Your Data</p>
                        <p className="text-sm sm:text-base">On Android app:</p>
                        <p className="text-sm sm:text-base">Go to Settings &gt; Delete data to delete your account and data immediately.</p>
                        <p className="text-sm sm:text-base">On iPhone app:</p>
                        <p className="text-sm sm:text-base">If you haven't signed in to Waddle, no account has been created and you can simply uninstall the app to delete your data.</p>
                        <p className="text-sm sm:text-base">If you have signed in to Waddle, then after signing in, go to Settings &gt; Sign Out &gt; Delete account to delete your account and data immediately. Then uninstall the app to delete local data if you'd like.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Ads</p>
                        <p className="text-sm sm:text-base">Waddle displays ads within our app through Google's third party ad network Google AdMob. Your consent for showing personalized ads within our app is requested before we start showing you ads, which is optional. You may also opt out of personalized advertising entirely within the operating system settings of your mobile device. If you make an in-app purchase, you are not shown any ads anymore, and are therefore opted out of personalized advertising entirely.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Social Sharing</p>
                        <p className="text-sm sm:text-base">If you choose to use the social features of Waddle, your daily activity data may be visible to your friends on Waddle. By using this feature of our services you consent to sharing this information. You can choose to stop sharing data with your friends on Waddle at any time by blocking friends that you don't want to share your step data with. You can choose to stop sharing daily step data with all your friends on Waddle by logging out of Waddle.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Communication</p>
                        <p className="text-sm sm:text-base">If you choose to share contact information with us (such as an email address), we may use this information to send you updates about our services from time to time. If this information is promotional in nature, we will provide an opt-out option.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Policy for Children</p>
                        <p className="text-sm sm:text-base">Waddle’s services are not directed at persons under the age of 13. We do not knowingly collect any personal data from children under the age of 13. If you are under the age of 13, we ask that you do not submit any personal data through our services. If you are aware of a person under the age of 13 who has submitted personal information to our services, please report it to us so we can delete this data.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">Changes to this Policy</p>
                        <p className="text-sm sm:text-base">We reserve the right to change our Privacy Policy in the future without prior notice. The services we offer are likely to change, and in the future, it is therefore likely that our Privacy Policy will also need to be revised accordingly. Any changes to our privacy policy will be posted here.</p>
                    </div>
                    <div className="mb-6 flex flex-col items-start gap-y-3">
                        <p className="font-bold uppercase sm:text-base">More Information</p>
                        <p className="text-sm sm:text-base">Contact us at zaydadnan08@gmail.com if you have further questions or concerns about your data.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;
