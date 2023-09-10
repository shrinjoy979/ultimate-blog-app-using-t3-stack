import React, { useContext } from "react";
import Modal from "../Modal";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type WriteFormType = {
  title: string;
  description: string;
  body: string;
};

const writeFormSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60),
  body: z.string().min(100),
});

const WriteFormModal = () => {
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteFormType>({
    resolver: zodResolver(writeFormSchema),
  });

  const onSubmit = (data: WriteFormType) => console.log(data);

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the blog"
          {...register("title")}
        />
        <p className="w-full pb-2 text-left text-sm text-red-500">
          {errors.title?.message}
        </p>
        <input
          type="text"
          id="shortDescription"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Short description about the blog"
          {...register("description")}
        />
        <p className="w-full pb-2 text-left text-sm text-red-500">
          {errors.description?.message}
        </p>
        <textarea
          id="mainBody"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Blog main body....."
          {...register("body")}
        />
        <p className="w-full pb-2 text-left text-sm text-red-500">
          {errors.body?.message}
        </p>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default WriteFormModal;
