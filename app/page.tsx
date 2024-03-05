import Image from "next/image";
import Law from "../public/law2.jpg";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

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
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900 pt-20 md:pt-0">
            Adwokat w Norwegii - Pomoc prawna dla Polaków
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-20 md:p-36 gap-52">
        <Card component="li" sx={{ minHeight: 500, minWidth: 400 }}>
          <CardCover>
            <Image src={Law} loading="lazy" alt="" />
          </CardCover>
        </Card>

        <div className="my-5 text-lg">
          <p>
            Witamy serdecznie w Kancelarii Adwokackiej Igi Gołąbek,
            zlokalizowanej w sercu Oslo, przy prestiżowym C.J. Hambros plass 5,
            tuż naprzeciwko Oslo Tingrett. Nasza kancelaria jest miejscem, gdzie
            polska dusza spotyka się z norweską prawem. Specjalizujemy się w
            kompleksowej obsłudze prawnej Polaków mieszkających w Norwegii,
            zapewniając wsparcie zarówno dla klientów lokalnych, jak i tych,
            którzy zamieszkują poza granicami kraju. Posiadając norweskie
            uprawnienia adwokackie, zdobyte poprzez pozytywne zaliczenie
            egzaminu państwowego, oraz tytuł polskiego adwokata, jesteśmy gotowi
            sprostać najbardziej wymagającym potrzebom naszych klientów. Naszym
            celem jest świadczenie usług prawnych na najwyższym poziomie,
            opartych na profesjonalizmie, doświadczeniu oraz zrozumieniu potrzeb
            naszych klientów. Dziękujemy za zaufanie i zapraszamy do
            skorzystania z naszej kancelarii, gdzie Wasze sprawy są naszym
            priorytetem.
          </p>
        </div>
      </div>

      <div className="mb-56">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 pt-20 md:pt-0 mt-20">
          Nasze dziedziny
        </h1>

        <ul className="space-y-6 text-left text-gray-500 dark:text-gray-400 mt-10 ml-12">
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                NAV:{" "}
              </span>
              <span>(wnioski, odwołania)</span>
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              Wypadki przy pracy{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                (yrkesskade)
              </span>
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Prawo pracy:{" "}
              </span>
              <span>(wypowiedzenia, zaległe wypłaty, feriepenger)</span>
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                NAV Lønnsgaranti{" "}
              </span>
              <span>(wnioski, odwołania)</span>
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              Pomoc udzielana również w ramach darmowej pomocy prawnej
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Darmowe konsultacje i krótkie analizy spraw</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-4 gap-10">

        <div className="col-span-1">
          <EmailIcon />
          ig@golabek.no
        </div>
        <div className="col-span-1">
          <PhoneIcon />+ 47 968 80 090
        </div>
        <div className="col-span-1">
          <PhoneIcon />
          +48 697 974 229{" "}
        </div>
        <div className="col-span-1">
          <LocationOnIcon />
          C.J. Hambros plass 5, 0164 Oslo
        </div>
      </div>
    </main>
  );
}
