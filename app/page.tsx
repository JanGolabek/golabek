import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
  <div className="flex flex-col md:flex-row justify-between items-center pt-20 md:p-36">
  <div className="mb-6 md:mb-0 md:w-1/2">
        <Image
            src="/logo-green.png"
            alt="Next.js Logo"
            width={400}
            height={37}
            priority={false}
          />{" "}
        </div>
        <div className="w-1/2 flex justify-end pl-10">
        <h1 className="text-5xl md:text-9xl font-bold text-gray-900 pt-20 md:pt-0">Your Big Heading</h1>

        </div>
      </div>

      {/* <div className="text-center my-5">
        <h1>Kontakt:</h1>
        <br />
        <br />
        <h2>
          <a href="tel:+4796880090">+47 968 80 090 🇳🇴</a>
        </h2>
        <h2>
          <a href="tel:+48697974229">+48 697 974 229 🇵🇱</a>
        </h2>
        <br />
        <h2>
          <a href="mailto:ig@golabek.no">ig@golabek.no</a>
        </h2>
      </div> */}
    </main>
  );
}
