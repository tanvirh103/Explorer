import BlockDetails from "@/app/Component/BlockDetails";
import Footer from "@/app/Component/footer";
import Navbar from "@/app/Component/Navbar";
import axios from "axios";

export default async function Block({ params }: any) {
  const id = await params.id;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/blockchain`, {
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
    },
  });

  const blockinfo = response.data.find(
    (block: any) => block.blockInfo.blockHash === id
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BlockDetails data={blockinfo} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
