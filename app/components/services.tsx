"use client";

import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { services } from "@/data/services";
import { getLatestProjectForCategory } from "../../lib/utils/getProjectForService";
import { useState, useRef } from "react";

export default function Services() {
  const serviceT = useScopedI18n("service");
  const locale = useCurrentLocale();
  const [mousePosition, setMousePosition] = useState<{
    [key: string]: { rotateX: number; rotateY: number };
  }>({});
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    serviceId: string
  ) => {
    const element = serviceRefs.current[serviceId];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const rotateY = (e.clientX - rect.left - rect.width / 2) / 100;
    const rotateX = -(e.clientY - rect.top - rect.height / 2) / 60;

    setMousePosition((prev) => ({
      ...prev,
      [serviceId]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (serviceId: string) => {
    setMousePosition((prev) => ({
      ...prev,
      [serviceId]: { x: 0, y: 0, rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <section className="container">
      <h2>{serviceT("title")}</h2>
      <div>
        {services.map((service) => {
          const project = getLatestProjectForCategory(service.category);
          const position = mousePosition[service.id] || {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
          };

          return (
            <div
              className="service"
              key={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, String(service.id))}
              onMouseLeave={() => handleMouseLeave(String(service.id))}
            >
              <h3>{service.id}</h3>
              <div>
                <h4>{service.title[locale]}</h4>
                <p>{service.description[locale]}</p>
              </div>
              {project && (
                <div
                  className="service-project"
                  style={{
                    transform: ` rotateX(${position.rotateX}deg) rotateY(${position.rotateY}deg)`,
                  }}
                >
                  <div>
                    <img src={project.img} alt={project.title} />
                  </div>
                  <span>
                    {service.id} | {service.title[locale]}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description[locale]}</p>
                  <Link href={`/${locale}/project/${project.slug}`}>
                    {serviceT("viewProject")}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
