import type { ComponentProps } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

export default function Link(props: ComponentProps<typeof NextLink>) {
    return <NextLink className={twMerge("text-blue-500 underline", props.className)} {...props} />;
}

