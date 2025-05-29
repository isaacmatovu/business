import { MessageCircle, ArrowUp, TvMinimalPlay } from "lucide-react";

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
    </section>
  );
}
