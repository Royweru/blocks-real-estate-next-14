import Image from "next/image";
import { Navbar } from "@/components/Navbar/main-navbar";
import SearchBar from "@/components/search-bar";
import Billboard from "@/components/billboard";
import Heading from "@/components/ui/heading";
import ContentBox from "@/components/content-box";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-evenly w-full ">
      <Billboard>
        <Navbar/>
        <SearchBar />
      </Billboard>
      <div className=" bg-white w-full rounded  flex flex-col justify-evenly items-center mb-5 py-3">
          <Heading title="What are you expecting to do?" subtitle=" get mind blowing deals and crazy offers" />
          <ContentBox />
      </div>
    </main>
  );
}
