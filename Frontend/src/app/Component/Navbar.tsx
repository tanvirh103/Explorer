export default function Navbar() {
  return (
    <div className="border-b-2 border-[#eeeeee] ">
      <div className="flex justify-between items-center px-4 2xl:px-12 lg:px-8 pt-4 pb-4 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto ">
      <div className="flex justify-start item center">
        <div className="text-[24px] font-[600]">Blockchain Explorer</div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-12">
          <p className="font-[500] text-[16px] hover:text-[#0d4c8f]">Home</p>
          <p className="font-[500] text-[16px] hover:text-[#0d4c8f]">Token</p>
          <p className="font-[500] text-[16px] hover:text-[#0d4c8f]">
            Blockchain
          </p>
          <p className="font-[500] text-[16px] hover:text-[#0d4c8f]">
            Developers
          </p>
          <p className="font-[500] text-[16px] hover:text-[#0d4c8f]">Contact</p>
        </div>
        {/* <div className="flex justify-end gap-6">
                <Link href={`https://github.com/tanvirh103`}>
                  <p>
                    <Github />
                  </p>
                </Link>
                <Link href={`https://www.linkedin.com/in/tanvirh103/`}>
                  <p>
                    <LinkendIn />
                  </p>
                </Link>
                <Link href={`mailto:tanvirh103@gmail.com`}>
                  <p>
                    <Mail />
                  </p>
                </Link>
                <Link href={`https://www.facebook.com/tanvirh103/`}>
                  <p>
                    <Facebook />
                  </p>
                </Link>
              </div> */}
      </div>
      </div>
    </div>
  );
}
