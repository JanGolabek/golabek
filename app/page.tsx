import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-14">
      
      <div className="relative flex place-items-center my-24">
        <Image
          src="/logo-green.png"
          alt="Next.js Logo"
          width={280}
          height={37}
          priority={false}
        />
      </div>


<div className='text-center my-5'>
<h1>Kontakt:</h1>
<br/><br/>
<h2><a href="tel:+4796880090">+47 968 80 090 🇳🇴</a></h2>
<h2><a href="tel:+48697974229">+48 697 974 229 🇵🇱</a></h2>
<br/>
<h2><a href = "mailto:ig@golabek.no">ig@golabek.no</a></h2>
</div>
    </main>
  )
}
