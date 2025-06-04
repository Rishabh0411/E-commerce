import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: '#540303', color: 'white' }}>
      <div className="container text-center">
        {/* Quick Links Section */}
        <div className="mb-3">
          <a href="/" className="text-white text-decoration-none mx-2">Home</a>
          <a href="#shop" className="text-white text-decoration-none mx-2">Shop</a>
          <a href="/about" className="text-white text-decoration-none mx-2">About</a>
          <a href="/contact" className="text-white text-decoration-none mx-2">Contact</a>
        </div>

        {/* Social Media Icons Section */}
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="small mb-0">&copy; {new Date().getFullYear()} EasyShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
