import { ReactLenis } from "@studio-freight/react-lenis";
import { Container, Header, ThemeProvider } from "./components";
import useDetails from "./hook/useDetails";
import { Loader2 } from "./components/Loader";


function App() {
  const Details = useDetails("https://details-alpha.vercel.app/");

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="system"  storageKey="vite-ui-theme">
        {Details ? (
          Details && (
            <>
        <div className="absolute top-0 z-[-2] h-screen w-screen  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
           
              <main className="container py-8">
                <Header
                  name={Details?.name}
                  username={Details?.username}
                  story={Details?.story}
                />
                <Container
                  techStack={Details?.techStack}
                  project={Details?.projects}
                />
              </main>
            </>
          )
        ) : (
          <div className="flex border h-screen justify-center item-center">
            <div className=" flex-col flex gap-1 justify-center items-center">
            <Loader2 />
           <span className="text-xs">connecting...</span>
            </div>
          </div>
        )}
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
