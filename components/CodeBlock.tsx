import { codeToHtml } from "shiki";
import { twMerge } from "tailwind-merge";

type CodeToHtmlParams = Parameters<typeof codeToHtml>;

export default async function CodeBlock({ 
    code, 
    options,
    className
}: { 
    code: string;
    options?: CodeToHtmlParams[1];
    className?: string;
}) {
    const html = await codeToHtml(code, {
        theme: 'catppuccin-frappe',
        lang: 'tsx',
        ...options
    });

    return <div className={twMerge('my-4', className)} dangerouslySetInnerHTML={{ __html: html }}></div>;
}
