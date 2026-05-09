import { redirect } from "next/navigation";

export default function HomePage() {
  const path = "/manutd";
  redirect(path);
}
