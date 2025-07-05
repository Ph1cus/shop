type CardProps = {
    className?: string;
    children?:React.ReactNode
};

export function Card ({className = "", children}: CardProps) {
    return (
        <div className={`max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-center space-y-4 ${className}`} >
            {children}
        </div>
    )
}