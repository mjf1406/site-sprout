import FooterTeacher from "./_components/footer-teacher";
import HeaderTeacher from "./_components/header-teacher";

export default function LayoutTeacher({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderTeacher />
            <main className="p-6 min-h-screen">{children}</main>
            <FooterTeacher />
        </>
    );
}
