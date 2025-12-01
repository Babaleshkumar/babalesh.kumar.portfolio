import React from "react"
export default function SkillCard({ name, icon, highlighted = false }) {
  const base =
    "rounded-2xl p-6 flex flex-col items-center justify-center shadow-md transition-all duration-200";

  const normal =
    "bg-gray-800 text-gray-200 hover:bg-yellow-400 hover:text-gray-900 hover:-translate-y-1 hover:shadow-xl";

  const highlight =
    "bg-yellow-300 text-gray-900 hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-2xl";

  return (
    <div className={`${base} ${highlighted ? highlight : normal}`}>
      <div className="mb-3">{icon}</div>
      <div className="text-sm font-semibold">{name}</div>
    </div>
  );
}
