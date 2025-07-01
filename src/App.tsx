import Cookies from "js-cookie";

import { ThemeProvider } from "./components/providers/theme-provider";
import { AppSidebar } from "./components/ui/AppSidebar";
import { Navbar } from "./components/ui/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import { Home } from "./pages/Home/Home";

const App = () => {
  const defaultOpen = Cookies.get("sidebar_state") === "true";

  return (
    <ThemeProvider defaultTheme="dark" storageKey="dash-ui-theme">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">
            <Home />
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
