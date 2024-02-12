import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

interface ProjectCardProps {
  emoji: string;
  title: string;
  githubLink: string;
}
export default function ProjectCard({
  emoji,
  title,
  githubLink,
}: ProjectCardProps) {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          {emoji}
          <p className="text-md">{title}</p>
        </CardHeader>
        <Divider />
        <CardFooter className="flex flex-col">
          <Link isExternal showAnchorIcon href={githubLink}>
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
