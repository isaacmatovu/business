import { Lightbulb, MessageSquare, ThumbsUp } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Creative Ideas */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <Lightbulb className="w-12 h-12 text-teal-600 stroke-[1.5]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Creative Ideas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis odio
              nisl, tincidunt eturm sed mollis velit.
            </p>
          </div>

          {/* Conversations */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <MessageSquare className="w-12 h-12 text-teal-600 stroke-[1.5]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conversations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis odio
              nisl, tincidunt eturm sed mollis velit.
            </p>
          </div>

          {/* Make it Possible */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <ThumbsUp className="w-12 h-12 text-teal-600 stroke-[1.5]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Make it Possible
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis odio
              nisl, tincidunt eturm sed mollis velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
