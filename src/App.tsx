import { ThemeProvider } from "./components/providers/theme-provider";
import { AppSidebar } from "./components/ui/AppSidebar";
import { Navbar } from "./components/ui/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import Cookies from "js-cookie";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const defaultOpen = Cookies.get("sidebar_state") === "true";

  return (
    <ThemeProvider defaultTheme="dark" storageKey="dash-ui-theme">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">{children}</div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
