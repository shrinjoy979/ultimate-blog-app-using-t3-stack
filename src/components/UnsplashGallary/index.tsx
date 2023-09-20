import React, { useState } from "react";
import { trpc } from "../../utils/trpc";
import useDebounce from "../../hooks/useDebounce";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../Modal";
import Image from "next/image";
import { BiLoaderAlt } from "react-icons/bi";

export const unsplashSearchRouteSchema = z.object({
  searchQuery: z.string().min(5),
});

type UnsplashGallaryProps = {
  isUnsplashModalOpen: boolean;
  setIsUnsplashModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string;
};

const UnsplashGallary = ({
  isUnsplashModalOpen,
  setIsUnsplashModalOpen,
  postId,
}: UnsplashGallaryProps) => {
  const { register, watch } = useForm<{ searchQuery: string }>({
    resolver: zodResolver(unsplashSearchRouteSchema),
  });

  const watchSearchQuery = watch("searchQuery");
  const debounceSearchQuery = useDebounce(watchSearchQuery, 3000);

  const fetchUnsplashImages = trpc.unsplash.getImages.useQuery(
    {
      searchQuery: debounceSearchQuery,
    },
    {
      enabled: Boolean(debounceSearchQuery),
    }
  );

  const [selectedImage, setSelectedImage] = useState("");

  return (
    <Modal
      isOpen={isUnsplashModalOpen}
      onClose={() => setIsUnsplashModalOpen(false)}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <input
          type="text"
          id="search"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          {...register("searchQuery")}
        />

        {debounceSearchQuery && fetchUnsplashImages.isLoading && (
          <div className="flex h-56 w-full items-center justify-center">
            <BiLoaderAlt className="animate-spin" />
          </div>
        )}
        <div className="relative grid h-96 w-full grid-cols-3 place-items-center gap-4 overflow-y-scroll">
          {fetchUnsplashImages.isSuccess &&
            fetchUnsplashImages.data?.results.map((imageData: any) => (
              <div
                key={imageData.id}
                className="relative aspect-video h-full w-full hover:bg-black/40"
                onClick={() => setSelectedImage(imageData.urls.full)}
              >
                <Image
                  src={imageData.urls.thumb}
                  alt={imageData.alt_description ?? ""}
                  fill
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
              </div>
            ))}
        </div>
        {selectedImage && (
          <button
            type="submit"
            className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            onClick={() => {
              // Update
            }}
          >
            Confirm
          </button>
        )}
      </div>
    </Modal>
  );
};

export default UnsplashGallary;
