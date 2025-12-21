import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Templates, in Next.js, allow for components whose state can be preserved on
// the same page but will reset upon navigating to a new page.
export default function RootTemplate({ children }) {
    return (
        <>
            <div id="mobileNavZone" className="lg:hidden">
                <MobileNav/>
            </div>
            <div id="desktopNavZone" className="hidden lg:block">
                <DesktopNav/>
            </div>
            {children}
        </>
    );
}