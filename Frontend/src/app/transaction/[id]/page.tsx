import Footer from "@/app/Component/footer";
import Navbar from "@/app/Component/Navbar";
import TransactionDetails from "@/app/Component/TransactionDetails";

export default function transactionDetails({ params }: { params: any }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TransactionDetails id={params.id} />
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
}
