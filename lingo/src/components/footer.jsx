import { Globe, ChevronDown, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0a4a82] py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">About</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-[#1cb0f6]">Our Story</Link></li>
                            <li><Link to="/careers" className="hover:text-[#1cb0f6]">Careers</Link></li>
                            <li><Link to="/mission" className="hover:text-[#1cb0f6]">Mission</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><Link to="/lingo" className="hover:text-[#1cb0f6]">Lingo</Link></li>
                            <li><Link to="/lingo-plus" className="hover:text-[#1cb0f6]">Lingo Plus</Link></li>
                            <li><Link to="/schools" className="hover:text-[#1cb0f6]">Lingo for Schools</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Help and Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" className="hover:text-[#1cb0f6]">FAQ</Link></li>
                            <li><Link to="/community" className="hover:text-[#1cb0f6]">Community Guidelines</Link></li>
                            <li><Link to="/contact" className="hover:text-[#1cb0f6]">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to="#" className="hover:text-[#1cb0f6]"><Facebook className="h-6 w-6" /></Link>
                            <Link to="#" className="hover:text-[#1cb0f6]"><Twitter className="h-6 w-6" /></Link>
                            <Link to="#" className="hover:text-[#1cb0f6]"><Instagram className="h-6 w-6" /></Link>
                        </div>
                        <div className="mt-4">
                            <button className="flex items-center space-x-2 bg-[#1cb0f6] text-white px-4 py-2 rounded hover:bg-[#235390]">
                                <Globe className="h-5 w-5" />
                                <span>Language</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#1cb0f6] text-center text-sm">
                    <p>&copy; 2024 Lingo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;