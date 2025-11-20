import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgLoaderComponent from "./SVGLoaderComponent";

export default function SubmitButton({ children, className, ...rest }) {
    const { pending } = useFormStatus();

    return (
        <Button
            {...rest}
            className={`flex items-center justify-center gap-x-4 py-4 w-full 
            ${className}`}
            disabled={pending}
        >
            {children}
            {pending && <SvgLoaderComponent />}
        </Button>
    )
};

