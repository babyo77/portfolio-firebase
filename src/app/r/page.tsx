import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Page({ searchParams }: Props) {
  const { url } = await searchParams;
  if (!url || typeof url !== "string") {
    redirect("/");
  }
  redirect(url);
}
