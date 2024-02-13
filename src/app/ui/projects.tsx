import { Divider } from "@nextui-org/react";
import ProjectCard from "./projectCard";
import Section from "./section";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col">
      <Section title="Projects" showLevels="no">
        <Divider className="mt-4 mb-10" />
        <div className="flex flex-wrap gap-3">
          <ProjectCard
            githubLink="https://github.com/BarbaraFerlinc/ReCloth"
            title="ReCloth"
            emoji="&#128084;"
          />
          <ProjectCard
            githubLink="https://github.com/GasperKosenina/emoji-app"
            title="Emoji-app"
            emoji="😄"
          />
        </div>
      </Section>
    </div>
  );
}
