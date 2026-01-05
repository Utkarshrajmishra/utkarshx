const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`max-w-4xl  w-full h-fit ${className || ''}`}>
    {children}
  </section>;
};

export default Wrapper;
