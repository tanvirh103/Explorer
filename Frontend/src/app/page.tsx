import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import BlockInfo from "./Component/BlockInfo";
import Footer from "./Component/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Searchbar/>
    <BlockInfo/>
    <div className="mt-[11px]">
      <Footer/>
    </div>
   </div>
  );
}
