'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Aurie Nellas" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Aurie Nellas</h2>
          <p>
            <a href="mailto:aurie.nellas@email.com">aurie.nellas@email.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Aurie. I am a 3rd year{' '}
          <a href="https://dnsc.edu.ph">BSIT student at Davao del Norte State College</a>, aspiring web developer specializing in{' '}
          <a href="#">Laravel</a>, <a href="#">Django</a>, and{' '}
          <a href="#">React</a>. I&apos;m passionate about coding, always practicing to improve my skills, and dream of working in the tech industry.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Aurie Nellas <Link href="/">4urie.me</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
