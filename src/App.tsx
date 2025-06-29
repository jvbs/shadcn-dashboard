import { ThemeProvider } from "./components/providers/theme-provider";
import { AppSidebar } from "./components/ui/AppSidebar";
import { Navbar } from "./components/ui/Navbar";

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dash-ui-theme">
      <AppSidebar />
      <div className="antialiased flex">
        <main className="w-full">
          <Navbar />
          <div className="px-4">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
