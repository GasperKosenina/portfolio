import ProjectCard from "./projectCard";

export default function Projects() {
  return (
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
  );
}
