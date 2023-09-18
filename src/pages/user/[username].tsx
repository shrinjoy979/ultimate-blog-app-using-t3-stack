import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { BiEdit } from "react-icons/bi";

const UserProfilePage = () => {
  const router = useRouter();

  const userProfile = trpc.user.getUserProfile.useQuery(
    {
      username: router.query.username as string,
    },
    {
      enabled: !!router.query.username,
    }
  );

  return (
    <MainLayout>
      <div className="flex h-full w-full items-center justify-center">
        <div className="my-10 flex h-full w-full flex-col items-center justify-center lg:max-w-screen-sm xl:max-w-screen-lg">
          <div className="relative h-44 w-full rounded-3xl bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="absolute -bottom-10 left-12">
              <div className="group relative h-28 w-28 cursor-pointer rounded-full border-2 border-white bg-gray-100">
                <label
                  htmlFor="avatarFile"
                  className="absolute z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full transition group-hover:bg-black/40"
                >
                  <BiEdit className="hidden text-3xl text-white group-hover:block" />
                  <input
                    type="file"
                    name="avatarFile"
                    id="avatarFile"
                    className="sr-only"
                    accept="image/*"
                  />
                </label>
                {userProfile.data?.image && (
                  <Image
                    src={userProfile.data?.image}
                    alt={userProfile.data?.name ?? ""}
                    fill
                    className="rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfilePage;
