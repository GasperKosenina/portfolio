import { Divider } from "@nextui-org/react";
import Section from "./section";

export default function AboutMe() {
  return (
    <Section title="Who Am I?" showLevels="no" showLinkedIn="yes">
      <Divider className="my-2" />

      <p className="text-xs md:text-sm lg:text-base ">
        Hey there! My name is <strong>Gašper</strong>, and I&apos;m a software
        engineer.
        <br /> I find joy in <strong>coding</strong> and bringing my ideas to
        life through personal projects.
        <br /> As a fast learner, I&apos;m always eager to dive into new
        technologies and <strong>expand my skill set</strong>.
        <br /> Being able to learn from those who have walked the path before me
        is something I greatly appreciate. In addition to coding, I also enjoy
        different sports (mostly football).
        <br /> I&apos;m excited about the endless possibilities that technology
        offers, and I&apos;m constantly seeking opportunities to challenge
        myself and make a <strong>positive impact</strong> in the world through
        my work.
        <br /> Thank you for taking the time to learn a bit about me, and I look
        forward to connecting with you!
      </p>
    </Section>
  );
}
