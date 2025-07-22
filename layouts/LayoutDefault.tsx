import { ThemeInit } from "../.flowbite-react/init";
import "./tailwind.css";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="antialiased">
      <ThemeInit />
      {children}
    </main>
  );
}
