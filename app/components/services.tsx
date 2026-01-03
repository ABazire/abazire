"use client";

import { useCurrentLocale, useI18n, useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { services } from "@/data/services";
import { getLatestProjectForCategory } from "../../lib/utils/getProjectForService";

export default function Services() {
  const serviceT = useScopedI18n("service");
  const locale = useCurrentLocale();

  return (
    <section className="container">
      <h2>{serviceT("title")}</h2>
      <div>
        {services.map((service) => {
          const project = getLatestProjectForCategory(service.category);

          return (
            <div className="service" key={service.id}>
              <h3>{service.id}</h3>
              <div>
                <h4>{service.title[locale]}</h4>
                <p>{service.description[locale]}</p>
                <Link href="/product">{serviceT("viewProduct")}</Link>
              </div>
              {project && (
                <div className="service-project">
                  <div>
                    <img src={project.img} alt={project.title} />
                  </div>
                  <span>
                    {service.id} | {service.title[locale]}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description[locale]}</p>
                  <Link href={`/product/${project.slug}`}>
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
