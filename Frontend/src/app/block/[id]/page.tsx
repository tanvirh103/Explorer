import BlockDetails from "@/app/Component/BlockDetails";
import Footer from "@/app/Component/footer";
import Navbar from "@/app/Component/Navbar";

export default function Block({ params }: { params: any }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BlockDetails id={params.id} />
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
}
