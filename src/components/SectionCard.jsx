// src/components/SectionCard.jsx
import { Link } from "react-router-dom";
export default function SectionCard({ title, to }) {
  return (
    <Link
      to={to}
      className="block p-6 border rounded-xl hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        View details about {title.toLowerCase()}.
      </p>
    </Link>
  );
}
