import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      
      href: '/products',
      title: 'Produtos',
    },
    {
      href: '/categories',
      title: 'Categorias',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        Trabalho Ruby on Rails
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-gray-100 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer ${
                        router.asPath === href && 'bg-gray-600 text-white'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}