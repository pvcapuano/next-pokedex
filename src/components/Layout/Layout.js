import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-blue-100 ">{children}</main>
    </div>
  );
}
