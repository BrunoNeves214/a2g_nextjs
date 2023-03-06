import Image from "next/image";
import Link from "next/link";

export default function Homepage({results}) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end gap-10 mt-20">
        {results.map(result =>( 
            <div key={result.id} className="flex flex-col mx-auto">
                <Link href={`/game/${result.id}`} className="relative group cursor-pointer">
                    <Image src={`${result.background_image}`} width={500} height={100}  alt={`${result.name}`} className='rounded-xl md:h-[200px]'/>

                    <p className="absolute top-0 bg-cor60 w-full h-full flex justify-center items-center text-[1.3rem] text-transparent bg-opacity-0 group-hover:bg-opacity-50 group-hover:text-cor10 group-hover:text-[1.5rem] rounded-xl transition-all duration-300">View more</p>
                </Link>
                <div className="">
                    <h1 className="">{result.name}</h1>
                    <p>Date of release: {result.released}</p>
                    <p>Metacritic Score: {result.metacritic}</p>
                </div>
            </div>
        ))}
    </main>
  )
}
