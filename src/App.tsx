import { ReactLenis } from "@studio-freight/react-lenis";
import { Container, Header, ThemeProvider } from "./components";
import { Loader2 } from "./components/Loader";
import { useGetDetailsQuery } from "./store/detailsApi";

function App() {
  const { data: Details, error } = useGetDetailsQuery();

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {Details ? (
          Details && (
            <>
              <main className=" fade-in py-8">
                <Header
                  name={Details?.name}
                  username={Details?.username}
                  story={Details?.story}
                  github={Details.github}
                  twitter={Details.twitter}
                  leetCode={Details.leetCode}
                />
                <Container
                  discord={Details?.discord}
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
                {error ? (error as { data: string }).data : "connecting..."}
              </span>
            </div>
          </div>
        )}
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
