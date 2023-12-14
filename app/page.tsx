import Image from "next/image";
import { Navbar } from "@/components/Navbar/main-navbar";
import SearchBar from "@/components/search-bar";
import ShowCase from "@/components/show-case";
import Heading from "@/components/ui/heading";
import ContentBox from "@/components/content-box";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-evenly w-full ">
      <div className=" w-full h-[400px] bg-[url('/images/bg1.jpeg')] flex flex-col justify-start items-start space-y-8 bg-cover bg-center">
        <Navbar />
        <SearchBar />
      </div>
      <div className=" w-full px-8 flex justify-center items-center mt-6 mb-6">
          <ShowCase />
      </div>
      <div className=" bg-white w-full rounded p-5 flex flex-col justify-evenly items-center">
          <Heading title="What are you expecting to do?" subtitle=" get mind blowing deals and crazy offers" />
          <ContentBox />
      </div>
    </main>
  );
}
