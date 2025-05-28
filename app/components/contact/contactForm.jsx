import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import image from "../../images/nurses.jpg";

export default function ContactInformation() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-8 flex justify-center items-center flex-col">
            <div className="space-y-4">
              <p className="text-teal-500 font-medium tracking-wider uppercase text-sm">
                SAY HELLO
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get in touch with us
              </h1>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">Call us now</p>
                  <p className="text-xl font-semibold text-gray-900">
                    +1 (818) 765 432 10
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">
                    Support email
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    xtra@yourbusiness.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">Our address</p>
                  <p className="text-xl font-semibold text-gray-900">
                    1234 King Street, New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form with background image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[500px]">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={image}
                alt="Contact form background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Form content */}
            <div className="relative z-10 bg-white/80 p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact us
              </h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 text-sm font-medium"
                  >
                    Your Name (required)
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full h-12 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm font-medium"
                  >
                    Your Email (required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full h-12 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 text-sm font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[120px] px-4 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
