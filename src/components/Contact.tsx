import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ButtonLoading, Loader } from "./Loader";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FriendsInterface } from "@/interface";

export function Contact({ friend }: { friend: boolean }) {
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
              <Friend />
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <p className="text-xs cursor-pointer">
                let's build{" "}
                <span className="underline underline-offset-4">something</span>
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
            <Friend className="px-4" />
            <DrawerFooter className="pt-2"></DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <p className="text-xs cursor-pointer">
              let's build{" "}
              <span className="underline underline-offset-4">something</span>
            </p>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Let's Build.</DrawerTitle>
              <DrawerDescription>Enter you details.</DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">learning react hook form</div>
      <ButtonLoading />
    </form>
  );
}

function Friend({
  className,
  friendsList,
}: {
  className?: string;
  friendsList?: FriendsInterface[];
}) {

  return (
    <div className={className}>
      <div className="grid gap-2">
        {friendsList ? (
            friendsList.map((friendsList) => (
                <div className="w-full cursor-pointer">
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
                      {friendsList.fname}
                    </p>
                  </div>
                </div>
                <InstagramLogoIcon className="h-5 w-5 transition-all duration-300 group-hover:text-red-500" />
              </a>
            </div>
          ))
          ) : (
              <div className="w-full flex justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );

}
