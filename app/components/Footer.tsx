import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-pink-500">About Meesho</Link></li>
            <li><Link href="/team" className="hover:text-pink-500">Team</Link></li>
            <li><Link href="/careers" className="hover:text-pink-500">Careers</Link></li>
            <li><Link href="/press" className="hover:text-pink-500">Press</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-pink-500">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-pink-500">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-pink-500">Shipping & Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-pink-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/">
              <Image src="/playstore.jpeg" alt="Play Store" width={120} height={40} />
            </Link>
            <Link href="/">
              <Image src="/appstore.jpeg" alt="App Store" width={120} height={40} />
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <Link href="/" className="hover:text-pink-500"><FaFacebookF size={20} /></Link>
            <Link href="/" className="hover:text-pink-500"><FaInstagram size={20} /></Link>
            <Link href="/" className="hover:text-pink-500"><FaTwitter size={20} /></Link>
            <Link href="/" className="hover:text-pink-500"><FaYoutube size={20} /></Link>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-6"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Meesho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
