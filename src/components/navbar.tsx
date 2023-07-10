import { FC, useEffect, useRef } from "react";
import PhicosLogo from '@/assets/logo/phicos_logo.png';
import { Link } from "react-router-dom";
import { useScroll } from "framer-motion";


interface MenuListItem {
  label: string,
  path: string
}

const Navbar: FC = () => {
  const menuListItem: MenuListItem[] = [
    {
      label: 'Works',
      path: '/works'
    },
    {
      label: 'Careers',
      path: '/careers'
    },
    {
      label: 'About Us',
      path: '/about'
    },
    {
      label: 'Structure',
      path: '/structure'
    },
  ]

  const { scrollY } = useScroll()
  const navContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (navContainer.current) {
        if (scrollY.get() > 50) {
          navContainer.current.classList.add('py-3', 'navShadow')
          navContainer.current.classList.remove('py-6')
        }
        else {
          navContainer.current.classList.add('py-6')
          navContainer.current.classList.remove('py-3', 'navShadow')
        }
      }
    })
  }, [])

  return (
    <nav ref={navContainer} className="bg-white py-6 transition-all">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <img src={PhicosLogo} alt="phicos logo" className="h-12" />
        </Link>

        <div className="flex items-center flex-1 justify-end">
          <ul className="flex gap-4 text-slate-700">
            {menuListItem.map((item) => (
              <Link to={item.path} key={item.label}>
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;