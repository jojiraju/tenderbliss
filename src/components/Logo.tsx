import Link from "next/link";

export const Logo = () => (
  <Link href="/#home" className="flex items-center cursor-pointer group">
    <img 
      src="/logo.png" 
      alt="TenderBliss Logo" 
      className="h-16 md:h-20 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" 
    />
  </Link>
);
