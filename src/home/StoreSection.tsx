import React from "react";
import { useState } from "react";
import penguin from '../assets/penguin.gif';
import logo from '../assets/applogo.png';
import { store } from "../Firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import waddle from '../assets/waddle.png';

interface StoreSectionProps {
    fromUtm: boolean;
}

const StoreSection: React.FC<StoreSectionProps> = ({ fromUtm }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleJoinClick = async () => {
        console.log(`Email to join: ${email}`);

        if (email === '' || email.includes("@") === false || email.includes(".") === false) {
            alert("Please enter a valid email address")
            return;
        }
        const emailRef = doc(store, `emails/${email}`);
        const data = { email: `${email}` };
        try {
            await setDoc(emailRef, data);
            console.log("email successfully written!");
            alert(`${email} successfully added to the waitlist!`);
        } catch (e) {
            console.error("Error writing document for username: ", e);
        }
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center">


            <img src={penguin} className="App-logo" alt="logo" />

            <div className="flex flex-row gap-4 items-center justify-center mt-[-24]">
                <div className="rounded-xl border border-black border-1">
                    <img src={waddle} className="h-20 w-20 rounded-xl" alt="logo" />
                </div>
                <div className="pt-8">
                    <h1 className="text-4xl text-slate-800 font-bold mt-[-30px]"> Waddle.</h1>
                    <h3 className="text-2xl text-slate-800 font-semibold"> The fun stepping app </h3>
                </div>
            </div>

            {/* <h1 className="text-4xl text-slate-800 font-bold mt-[-30px]"> Waddle.</h1>
            <h3 className="text-2xl text-slate-800 font-semibold"> The fun stepping app </h3> */}


            {/* <a className="justify-center py-5" href="https://apps.apple.com/us/app/voidpet/id1668932264?itsct=apps_box_badge&amp;itscg=30200"><svg width="180" height="53.333" viewBox="0, 0, 238, 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#app-store-button_svg__a)"><path d="M219.047 0H18.964c-.73 0-1.45 0-2.178.004-.609.004-1.213.016-1.828.026a26.14 26.14 0 0 0-3.985.353c-1.316.224-2.59.647-3.78 1.254a12.808 12.808 0 0 0-3.22 2.357c-.95.948-1.74 2.042-2.343 3.243a13.254 13.254 0 0 0-1.243 3.806 26.127 26.127 0 0 0-.357 4.004C.012 15.66.01 16.276 0 16.89v46.228c.01.622.012 1.223.03 1.844.016 1.342.135 2.68.357 4.004.218 1.326.637 2.61 1.243 3.809a12.413 12.413 0 0 0 2.343 3.228c.94.954 2.028 1.75 3.22 2.358a13.276 13.276 0 0 0 3.78 1.261c1.318.218 2.65.336 3.986.354.614.014 1.218.021 1.827.021.728.004 1.448.004 2.177.004h200.084c.715 0 1.441 0 2.156-.004.606 0 1.228-.007 1.834-.021a26.29 26.29 0 0 0 3.978-.354c1.32-.229 2.599-.654 3.795-1.261a12.499 12.499 0 0 0 3.216-2.358 12.784 12.784 0 0 0 2.35-3.228 13.264 13.264 0 0 0 1.232-3.809c.221-1.324.345-2.662.369-4.004.007-.62.007-1.222.007-1.843.016-.727.016-1.45.016-2.188V19.073c0-.733 0-1.46-.016-2.184 0-.613 0-1.229-.007-1.842a27.276 27.276 0 0 0-.369-4.004 13.315 13.315 0 0 0-1.232-3.806 12.892 12.892 0 0 0-5.566-5.6 13.407 13.407 0 0 0-3.795-1.254 25.806 25.806 0 0 0-3.978-.354c-.606-.01-1.228-.021-1.834-.025C220.488 0 219.762 0 219.047 0Z" fill="#A6A6A6"></path><path d="M16.796 78.25c-.606 0-1.197-.008-1.799-.021a25.1 25.1 0 0 1-3.717-.327 11.656 11.656 0 0 1-3.295-1.095 10.756 10.756 0 0 1-2.779-2.034 10.64 10.64 0 0 1-2.03-2.793 11.488 11.488 0 0 1-1.08-3.314 24.962 24.962 0 0 1-.33-3.75c-.013-.422-.03-1.826-.03-1.826V16.889s.018-1.383.03-1.79c.015-1.254.125-2.506.329-3.744.19-1.157.554-2.277 1.08-3.324.52-1.035 1.201-1.98 2.02-2.796A11.072 11.072 0 0 1 7.984 3.19a11.537 11.537 0 0 1 3.288-1.087 24.896 24.896 0 0 1 3.73-.329l1.795-.024h204.396l1.816.025c1.239.015 2.474.124 3.697.326 1.155.197 2.275.566 3.323 1.095a11.154 11.154 0 0 1 4.803 4.84c.518 1.04.877 2.151 1.065 3.298.206 1.248.321 2.51.345 3.774.006.567.006 1.175.006 1.78.016.75.016 1.464.016 2.184V60.93c0 .726 0 1.435-.016 2.15 0 .65 0 1.246-.008 1.86a25.586 25.586 0 0 1-.34 3.706 11.512 11.512 0 0 1-1.074 3.34 10.954 10.954 0 0 1-2.02 2.772 10.757 10.757 0 0 1-2.783 2.045 11.618 11.618 0 0 1-3.317 1.1c-1.23.201-2.472.31-3.718.326-.583.013-1.193.021-1.785.021l-2.156.004-202.251-.004Z" fill="#000"></path><path d="M49.263 40.601a9.939 9.939 0 0 1 1.282-4.758 9.873 9.873 0 0 1 3.405-3.546 10.093 10.093 0 0 0-3.462-3.101 10.03 10.03 0 0 0-4.476-1.214c-3.34-.353-6.578 2.01-8.28 2.01-1.735 0-4.355-1.975-7.177-1.917-1.825.06-3.604.593-5.163 1.55a10.603 10.603 0 0 0-3.733 3.906c-3.846 6.697-.977 16.539 2.707 21.952 1.844 2.65 3.998 5.612 6.818 5.507 2.758-.115 3.789-1.77 7.119-1.77 3.299 0 4.265 1.77 7.142 1.703 2.96-.048 4.825-2.663 6.604-5.338a21.97 21.97 0 0 0 3.02-6.185 9.524 9.524 0 0 1-4.22-3.52 9.602 9.602 0 0 1-1.586-5.279ZM43.83 24.422a9.781 9.781 0 0 0 2.217-6.982 9.843 9.843 0 0 0-6.38 3.32 9.32 9.32 0 0 0-2.275 6.723 8.114 8.114 0 0 0 3.569-.787 8.16 8.16 0 0 0 2.869-2.274ZM84.135 54.28h-9.414l-2.261 6.712h-3.988l8.918-24.836h4.142l8.917 24.836h-4.055l-2.259-6.713Zm-8.44-3.098h7.463L79.48 40.287h-.104l-3.68 10.895ZM109.707 51.94c0 5.626-2.995 9.242-7.515 9.242a6.076 6.076 0 0 1-3.285-.766 6.122 6.122 0 0 1-2.38-2.402h-.086v8.968h-3.696V42.885h3.578v3.012h.068a6.404 6.404 0 0 1 2.427-2.398 6.358 6.358 0 0 1 3.306-.804c4.571 0 7.583 3.633 7.583 9.245Zm-3.799 0c0-3.666-1.884-6.077-4.759-6.077-2.824 0-4.723 2.461-4.723 6.077 0 3.648 1.9 6.091 4.723 6.091 2.875 0 4.759-2.392 4.759-6.091ZM129.526 51.94c0 5.626-2.995 9.242-7.514 9.242a6.077 6.077 0 0 1-3.286-.766 6.12 6.12 0 0 1-2.38-2.402h-.086v8.968h-3.696V42.885h3.578v3.012h.068a6.404 6.404 0 0 1 2.427-2.398 6.36 6.36 0 0 1 3.307-.804c4.57 0 7.582 3.633 7.582 9.245Zm-3.799 0c0-3.666-1.884-6.077-4.758-6.077-2.825 0-4.724 2.461-4.724 6.077 0 3.648 1.899 6.091 4.724 6.091 2.874 0 4.758-2.392 4.758-6.091ZM142.625 54.072c.274 2.463 2.653 4.08 5.905 4.08 3.115 0 5.356-1.617 5.356-3.838 0-1.927-1.351-3.082-4.552-3.873l-3.201-.775c-4.535-1.102-6.641-3.234-6.641-6.695 0-4.286 3.714-7.229 8.987-7.229 5.219 0 8.797 2.943 8.917 7.229h-3.731c-.223-2.479-2.261-3.975-5.238-3.975-2.978 0-5.015 1.514-5.015 3.717 0 1.756 1.301 2.789 4.484 3.58l2.721.672c5.068 1.205 7.173 3.252 7.173 6.884 0 4.647-3.68 7.557-9.534 7.557-5.478 0-9.176-2.842-9.415-7.334h3.784ZM165.767 38.6v4.285h3.425v2.943h-3.425v9.982c0 1.551.686 2.274 2.191 2.274.407-.007.813-.036 1.216-.086v2.926a10.1 10.1 0 0 1-2.053.172c-3.646 0-5.067-1.377-5.067-4.889V45.828h-2.618v-2.943h2.618V38.6h3.713ZM171.175 51.94c0-5.698 3.337-9.278 8.54-9.278 5.221 0 8.542 3.58 8.542 9.278 0 5.712-3.304 9.277-8.542 9.277-5.236 0-8.54-3.565-8.54-9.277Zm13.316 0c0-3.909-1.781-6.215-4.776-6.215s-4.774 2.324-4.774 6.215c0 3.923 1.779 6.212 4.774 6.212s4.776-2.289 4.776-6.212ZM191.305 42.885h3.525v3.082h.085c.239-.963.8-1.813 1.588-2.41a4.28 4.28 0 0 1 2.744-.862c.426-.001.85.045 1.266.139v3.476a5.144 5.144 0 0 0-1.661-.224 3.705 3.705 0 0 0-2.878 1.192 3.751 3.751 0 0 0-.973 2.974v10.74h-3.696V42.885ZM217.555 55.674c-.498 3.287-3.681 5.543-7.754 5.543-5.238 0-8.49-3.53-8.49-9.192 0-5.68 3.269-9.363 8.335-9.363 4.982 0 8.114 3.441 8.114 8.932v1.273h-12.718v.225a4.755 4.755 0 0 0 .244 1.97 4.689 4.689 0 0 0 4.6 3.16 4.058 4.058 0 0 0 2.5-.581 4.091 4.091 0 0 0 1.659-1.967h3.51ZM205.06 50.27h9.002A4.352 4.352 0 0 0 211.387 46a4.31 4.31 0 0 0-1.741-.327 4.538 4.538 0 0 0-3.246 1.337 4.588 4.588 0 0 0-1.34 3.258ZM75.233 17.462a5.223 5.223 0 0 1 4.187 1.636 5.286 5.286 0 0 1 1.397 4.294c0 3.812-2.05 6.004-5.584 6.004h-4.287V17.462h4.287Zm-2.444 10.246h2.238a3.712 3.712 0 0 0 2.972-1.21 3.756 3.756 0 0 0 .941-3.082 3.782 3.782 0 0 0-.956-3.062 3.741 3.741 0 0 0-2.957-1.206h-2.238v8.56ZM82.899 24.889a4.288 4.288 0 0 1 1.084-3.276 4.244 4.244 0 0 1 3.14-1.397 4.224 4.224 0 0 1 3.139 1.397 4.271 4.271 0 0 1 1.084 3.276 4.291 4.291 0 0 1-1.081 3.28 4.246 4.246 0 0 1-3.143 1.4 4.223 4.223 0 0 1-3.142-1.4 4.274 4.274 0 0 1-1.081-3.28Zm6.629 0c0-1.953-.872-3.094-2.403-3.094-1.536 0-2.4 1.141-2.4 3.094 0 1.968.864 3.1 2.4 3.1 1.53 0 2.403-1.14 2.403-3.1ZM102.574 29.395h-1.833l-1.851-6.632h-.14l-1.844 6.632H95.09l-2.468-9.005h1.793l1.604 6.872h.132l1.841-6.872h1.696l1.841 6.872h.14l1.597-6.872h1.767l-2.459 9.005ZM107.109 20.39h1.702v1.43h.132a2.691 2.691 0 0 1 1.081-1.232 2.667 2.667 0 0 1 1.591-.372 2.902 2.902 0 0 1 2.351.925 2.935 2.935 0 0 1 .749 2.424v5.83h-1.767v-5.383c0-1.448-.626-2.167-1.933-2.167a2.046 2.046 0 0 0-1.591.647 2.062 2.062 0 0 0-.451.757 2.059 2.059 0 0 0-.096.878v5.268h-1.768V20.39ZM117.532 16.874h1.767v12.521h-1.767V16.874ZM121.756 24.889a4.288 4.288 0 0 1 1.084-3.276 4.226 4.226 0 0 1 6.28 0 4.288 4.288 0 0 1 1.084 3.276 4.284 4.284 0 0 1-1.081 3.281 4.23 4.23 0 0 1-6.286 0 4.281 4.281 0 0 1-1.081-3.281Zm6.629 0c0-1.953-.872-3.094-2.402-3.094-1.537 0-2.401 1.141-2.401 3.094 0 1.968.864 3.1 2.401 3.1 1.53 0 2.402-1.14 2.402-3.1ZM132.065 26.849c0-1.622 1.2-2.556 3.331-2.689l2.426-.14v-.778c0-.951-.626-1.488-1.834-1.488-.986 0-1.67.364-1.866 1h-1.711c.18-1.546 1.627-2.538 3.659-2.538 2.245 0 3.511 1.124 3.511 3.026v6.153h-1.701V28.13h-.14a3.018 3.018 0 0 1-2.69 1.414 2.688 2.688 0 0 1-2.087-.682 2.72 2.72 0 0 1-.898-2.014Zm5.757-.77v-.753l-2.187.14c-1.234.084-1.793.506-1.793 1.3 0 .81.699 1.282 1.661 1.282a2.103 2.103 0 0 0 2.096-1.153c.128-.255.204-.532.223-.816ZM141.904 24.889c0-2.846 1.455-4.649 3.718-4.649a2.954 2.954 0 0 1 2.746 1.58h.132v-4.946h1.768v12.521h-1.694v-1.422h-.14a3.11 3.11 0 0 1-2.812 1.57c-2.278.001-3.718-1.802-3.718-4.654Zm1.826 0c0 1.91.896 3.06 2.393 3.06 1.49 0 2.411-1.167 2.411-3.053 0-1.877-.931-3.06-2.411-3.06-1.488 0-2.393 1.158-2.393 3.053ZM157.581 24.889a4.287 4.287 0 0 1 1.083-3.276 4.227 4.227 0 0 1 6.28 0 4.286 4.286 0 0 1 1.084 3.276 4.299 4.299 0 0 1-1.081 3.28 4.227 4.227 0 0 1-6.286 0 4.281 4.281 0 0 1-1.08-3.28Zm6.629 0c0-1.953-.872-3.094-2.403-3.094-1.536 0-2.401 1.141-2.401 3.094 0 1.968.865 3.1 2.401 3.1 1.531 0 2.403-1.14 2.403-3.1ZM168.399 20.39h1.702v1.43h.132a2.691 2.691 0 0 1 1.081-1.232 2.667 2.667 0 0 1 1.591-.372 2.902 2.902 0 0 1 2.351.925 2.94 2.94 0 0 1 .749 2.424v5.83h-1.767v-5.383c0-1.448-.626-2.167-1.933-2.167a2.046 2.046 0 0 0-1.591.647 2.062 2.062 0 0 0-.451.757 2.059 2.059 0 0 0-.096.878v5.268h-1.768V20.39ZM185.992 18.148v2.283h1.941v1.497h-1.941v4.63c0 .944.387 1.357 1.267 1.357.225 0 .45-.014.674-.041v1.48a5.77 5.77 0 0 1-.962.091c-1.965 0-2.748-.695-2.748-2.431v-5.086h-1.422V20.43h1.422v-2.284h1.769ZM190.347 16.874h1.752v4.963h.14a2.765 2.765 0 0 1 1.112-1.24 2.743 2.743 0 0 1 1.619-.373 2.938 2.938 0 0 1 2.327.949 2.966 2.966 0 0 1 .757 2.408v5.814h-1.769V24.02c0-1.439-.667-2.168-1.915-2.168a2.084 2.084 0 0 0-1.656.615 2.108 2.108 0 0 0-.599 1.669v5.26h-1.768V16.873ZM208.36 26.964a3.656 3.656 0 0 1-1.47 2.011 3.62 3.62 0 0 1-2.411.594 4.047 4.047 0 0 1-3.139-1.36 4.113 4.113 0 0 1-.998-3.288 4.17 4.17 0 0 1 .997-3.3 4.115 4.115 0 0 1 3.132-1.405c2.492 0 3.996 1.712 3.996 4.54v.62h-6.324v.1a2.381 2.381 0 0 0 1.425 2.387c.303.13.63.196.96.193a2.136 2.136 0 0 0 2.13-1.092h1.702Zm-6.218-2.902h4.524a2.195 2.195 0 0 0-.588-1.658 2.168 2.168 0 0 0-1.616-.675 2.283 2.283 0 0 0-2.151 1.435c-.115.285-.173.59-.169.897Z" fill="#fff"></path></g><defs><clipPath id="app-store-button_svg__a"><path fill="#fff" d="M0 0h238v80H0z"></path></clipPath></defs></svg></a> */}

            {!fromUtm &&
                <div className="mt-8 mb-0 flex items-center rounded-md border border-gray-300">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        className="px-4 py-2  text-slate-800 rounded-md focus:outline-none w-full lg:w-96"
                    />
                    <button
                        onClick={handleJoinClick}
                        className="px-6 py-2 bg-black text-white rounded-r-md hover:bg-slate-700"
                    >
                        Join Waitlist
                    </button>
                </div>
            }

            {!fromUtm && <div className="text-2xl text-slate-800 font-semibold mt-8 items-center text-center">
                <div>The best way to track your steps and compete with friends.</div>
            </div>
            }
        </div>
    );
};

export default StoreSection;
