type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' ;   

type TypogrophyProps = {
    className?:string;
    tag: TagVariants;
    children: React.ReactNode;
};

const Text = ({tag, children, className = ""}: TypogrophyProps) => {
    const Component = tag;
    return <Component className={className}>{children}</Component>
};

export const Heading1 =({
    children,
    className,
} : {
    className?:string;
    children: React.ReactNode;
}) => (
    <Text
    tag = "h1"
    className={`"text-3xl sm:text-3xl font-extrabold  mb-4 text-center" ${className}`}>
    {children}
    </Text>
);
export const Heading2 =({
    children,
    className,
} : {
    className?:string;
    children: React.ReactNode;
}) => (
    <Text
    tag = "h2"
    className={`"text-2xl font-bold text-gray-900" ${className}`}>
    {children}
    </Text>
);
export const Heading3 =({
    children,
    className,
} : {
    className?:string;
    children: React.ReactNode;
}) => (
    <Text
    tag = "h3"
    className={`"text-xl font-bold text-gray-800" ${className}`}>
    {children}
    </Text>
);