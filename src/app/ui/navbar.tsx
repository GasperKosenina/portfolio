import Link from "next/link";
import React from "react";
import Logo from "./logo";
export default function Nav() {
  return (
    <>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/gašper-košenina-101337262/"
      >
        <Logo
          src="/linkedin-1.png"
          alt="linkedIn logo"
          width={50}
          height={50}
        />
      </Link>
      <Link target="_blank" href="https://github.com/GasperKosenina">
        <Logo
          src="/github-mark/github-mark-white.png"
          alt="github logo"
          width={30}
          height={30}
        />
      </Link>
      <Link href="#about">Who Am I?</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#education">Education</Link>
      <Link href="#projects">Projects</Link>
    </>
  );
}
