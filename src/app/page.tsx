import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex place-items-center z-[-1]">
        <Image
          src={"/logo-polletto-removebg-preview.png"}
          alt={"Polletto logo"}
          width={512}
          height={512}
          priority
        />
      </div>
    </>
  );
}
