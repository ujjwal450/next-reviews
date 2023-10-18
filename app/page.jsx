import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  const featuredReview = await getFeaturedReview()
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">
        Only the best indie games, reviewed for you.
      </p>
      <div className='bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full '>
        <Link href={`/reviews/${featuredReview.slug}`} className="flex flex-col sm:flex-row">
          <img src={featuredReview.image} alt="" width='320' height='180' className="rounded-t sm:rounded-l sm:rounded-r-none"/>
          <h2 className='font-semibold py-1 text-center font-orbitron sm:px-2'>{featuredReview.title}</h2>
        </Link>
      </div>
    </>
  );
}
