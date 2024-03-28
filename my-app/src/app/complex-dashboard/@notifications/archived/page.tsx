import Card from "@/components/Card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href='/complex-dashboard'>notifications</Link>
    </Card>
  )
}
