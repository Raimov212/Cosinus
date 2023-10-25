interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className="w-full flex flex-col">{children}</div>;
};

export default Header;
