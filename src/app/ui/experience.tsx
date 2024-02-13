import { Divider } from "@nextui-org/react";
import Section from "./section";
import { lusitana } from "./fonts";
import Link from "next/link";

export default function Experience() {
  return (
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
  );
}
