import { Divider } from "@nextui-org/react";
import Section from "./section";
import { lusitana } from "./fonts";

export default function Education() {
  return (
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
  );
}
