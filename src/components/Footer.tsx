import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="z-50 text-twilight bg-dark-amethyst w-full p-4 font-main text-2xl tracking-wide text-center">
            <p>&copy;{ new Date().getFullYear() } Broken Pendulum - <Link to="/policies" className="underline hover:text-royalty">Policies</Link></p>
        </footer>
    );
}
