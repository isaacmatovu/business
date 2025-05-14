import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  MessageCircle,
  ArrowUp,
  TvMinimalPlay,
} from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="bg-[#e8f5f5] h-[500px] flex flex-col items-center justify-center py-16 px-4 relative">
      {/* Image icon with navigation arrows */}
      <TvMinimalPlay className="h-20 w-20" />

      {/* Section title */}
      <div className="text-center mb-4">
        <h3 className="text-[#3aafa9] tracking-widest font-medium mb-6">
          PROJECTS WE DONE
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our recent creative projects
        </h2>
        <p className="text-[#4ecca3] text-lg">
          Let's check some of our perfect projects.
        </p>
      </div>

      {/* Chat button */}
      <div className="absolute bottom-8 left-8">
        <button className="bg-[#ffc107] w-14 h-14 rounded-full flex items-center justify-center shadow-md">
          <MessageCircle className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Back to top button */}
      <div className="absolute bottom-8 right-8">
        <button className="bg-[#4ecca3] w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
