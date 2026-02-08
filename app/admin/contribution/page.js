import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import PendingContributions from "./pending";

export default async function AdminContributionsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Pending Contributions</h2>
      <PendingContributions />
    </div>
  );
}
