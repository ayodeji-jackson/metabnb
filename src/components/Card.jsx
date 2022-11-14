import { Star, Heart } from '../assets/icons';

export default function Card({ imgSrc, name, price, distance, availability }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4">
      <div className='mb-4 relative rounded-[inherit] border-[inherit]'>
        <img src={imgSrc} className="rounded-[inherit] border-[inherit]" />
        <Heart className="absolute top-3 right-3" />
      </div>
      <div className="grid grid-rows-2 grid-cols-2 text-xs gap-y-2">
        <p>{name}</p>
        <p className="justify-self-end font-bold">{price}</p>
        <p>{distance}</p>
        <p className="justify-self-end">
          {availability}
        </p>
      </div>
      <div className="space-x-2">
        {Array(5)
          .fill()
          .map((_, i) => (
            <Star key={i} className="inline w-3 h-3" />
          ))}
      </div>
    </div>
  );
}
