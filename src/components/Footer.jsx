const Footer = () => (
  <footer className="bg-stone-950 text-white p-8 shadow-inner">
    {/* Font Awesome CDN for social icons */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlroXzVz3qF6z1B6X02O1+6RzP/6aKzFjF+Tq7L+hR6mHhB7/y05P+I8fQ9/QyM5V5Q7fQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Dance Studio Core. All rights reserved.</p>
      <div className="flex justify-center space-x-6 text-2xl">
        {/* Facebook Icon */}
        <a href="https://www.facebook.com/share/1Gb77cwMaG" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300">
          <i className="fab fa-facebook"></i>
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/jayaruwan.official?igsh=YmR6aHN6NWs0cTlq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
        {/* TikTok Icon */}
        <a href="https://www.tiktok.com/@_jayaruwan_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition duration-300">
          <i className="fab fa-tiktok"></i>
        </a>
        {/* YouTube Icon */}
        <a href="https://www.youtube.com/@studiodancecore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition duration-300">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <div className="container mx-auto text-center">
      <br className="my-4 border-t border-gray-700" />
      <p className="mb-4">Developed By <a href="">Elements</a></p>
    </div>
  </footer>
);

export default Footer;