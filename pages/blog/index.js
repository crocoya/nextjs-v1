import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function index(props) {
  return (
    <div className='container px-4 py-5'>
      <h1 className='text-center'>Bienvenue sur le Blog</h1>
      <p className='text-center'>Voici les articles</p>
      <div className='row g-3 mt-4'>
        {props.articles.map((item) => (
          <div className='col-12 col-md-6 col-xl-4' key={uuidv4()}>
            <div className='card h-100 shadow-sm bg-dark'>
              <div className='card-body '>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>{item.body.slice(0, 20) + '...'}</p>
                <Link href={`/blog/${item.id.toString()}`}>
                  <a className='card-link'>Lire cet article</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
}
