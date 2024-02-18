import { Encode } from "./components/encode";

export default function Home() {
  return (
    <div className="min-h-screen xs:w-full mx-auto sm:w-[640px] px-4 pt-24 flex justify-center">
      <Encode />
    </div>
  );
}
