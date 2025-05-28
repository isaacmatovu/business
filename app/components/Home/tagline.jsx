export default function Tagline() {
  return (
    <div>
      {/* Tagline */}
      <div
        className="absolute bottom-12 left-6 md:left-12 p-6 rounded-lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h2 className="text-emerald-500 font-medium tracking-widest uppercase">
          WE ARE EXPERT TEAM
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold max-w-2xs text-white">
          We create products that make people's{" "}
          <span className="text-emerald-800">lives</span> easier and better
        </h1>
      </div>
    </div>
  );
}
