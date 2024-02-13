import Link from "next/link";
import React from "react";
import Logo from "./logo";
export default function Nav() {
  return (
    <>
      <Link target="_blank" href="https://github.com/GasperKosenina">
        <Logo
          src="./github-mark/github-mark-white.png"
          alt="github logo"
          width={30}
          height={30}
        />
      </Link>
      <Link href="mailto:gaso.kosenina@gmail.com">email</Link>
    </>
  );
}
