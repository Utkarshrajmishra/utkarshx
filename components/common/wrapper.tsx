const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`max-w-3xl  w-screen h-fit ${className || ''}`}>
    {children}
  </section>;
};

export default Wrapper;
