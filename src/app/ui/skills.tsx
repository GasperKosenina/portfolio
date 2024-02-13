import { Divider } from "@nextui-org/react";
import Section from "./section";
import Item from "./item";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col">
      <Section title="Skills" showLevels="no">
        <Divider className="my-2" />
        <div className="flex">
          <div className="flex flex-col mr-12">
            <h2 className="my-2 font-bold">Backend Development</h2>
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
          <div className="flex flex-col mr-unit-18">
            <h2 className="my-2 font-bold">Frontend Development</h2>
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
            <h2 className="my-2 font-bold">Other Technologies</h2>
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
            <Item
              name="Neovim"
              level="beginner"
              logoSrc="/neovim.png"
              alt="neovim logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
