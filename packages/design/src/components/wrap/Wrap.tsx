import { useEffect, useRef } from 'react';

type Props = {
    children: React.ReactNode;
    position?: 'relative' | 'absolute' | 'static' | 'sticky' | 'fixed';
    justify?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
    direction?: 'row' | 'column';
    align?: 'center' | 'flex-start' | 'flex-end';
    gap?: string;
    margin?: string;
    padding?: string;
    width?: string;
};

function Wrap({
    position = 'relative',
    children,
    justify,
    align = 'center',
    direction = 'column',
    gap,
    margin,
    padding,
    width = '100%',
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const inlineStyle = {
        position,
        display: 'flex',
        'flex-direction': direction,
        ' align-items': align,
        'justify-content': justify,
        width,
        gap,
        margin,
        padding,
        boxSizing: "border-box"
    };
    useEffect(() => {
        if (ref.current) {
            Object.entries(inlineStyle).forEach(([key, value]) => {
                value && ref.current && ref.current.style.setProperty(key, value || '');
            });
        }
    }, [inlineStyle]);
    return <div ref={ref}>{children}</div>;
}

export default Wrap;
