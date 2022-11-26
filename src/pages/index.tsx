import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-4xl mb-5">Hello</p>
      <Link href="/auth/login">
        <button className="btn btn-primary">Login</button>
      </Link>
    </div>
  );
}
