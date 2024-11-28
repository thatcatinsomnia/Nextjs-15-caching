import type { ComponentProps } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

export default function Link(props: ComponentProps<typeof NextLink>) {
    const { className, ...restProps} = props;

    return <NextLink className={twMerge("text-blue-500 underline", props.className)} {...restProps} />;
}

