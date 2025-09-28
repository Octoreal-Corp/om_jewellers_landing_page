import logo from "@/assets/full-logo.jpg";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt={"Logo of Om Jewellers"} height={40} />
    </div>
  );
};

export default Logo;
