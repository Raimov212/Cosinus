interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className="w-full flex flex-col gap-10">{children}</div>;
};

export default Header;
