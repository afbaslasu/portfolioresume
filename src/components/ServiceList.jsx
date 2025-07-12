// src/components/ServiceList.jsx
import { usePureCounter } from "../hooks/usePureCounter";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  { id: 1, icon: FaCheckCircle, title: "Web Development", count: 150 },
  { id: 2, icon: FaCheckCircle, title: "App Development", count: 120 },
  { id: 3, icon: FaCheckCircle, title: "UI/UX Design", count: 100 },
];

export default function ServiceList() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc) => {
          const Icon = svc.icon;
          const count = usePureCounter(svc.count, 2);
          return (
            <div
              key={svc.id}
              className="text-center p-6 border rounded-lg hover:shadow-md transition"
            >
              <Icon className="text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-xl font-bold text-blue-600">{count}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
