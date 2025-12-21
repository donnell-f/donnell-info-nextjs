import "./globals.css";

export const metadata = {
    title: "Donnell Info",
    description: "Donnell's website.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
