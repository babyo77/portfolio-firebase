import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  const { url } = await searchParams;

  if (!url || typeof url !== "string") {
    redirect("/");
  }

  const youtubeRegex =
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)$/;
  const youtubeMatch = youtubeRegex.exec(url);

  if (youtubeMatch) {
    const videoId = youtubeMatch[2];
    redirect(`youtube://www.youtube.com/watch?v=${videoId}`);
  }

  const instagramRegex =
    /^https?:\/\/(www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?$/;
  const instagramMatch = instagramRegex.exec(url);

  if (instagramMatch) {
    const postId = instagramMatch[2];
    redirect(`instagram://www.instagram.com/p/${postId}`);
  }

  redirect(url);
}
