import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="flex justify-center items-center space-x-9">
        <p className="text-xl">&copy; 2024 RenderIT. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/muskan-akhtar-a7b7722b6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 text-xl"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muskan-akhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 text-xl"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
