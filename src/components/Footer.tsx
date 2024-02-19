import { Contact } from ".";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center pt-3 pb-5">
      <Contact friend={false} />
      <Contact friend={true} />
    </footer>
  );
};

export { Footer };
