'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
            <Link key={social} href="#" className="hover:underline-green-400">{social}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

