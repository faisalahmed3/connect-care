import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        
        <div className="flex justify-center gap-6 mb-4 font-medium">
          <a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-600">Contact Us</a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} ConnectCare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
