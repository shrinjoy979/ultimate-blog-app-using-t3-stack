import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: sessionData, status } = useSession();
  console.log(sessionData);

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-lg font-thin">Ultimate Blog App</div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600"></div>
            </div>
            <div>
              <button
                onClick={() => console.log("Write button")}
                className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
              >
                <div>Write</div>
                <div>
                  <FiEdit />
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
              >
                <div>LogOut</div>
                <div>
                  <FiLogOut />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            >
              Signin
            </button>
          </div>
        )}
      </header>

      {children}
    </div>
  );
};

export default MainLayout;
