import React from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

function footer({ variant = "simple" }: { variant?: "simple" | "detailed" }) {
  return (
    <>
      <footer className="container">
        {variant === "simple" && <p>© 2024 Abazire. All rights reserved.</p>}
        {variant === "detailed" && (
          <>
            <div className="about-container">
              <div className="profile">
                <span>AB</span>
                <p>
                  <MapPin size={18} className="icons" />
                  Normandie, France
                </p>
              </div>
              <div className="resume">
                <div className="resume-section">
                  <span>A propos</span>
                  <p>
                    Passionné par la création d'expériences digitales à la fois
                    esthétiques et performantes, je combine mes compétences en
                    développement front-end et en design UX/UI pour donner vie à
                    des projets web innovants. Expérience
                  </p>
                </div>
                <div className="resume-section">
                  <div>
                    {" "}
                    <Briefcase className="icons" />
                  </div>
                  <div>
                    <span>Expérience</span>
                    <p>3 ans en développement web et design UX/UI</p>
                  </div>
                </div>
                <div className="resume-section">
                  <div>
                    {" "}
                    <GraduationCap className="icons" />
                  </div>
                  <div>
                    <span>Formation</span>
                    <p>Master en design UX/UI</p>
                  </div>
                </div>
                <button>Télécharger mon CV</button>
              </div>
            </div>
            <div>
              <p>© 2024 Abazire. All rights reserved.</p>
            </div>
          </>
        )}
      </footer>
    </>
  );
}

footer.propTypes = {};

export default footer;
