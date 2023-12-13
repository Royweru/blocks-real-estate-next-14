import Image from "next/image";
import { Navbar } from "@/components/Navbar/main-navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-0 w-full ">
      <div className="w-full min-h-max bg-url[('/images/bg1.jpeg')] flex flex-col justify-start items-start space-y-8 bg-slate-300">
        <Navbar />
        The main top table thing
      </div>
    </main>
  );
}
