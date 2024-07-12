import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface ToastProps {
    title: string;
    description: string;
    actionText: string;
    actionAltText: string;
}

export function Toast(props: ToastProps) {
    const { toast } = useToast();

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    title: props.title,
                    description: props.description,
                    action: (
                        <ToastAction altText={props.actionAltText}>
                            {props.actionText}
                        </ToastAction>
                    ),
                });
            }}
        >
            Okay
        </Button>
    );
}

export default Toast;