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
    redirect(`youtube://${url.replace("http://", "")}`);
  }

  const instagramRegex =
    /^https?:\/\/(www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?$/;
  const instagramMatch = instagramRegex.exec(url);

  if (instagramMatch) {
    redirect(`instagram://${url.replace("http://", "")}`);
  }

  redirect(url);
}
