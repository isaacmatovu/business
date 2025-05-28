import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Download,
} from "lucide-react";
import { GiDoubleDragon } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#edf4f7] py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo and Description Section */}
          <div className="md:w-1/4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12">
                <GiDoubleDragon className="h-16 w-16 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">XTRA</h2>
                <p className="text-gray-600">BUSINESS</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              A company is any entity that engages in business. Companies can be
              structured in different ways. For example, your company can be a
              sole proprietorship, a partnership, or a corporation.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Useful Links */}
            <div>
              <div className="mb-6">
                <h3 className="text-gray-400 font-medium mb-2">USEFUL LINKS</h3>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-[#4eca78] mr-2"></div>
                  <div className="h-px flex-grow bg-gray-300"></div>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    About Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Forums
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Latest Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Access */}
            <div>
              <div className="mb-6">
                <h3 className="text-gray-400 font-medium mb-2">QUICK ACCESS</h3>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-[#4eca78] mr-2"></div>
                  <div className="h-px flex-grow bg-gray-300"></div>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Support Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <div className="mb-6">
                <h3 className="text-gray-400 font-medium mb-2">MORE LINKS</h3>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-[#4eca78] mr-2"></div>
                  <div className="h-px flex-grow bg-gray-300"></div>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Office
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-gray-600 hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Who We Are?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Button - Positioned Absolutely */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <Link href="#" className="text-gray-400 hover:text-[#4eca78]">
            <Download size={24} />
            <span className="sr-only">Download</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
