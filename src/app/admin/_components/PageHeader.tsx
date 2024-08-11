export default function PageHeader({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-4xl">
            {children}
        </div>
    );
}