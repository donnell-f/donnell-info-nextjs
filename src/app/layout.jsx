import "./globals.css";

export const metadata = {
    title: "Donnell Info",
    description: "Donnell's website.",
    icons: {
        // Idk why this is a potted plant. I need to change it to something
        // better in the future.
        icon: "favicon.png"
    }
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
