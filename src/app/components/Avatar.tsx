import { auth } from "../../../auth";
import Image from "next/image";
export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="relative w-10 h-10">
      <Image
        src={session.user.image || ""}
        alt="User Avatar"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
}
