export const StarBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle Radial Glows for Modern Depth */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-sky-500/5 dark:bg-sky-500/5 blur-3xl" />

      {/* Subtle Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
};
