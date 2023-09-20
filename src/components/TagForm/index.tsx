import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { trpc } from "../../utils/trpc";

export const tagCreateSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
});

type TagFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TagForm = ({ isOpen, onClose }: TagFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{
    name: string;
    description: true;
  }>({
    resolver: zodResolver(tagCreateSchema),
  });

  const createTag = trpc.tag.createTag.useMutation({
    onSuccess: () => {
      toast.success("Tag created");
      reset();
      onclose;
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create a Tag">
      <form
        onSubmit={handleSubmit((data: any) => createTag.mutate(data))}
        className="relative flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          id="name"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Name of the tag"
          {...register("name")}
        />
        <p className="w-full pb-2 text-left text-sm text-red-500">
          {errors.name?.message}
        </p>
        <input
          type="text"
          id="description"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Description of the tag"
          {...register("description")}
        />
        <p className="w-full pb-2 text-left text-sm text-red-500">
          {errors.description?.message}
        </p>
        <div className="flex w-full justify-end">
          <button
            className="w-fit space-x-3 whitespace-nowrap rounded border border-gray-200 px-4 py-2 text-sm transition hover:border-gray-900 hover:text-gray-900"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TagForm;
