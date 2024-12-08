import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <br />
      <Image
        className="dark:invert"
        src="https://drive.google.com/thumbnail?id=1uAN21EDF349gpxLwsSD2nOrsq1IG7f4R&sz=w1000"
        alt="Next.js logo"
        width={600}
        height={0}
        priority
      />
    </div>
  );
}
