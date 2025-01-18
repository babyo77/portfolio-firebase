import { redirect } from "next/navigation";
import Redirect from "./redirect";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  const { url } = await searchParams;

  if (!url || typeof url !== "string") {
    redirect("/");
  }

  return <Redirect url={url} />;
}
