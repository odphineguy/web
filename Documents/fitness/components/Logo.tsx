import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image 
        src="/default-monochrome.svg" 
        alt="InAction Fitness Logo" 
        width={120} 
        height={40} 
        className="h-10 w-auto"
        priority
      />
    </div>
  );
}
