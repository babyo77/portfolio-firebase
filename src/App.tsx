import { ReactLenis } from "@studio-freight/react-lenis";
import { Container, Header, ThemeProvider } from "./components";
import { Loader2 } from "./components/Loader";
import { useGetDetailsQuery } from "./store/detailsApi";

function App() {

const { data:Details,error} =useGetDetailsQuery()
console.log(error);

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {Details ? (
          Details && (
            <>
              <div className="absolute top-0 z-[-2] h-screen w-full  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

              <main className="container fade-in py-8">
                <Header
                  name={Details?.name}
                  username={Details?.username}
                  story={Details?.story}
                  github={Details.github}
                  twitter={Details.twitter}
                />
                <Container
                  techStack={Details?.techStack}
                  project={Details?.projects}
                />
              </main>
            </>
          )
        ) : (
          <div className="flex justify-center item-center">
            <div className=" flex-col h-svh flex gap-1 justify-center items-center">
              <Loader2 />
              <span className="text-[.7rem] lowercase">
                {error ? (error as {data:string}).data : "connecting..."}
              </span>
            </div>
          </div>
        )}
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
