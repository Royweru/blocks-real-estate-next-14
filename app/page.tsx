
import { Navbar } from "@/components/Navbar/main-navbar";
import SearchBar from "@/components/search-bar";
import Billboard from "@/components/billboard";
import Heading from "@/components/ui/heading";
import ContentBox from "@/components/content-box";
import ShowCase from "@/components/show-case";
import Listings from "@/components/listings";
import MiniListing from "@/components/listings/mini-listing";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-4 justify-evenly items-center w-full ">
      <Billboard>
        <Navbar/>
        <SearchBar />
      </Billboard>
      <div className=" bg-white w-full rounded  flex flex-col justify-evenly items-center  py-3">
          <Heading title="What are you expecting to do?" subtitle=" get mind blowing deals and crazy offers" />
          <ContentBox />
      </div>
      <ShowCase />
      <Listings />
      <MiniListing />
      <Footer />
    </main>
  );
}
