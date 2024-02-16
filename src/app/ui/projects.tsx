import { Divider } from "@nextui-org/react";
import ProjectCard from "./projectCard";
import Section from "./section";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-wrap justify-center">
      <Section title="Projects" showLevels="no">
        <Divider className="mt-4 mb-10" />
        <div className="flex flex-wrap gap-4">
          <ProjectCard
            githubLink="https://github.com/BarbaraFerlinc/ReCloth"
            title="ReCloth"
            description="Cloth web application"
            emoji="&#128084;"
          />
          <ProjectCard
            githubLink="https://github.com/GasperKosenina/nfl-player-rushing-yards-prediction"
            title="NFL Player Rushing Yards Prediction"
            description="Rushing yards prediction model"
            emoji="🏈"
          />
          <ProjectCard
            githubLink="https://github.com/GasperKosenina/emoji-app"
            title="Emoji-app"
            description="Emoji app"
            emoji="😄"
          />
        </div>
      </Section>
    </div>
  );
}
