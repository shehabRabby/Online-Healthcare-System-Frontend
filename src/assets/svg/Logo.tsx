import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={150}
      height={40}
      priority
      className="h-10 w-auto"
    />
  );
};

export default Logo;