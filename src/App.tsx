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
           <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
           
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
