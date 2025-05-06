import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import BlockInfo from "./Component/BlockInfo";
import Footer from "./Component/footer";
import axios from "axios";

export default async function Home() {
  const blockdetails = await axios.get(
    `http://172.20.112.1:4005/blockchain`,
    {
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json; charset=utf-8',
      },
    }
  );
  return (
   <div>
    <Navbar />
    <Searchbar blockchainData={blockdetails}/>
    <BlockInfo blockchainData={blockdetails}/>
    <div className="mt-[110px]">
      <Footer/>
    </div>
   </div>
  );
}
