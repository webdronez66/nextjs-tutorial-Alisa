import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a> Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" passHref>
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> 568<sup>th</sup> Engineer co. (cse)</p>
      </div>
    </header>
  );
};
