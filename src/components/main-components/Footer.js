import React from 'react';

const Footer = () => {
    return (
        <footer
            className={` w-full bg-3 text-[white] pt-12 pb-8 px-6 mt-[200px]`}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">GadgetGeek</h2>
                    <p className="text-sm leading-relaxed text-gray-400">
                        GadgetGeek is your trusted platform for high-quality sound
                        processing, audio enhancement, and creative music tools.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-white">About Us</a></li>
                        <li><a href="#careers" className="hover:text-white">Careers</a></li>
                        <li><a href="#blog" className="hover:text-white">Blog</a></li>
                        <li><a href="#press" className="hover:text-white">Press</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#docs" className="hover:text-white">Documentation</a></li>
                        <li><a href="#support" className="hover:text-white">Support</a></li>
                        <li><a href="#tutorials" className="hover:text-white">Tutorials</a></li>
                        <li><a href="#api" className="hover:text-white">API Reference</a></li>
                    </ul>
                </div>

                {/* Legal & Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="#cookies" className="hover:text-white">Cookie Policy</a></li>
                    </ul>
                    <h3 className="text-lg font-semibold text-white mt-6 mb-4">Contact</h3>
                    <p className="text-sm text-gray-400">support@gadgetgeek.com</p>
                    <p className="text-sm text-gray-400">+8801823323854</p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} GadgetGeek · Zubayer. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#twitter" className="hover:text-white">Twitter</a>
                    <a href="#linkedin" className="hover:text-white">LinkedIn</a>
                    <a href="#github" className="hover:text-white">GitHub</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;