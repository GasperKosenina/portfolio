import { Divider, Listbox, ListboxItem } from "@nextui-org/react";
import Section from "./ui/section";
import Item from "./ui/item";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <main className="flex max-w-screen-md mx-auto flex-col mt-20">
      <div id="skills" className="flex flex-col">
        <Section title="Skills" showLevels="no">
          <Divider className="my-2" />
          <div className="flex">
            <div className="flex flex-col mr-7">
              <h2 className="my-2">Backend Development</h2>
              <Item
                name="Golang"
                level="advanced"
                logoSrc="/golang-1.png"
                alt="html logo"
                width={20}
                height={20}
              />
              <Item
                name="Python"
                level="intermediate"
                logoSrc="/python.png"
                alt="python logo"
                width={20}
                height={20}
              />

              <Item
                name="Java"
                level="beginner"
                logoSrc="/java.png"
                alt="Java Logo"
                width={25}
                height={25}
              />
              <Item
                name="Type Script"
                level="advanced"
                logoSrc="/typescript.png"
                alt="type script logo"
                width={25}
                height={25}
              />
              <Item
                name="Node Js + Express"
                level="advanced"
                logoSrc="/node-js-1.png"
                alt="node js logo"
                width={50}
                height={50}
              />
              <Item
                name="Next JS (Full stack)"
                level="intermediate"
                logoSrc="/next-js-2.webp"
                alt="next js logo"
                width={25}
                height={25}
              />
            </div>
            <div className="flex flex-col mr-16">
              <h2 className="my-2">Frontend Development</h2>
              <Item
                name="HTML"
                level="advanced"
                logoSrc="/pngwing.com.png"
                alt="html logo"
                width={20}
                height={20}
              />
              <Item
                name="Tailwind CSS"
                level="beginner"
                logoSrc="/tailwind.png"
                alt="tailwind logo"
                width={20}
                height={20}
              />
              <Item
                name="Java Script"
                level="advanced"
                logoSrc="/javascript.png"
                alt="javascript logo"
                width={20}
                height={20}
              />
              <Item
                name="React"
                level="intermediate"
                logoSrc="/react.png"
                alt="react logo"
                width={20}
                height={20}
              />
              <Item
                name="Flutter"
                level="beginner"
                logoSrc="/flutter.png"
                alt="flutter logo"
                width={20}
                height={20}
              />
              <Item
                name="React Native"
                level="intermediate"
                logoSrc="/react-native.png"
                alt="react native logo"
                width={25}
                height={25}
              />
            </div>
            <div className="flex flex-col mr-4">
              <h2 className="my-2">Other</h2>
              <Item
                name="Git"
                level="intermediate"
                logoSrc="/git.png"
                alt="git logo"
                width={20}
                height={20}
              />
              <Item
                name="MongoDB"
                level="intermediate"
                logoSrc="/mongodb.png"
                alt="mongodb logo"
                width={25}
                height={25}
              />
              <Item
                name="MySQL"
                level="advanced"
                logoSrc="/mysql.png"
                alt="mysql logo"
                width={20}
                height={20}
              />
              <Item
                name="PostgreSQL"
                level="advanced"
                logoSrc="/postgresql.png"
                alt="postgresql logo"
                width={25}
                height={25}
              />
              <Item
                name="Docker"
                level="beginner"
                logoSrc="/docker.png"
                alt="docker logo"
                width={20}
                height={20}
              />
            </div>
          </div>
        </Section>
      </div>
      <div id="experience" className="flex flex-col">
        <Section title="Experience" showLevels="no">
          <Divider className="my-2" />
          <div className="my-4">
            <h3 className="font-bold">
              Backend Developer Internship{" "}
              <span className={`${lusitana.className}`}>
                (July 2023 - September 2023)
              </span>
            </h3>
            <p className="my-2">
              🏢 Company:{" "}
              <Link
                href="https://www.linkedin.com/company/3fs-nordic/"
                className="text-blue-500 underline"
                target="_blank"
              >
                3fs
              </Link>
            </p>
            <p className="my-2">⏳ Duration: 3 months</p>
            <p>📝 Description: Worked on backend development using Golang.</p>
          </div>
        </Section>
      </div>
      <div id="education" className="flex flex-col">
        <Section title="Education" showLevels="no">
          <Divider className="my-2" />
          <div className="my-4">
            📚 Gimnasium{" "}
            <span className={`${lusitana.className}`}>
              (September 2017 - August 2021)
            </span>
          </div>
          <div className="my-4">
            💻 Computer Science at FERI{" "}
            <span className={`${lusitana.className}`}>
              (October 2021 - October 2024)
            </span>
          </div>
        </Section>
      </div>
      <div id="projects" className="flex flex-col">
        <Section title="Projects" showLevels="no">
          <Divider className="mt-4 mb-10" />
          <Projects />
        </Section>
      </div>
    </main>
  );
}
