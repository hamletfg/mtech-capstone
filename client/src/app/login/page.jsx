import Link from "next/link";
import Button from "../_components/Button";
import Input from "../_components/Input";

export default function Page() {
  return (
    <div className="p-10 w-fit mx-auto flex flex-col justfity-center items-center">
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="email@example.com"
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
