/**
 * VETTR "V" logo mark — stylised angular V with wing-like arms.
 * Accepts className for sizing (defaults to w-8 h-8) and an optional color prop.
 * When color="currentColor", inherits text color from parent.
 */
export function VLogo({
  className = "w-8 h-8",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VETTR logo"
    >
      <path
        d="M256 440L100 200L140 120L256 320L372 120L412 200L256 440Z"
        fill={color}
      />
      <path
        d="M140 120L40 120L100 200L140 120Z"
        fill={color}
      />
      <path
        d="M372 120L472 120L412 200L372 120Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Full VETTR wordmark: V-logo icon + "ETTR" text.
 * size controls the icon dimensions and corresponding text size.
 */
export function VettrWordmark({
  size = "default",
  className = "",
}: {
  size?: "sm" | "default" | "lg";
  className?: string;
}) {
  const sizeMap = {
    sm: { icon: "w-5 h-5", text: "text-lg", gap: "gap-0.5" },
    default: { icon: "w-7 h-7", text: "text-2xl", gap: "gap-1" },
    lg: { icon: "w-10 h-10", text: "text-4xl", gap: "gap-1.5" },
  };

  const s = sizeMap[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <VLogo className={s.icon} color="#00E676" />
      <span className={`${s.text} font-bold tracking-tight text-white`}>
        ETTR
      </span>
    </span>
  );
}
