import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import BlockInfo from "./Component/BlockInfo";
import Footer from "./Component/footer";

export default async function Home() {

  return (
   <div>
    <Navbar />
    <Searchbar />
    <BlockInfo/> 
    <div className="mt-[110px]">
      <Footer/>
    </div>
   </div>
  );
}