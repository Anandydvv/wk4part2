import { HamburgerMenu } from './Components/HamburgerMenu';
console.log('HamburgerMenu import is:', HamburgerMenu);

export default function Home() {
  return (
    <div>
      <HamburgerMenu />
      <h1>Welcome to My Next.js App</h1>
      <p>Try the menu in the top-left.</p>
    </div>
  );
}
