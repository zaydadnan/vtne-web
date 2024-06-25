import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="block">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex-col flex items-center">
          <div className="text-center font-semibold">
            <a href="/terms" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#9e67f7]">
              Terms of Service
            </a>
            <a href="/privacy" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#9e67f7]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
