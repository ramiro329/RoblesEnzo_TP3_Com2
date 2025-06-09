import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 flex flex-col items-center justify-center space-y-4">
      <h2 className="text-lg font-semibold mb-2">Mis redes sociales</h2>
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/enzoramirorobles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
            alt="Instagram"
            className="h-12 w-12 object-cover rounded-full transition duration-300 hover:opacity-80"
          />
        </a>
        <a
          href="https://wa.me/5493812345678"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="h-12 w-12 object-cover rounded-full transition duration-300 hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com/enzoramirorobles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="h-12 w-12 object-cover rounded-full transition duration-300 hover:opacity-80"
          />
        </a>
        <a
          href="https://www.facebook.com/enzoramirorobles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="h-12 w-12 object-cover rounded-full transition duration-300 hover:opacity-80"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
