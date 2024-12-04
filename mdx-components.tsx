import type { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;

const components = {
    h1: (props: HeadingProps) => <h1 className="text-balance font-black text-4xl mt-8 mb-4"  {...props} />,
    h2: (props: HeadingProps) => <h2 className="text-balance text-gray-100  text-xl font-bold pt-8 mb-4" {...props} />,
    h3: (props: HeadingProps) => <h3 className="text-balance text-gray-100  text-lg font-bold pt-8 mb-4" {...props} />,
    h4: (props: HeadingProps) => <h4 className="text-balance text-gray-100  font-bold pt-8 mb-4" {...props} />,
    p: (props: ParagraphProps) => <p className="mt-4 text-gray-100" {...props} />,
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
        <table>
            <thead>
                <tr>
                {data.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, index) => (
                <tr key={index}>
                    {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    ),
};

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
    return {
        ...otherComponents,
        ...components
    };
}
