
import React from "react";
import { UserButton } from "@clerk/nextjs";

interface UserAvatarProps {
  src?: string;
}
const UserAvatar: React.FC<UserAvatarProps> = async ({ src }) => {
  return (
    <div className="  flex justify-center items-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserAvatar;
