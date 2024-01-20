const Footer: React.FC = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Designed by 
          <a
            href="https://twitter.com/tanmay11117"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 px-1"
          >
            
        tanmay.
          </a>
          
        </p>
      </div>
    </footer>
  );
};

export {Footer}