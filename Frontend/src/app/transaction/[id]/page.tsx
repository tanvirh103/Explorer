import Footer from "@/app/Component/footer";
import Navbar from "@/app/Component/Navbar";
import TransactionDetails from "@/app/Component/TransactionDetails";
import axios from "axios";

export default async function transactionDetails({ params }: { params: any }) {
  const id=await params.id
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/blockchain`,
    {
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json; charset=utf-8',
      },
    }
  );
  const transactionInfo = response.data
    .flatMap((block: any) => block.transactions)
    .find((transaction: any) => transaction.signature === id);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TransactionDetails data={transactionInfo} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
