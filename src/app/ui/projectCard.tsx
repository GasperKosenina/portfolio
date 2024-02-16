import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  githubLink: string;
}
export default function ProjectCard({
  emoji,
  title,
  githubLink,
  description,
}: ProjectCardProps) {
  return (
    <div>
      <Card className="w-[375px]">
        <CardHeader className="flex gap-3">
          {emoji}
          <p className="text-md">{title}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-md">{description}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex">
          <Link isExternal showAnchorIcon href={githubLink}>
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
