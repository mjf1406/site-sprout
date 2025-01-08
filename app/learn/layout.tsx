import HeaderLearn from "./_components/header-learn";
import FooterLearn from "./_components/footer-learn";

export default function LayoutLearn({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderLearn />
            <main className="p-6 min-h-screen">{children}</main>
            <FooterLearn />
        </>
    );
}
