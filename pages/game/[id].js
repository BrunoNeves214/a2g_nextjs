import Image from "next/image"

const API_KEY = process.env.API_KEY

export default function GamePage({data, results}) {

  return (
    <div className="py-10 space-y-5">
      {/* title */}
      <h1 className="text-center text-[2rem]">{data.name_original}</h1>

      {/* showcase */}
      <Image width={500} height={500} src={`${data.background_image}`} alt={`${data.name_original}`}
      className='w-full'
      />

      {/* description */}
      <p>{data.description.substring(3,data.description.length-4).replace((/<br \/>/g), ' ').replace((/<\/p>\s<p>/g), ' ')}</p>

      {/* informations */}
      <div className="flex justify-between text-center py-10">
        <div>
          <h1 className="text-cor30 text-[1.1rem]">Release date:</h1>
          <p className="text-[1.5rem]">{data.released}</p>
        </div>
        <div>
          <h1 className="text-cor30 text-[1.1rem]">Metacritic Score</h1>
          <p className="text-[1.5rem]">{data.metacritic}</p>
        </div>
        <div>
          <h1 className="text-cor30 text-[1.1rem]">Rating</h1>
          <p className="text-[1.5rem]">{data.esrb_rating.name}</p>
        </div>
      </div>

      {/* screenshots */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {results.map(result => (
            <Image key={result.id} width={500} height={500} src={`${result.image}`} alt=''
            className='w-full'/>
          ))}
        </div>
    </div>
  )
}

export async function getStaticPaths(){
  const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=2`)

  const data = await res.json()

  const results = data.results
  const game = results.map(ev => {
    return{
      params: {
        id: ev.id.toString()
      }
    }
  })
  

  return {
    paths: game,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const id = params.id
  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
  const res2 = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`)
  const data = await res.json()
  const photos = await res2.json()
  const results = photos.results

  return {
    props: {data, results}
  }
}