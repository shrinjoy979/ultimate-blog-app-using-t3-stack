import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const PostPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <div className="w-full max-w-screen-lg flex-col space-y-6">
          <div className="h-[60vh] w-full rounded-xl bg-gray-300 shadow-lg"></div>
          <div className="border-l-4 border-gray-800 pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            debitis esse, sed sapiente quas facere, recusandae earum similique
            fugiat cumque distinctio dolor numquam dignissimos tempora.
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            fugit rem doloremque itaque voluptatum! Nulla quam repudiandae
            dolorum provident, esse ipsa, accusantium fugit omnis repellendus
            minima voluptates velit quaerat, illum numquam dignissimos iure
            cupiditate impedit qui quia assumenda maxime doloremque nostrum aut
            consequuntur? Eos, fugiat modi explicabo placeat sequi dicta fugit
            officia saepe veniam adipisci accusamus vitae sunt in minus
            doloribus voluptatum molestias amet deserunt deleniti molestiae
            laborum ab quos accusantium odit! Provident cupiditate repellat
            vitae laboriosam. Quibusdam amet inventore saepe. Laboriosam facilis
            corporis totam culpa amet tempora ex quidem error temporibus, nobis
            cumque repudiandae aliquid. Adipisci doloremque maxime velit!
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostPage;
