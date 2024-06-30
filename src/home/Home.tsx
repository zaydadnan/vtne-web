import React from "react";
import { Helmet } from "react-helmet-async";
import StoreSection from './StoreSection';
import AddFriend from './AddFriend';
import PhoneApp from './PhoneApp';
import Footer from './footer'


const HomePage: React.FC = () => {
    const fromUtm = hasUTMParameters();
    return (
        <div>
            <div className="max-w-screen-6xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
                <Helmet>
                    <title>Step Comp - make stepping fun</title>
                    <meta name="description" content="Sign up, add friends and start competing to become the step champion!" />
                    <link rel="canonical" href="https://stepcompetition.netlify.app" />
                </Helmet>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 space-y-5">
                    {!fromUtm &&
                        <div className='hidden md:block'>
                            <PhoneApp />
                        </div>
                    }
                    <StoreSection showExtra={!fromUtm} />
                    {fromUtm && <AddFriend />}
                    {!fromUtm &&
                        <div className='block md:hidden'>
                            <PhoneApp />
                        </div>
                    }
                </div>
            </div>
            <div className='align-bottom pb-20 pt-10 md:pt-0'>
                <Footer />
            </div>
        </div>);
};


function hasUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('name') && urlParams.has('username') && urlParams.has('function');
  }
  

export default HomePage;
