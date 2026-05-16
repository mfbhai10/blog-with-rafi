export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.16)_1px,transparent_0)] bg-[length:40px_40px] dark:opacity-[0.28]" />

      <div className="animate-float-slow absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:top-24 sm:h-96 sm:w-96 dark:bg-primary/25" />

      <div className="animate-float-slow absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl sm:top-48 sm:h-[28rem] sm:w-[28rem] dark:bg-accent/20 [animation-delay:-7s]" />

      <div className="animate-pulse-soft absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-[26rem] sm:w-[26rem] dark:bg-accent/10 [animation-delay:-12s]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_55%,rgba(15,23,42,0.04)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0,transparent_55%,rgba(2,6,23,0.16)_100%)]" />
    </div>
  );
}