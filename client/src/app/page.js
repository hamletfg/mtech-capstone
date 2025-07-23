import Image from "next/image";
import Link from "next/link";
import Button from "./_components/Button";
import Input from "./_components/Input";

export default function Home() {
  return (
    <div className="p-10 w-fit mx-auto flex justfity-center items-center">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/join">
        <Button>Join</Button>
      </Link>
    </div>
  );
}
