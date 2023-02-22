import { Datum } from '@/interface/interface';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './film.module.scss';

const Film: FC<Datum> = ({
  id,
  big_poster,
  rating_imdb,
  year,
  name_russian,
  type,
}) => {
  return (
    <figcaption className={styles.item}>
      <div className={styles.top}>
        <Link href={`/film/${id}`}>
          <Image
            src={big_poster}
            alt={name_russian}
            width='222'
            height='333'
            className={styles.image}
          />
        </Link>
        {/* {rating && <MovieRating rating={rating} />} */}
      </div>
      <Link href={`/film/${id}`} className={styles.title}>
        {name_russian}
      </Link>
      <span className={styles.info}>
        {year}, {type === 'film' && 'фильм'}
      </span>
    </figcaption>
  );
};

export default Film;
