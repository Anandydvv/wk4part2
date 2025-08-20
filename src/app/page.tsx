// src/app/page.tsx
import HamburgerMenu from './Components/HamburgerMenu';

export default function Home() {
  return (
    <div>
      <HamburgerMenu />
      <h1>Welcome to My Next.js App</h1>
      <p>Try the menu in the top-left.</p>
    </div>
  );
}
