import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import BlockInfo from "./Component/BlockInfo";
import Footer from "./Component/footer";

export default async function Home() {

  return (
    <div className="min-h-screen flex flex-col">
  <Navbar />
  <Searchbar />
  <div className="flex-grow">
    <BlockInfo />
  </div>
  <Footer />
</div>
  );
}