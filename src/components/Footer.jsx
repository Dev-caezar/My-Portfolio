import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-[#05030a] border-t border-purple-900/20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-600">
          © {year} Oko Christian. All rights reserved.
        </p>
        {/* <div className="mt-4 flex justify-center gap-6">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-900/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-900/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-900/50" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
