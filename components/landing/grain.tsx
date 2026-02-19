const Grain = () => {
  return (
    <div className="pointer-events-none  fixed inset-0 z-100 opacity-10 mix-blend-soft-light">
      <svg className="h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default Grain