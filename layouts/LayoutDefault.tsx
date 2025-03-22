import "./tailwind.css";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="antialiased">{children}</main>;
}
