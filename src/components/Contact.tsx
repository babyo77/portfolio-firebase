import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ButtonLoading, Loader } from "./Loader";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FriendsInterface } from "@/interface";
import { UseSubmitFromData } from "@/hook/FormSubmit";
import { FetchDetails } from "@/hook/FetchDetails";
import { useGetDetailsQuery } from "@/store/detailsApi";
const FormSchema = z.object({
  name: z.string().min(3).max(30, {
    message: "Username must be between 4 and 30 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10),
});

export function Contact({ friend }: { friend: boolean }) {
  const { data } = useGetDetailsQuery();
  const { FetchedData, error } = FetchDetails(
    `https://details-alpha.vercel.app/details/${data?.friends.toString()}`
  );

  const [open, setOpen] = React.useState(false);
  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    return (
      <>
        {friend ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <p className="text-xs cursor-pointer">
                <span className="underline underline-offset-4">friends</span>
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Friends.</DialogTitle>
              </DialogHeader>
              {FetchedData ? (
                <Friend friendsList={FetchedData} />
              ) : (
                <div className="w-full items-center flex flex-col gap-2 justify-center">
                  <Loader />
                  <span className="text-xs">{error?.response.data}</span>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <p className="text-xs cursor-pointer">
                <span className="underline underline-offset-4">
                  let's build something
                </span>
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Let's Build.</DialogTitle>
                <DialogDescription>Enter you details.</DialogDescription>
              </DialogHeader>
              <ProfileForm />
            </DialogContent>
          </Dialog>
        )}
      </>
    );
  }
  return (
    <>
      {friend ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <p className="text-xs cursor-pointer">
              <span className="underline underline-offset-4 mr-4">friends</span>
            </p>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Friends.</DrawerTitle>
            </DrawerHeader>
            {FetchedData ? (
              <Friend className="px-4" friendsList={FetchedData} />
            ) : (
              <div className="w-full flex items-center flex-col gap-2 justify-center">
                <Loader />
                <span className="text-xs">{error?.response.data}</span>
              </div>
            )}

            <DrawerFooter className="pt-2"></DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <p className="text-xs cursor-pointer">
              <span className="underline underline-offset-4">
                let's build something
              </span>
            </p>
          </DialogTrigger>
          <DialogContent className="rounded-lg w-[84svw]">
            <DialogHeader>
              <DialogTitle>Let's Build.</DialogTitle>
              <DialogDescription>Enter you details.</DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const { error, isError, isLoading, isIdle, mutate, isSuccess } =
    UseSubmitFromData();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(JSON.stringify(data), {
      onSuccess: () => {
        form.reset();
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4 text-xs", className)}
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="naruto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="naruto@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-24"
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading && <ButtonLoading />}
        {isError && (
          <Button className="bg-red-500" type="submit">
            {(error as { message: string }).message}
          </Button>
        )}
        {isIdle && <Button type="submit">Submit</Button>}

        {isSuccess && (
          <Button disabled={true} className="bg-green-300 text-black">
            Message Received
          </Button>
        )}
      </form>
    </Form>
  );
}

function Friend({
  className,
  friendsList,
}: {
  className?: string;
  friendsList: FriendsInterface[];
}) {
  return (
    <div className={className}>
      <div className="grid gap-3 text-sm">
        {friendsList?.map((friendsList) => (
          <div key={friendsList.username} className="w-full cursor-pointer">
            <a
              href={friendsList.url}
              target="_blank"
              className="flex group transition-all duration-300 justify-between items-center"
            >
              <div className="flex gap-2  items-center">
                <Avatar>
                  <AvatarImage src={friendsList.dp} />
                  <AvatarFallback>FR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="transition-all duration-300 group-hover:text-red-500 ">
                    {friendsList.username}
                  </h3>
                  <p className="text-[.7rem] text-zinc-500  -mt-1">
                    {friendsList.fname || "instagram blocked tanmay scaping 😞"}
                  </p>
                </div>
              </div>
              <InstagramLogoIcon className="h-5 w-5 transition-all duration-300 group-hover:text-red-500" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
