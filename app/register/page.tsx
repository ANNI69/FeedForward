import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
// import { useRouter } from "next/router";

export default function Register() {
  //   const router = useRouter();

  const handleDonor = () => {
    // router.push("/register/donor");
  };

  const handleReceiver = () => {
    // router.push("/register/receiver");
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild className="cursor-pointer">
          <h4 className="">
            {" "}
            {/* <EnvelopeOpenIcon className="mr-2 h-4 w-4" />  */}
            Register{" "}
          </h4>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {" "}
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
            </AlertDialogTitle>
            <AlertDialogDescription>
              To continue, please select your role
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <a href="/register/donor">
              <AlertDialogAction>Donor</AlertDialogAction>
            </a>
            <br />
            <a href="/register/reciever">
              <AlertDialogAction>Reciever</AlertDialogAction>
            </a>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
