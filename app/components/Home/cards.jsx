import { MessageSquare, User, ThumbsUp } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="w-full bg-white p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Green sidebar */}
        <div className="bg-gradient-to-b from-emerald-400 to-teal-600 p-8 rounded-lg text-white shadow-2xl">
          <p className="uppercase tracking-wider text-sm font-light mb-6">
            Our Services
          </p>
          <h2 className="text-3xl font-bold leading-tight">
            We Will Help Your Business Growing
          </h2>
        </div>

        {/* Service Cards */}
        <div className="group bg-white rounded-lg shadow-2xl p-6 flex flex-col hover:shadow-emerald-500 transition-all duration-300 hover:-translate-y-2">
          <div className="text-teal-500 mb-6 transition-transform duration-300 group-hover:rotate-180">
            <MessageSquare size={48} className="stroke-1" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Social Marketing
          </h3>
          <p className="text-gray-500">
            Social marketing is an approach used to develop activities aimed.
          </p>
        </div>

        <div className="group bg-white rounded-lg shadow-2xl p-6 flex flex-col hover:shadow-emerald-500 transition-all duration-300 hover:-translate-y-2">
          <div className="text-teal-500 mb-6 transition-transform duration-300 group-hover:rotate-180">
            <User size={48} className="stroke-1" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Business Ideas
          </h3>
          <p className="text-gray-500">
            Based on client needs, We will provide some good business solutions.
          </p>
        </div>

        <div className="group bg-white rounded-lg shadow-2xl p-6 flex flex-col hover:shadow-emerald-500 transition-all duration-300 hover:-translate-y-2">
          <div className="text-teal-500 mb-6 transition-transform duration-300 group-hover:rotate-180">
            <ThumbsUp size={48} className="stroke-1" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Development
          </h3>
          <p className="text-gray-500">
            Creating Your Own Website was Never That Easy. Come and Check it
            Out!
          </p>
        </div>
      </div>
    </div>
  );
}
