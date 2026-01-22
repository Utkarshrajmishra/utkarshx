const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`max-w-3xl  px-5 w-screen h-fit font-host ${className || ''}`}>
    {children}
  </section>;
};

export default Wrapper;
