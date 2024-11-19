import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full text-center">
      <h1 className="bg-mottai-red"> Mottainai!</h1>
      <h1 className="bg-mottai-accent"> Mottainai!</h1>
      <h1 className="bg-mottai-white"> Mottainai!</h1>
      <div className="flex justify-center">
        <Image src="/1.png" width={400} height={400} />
        <Image src="/2.png" width={400} height={400} />
      </div>
    </div>
  );
}
