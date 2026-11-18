export type ProfileVariantKey =
  | "fullstack"
  | "backend"
  | "devops"
  | "frontend"
  | "software";

/**
 * Opaque URL codes mapped to profile variants so the role name
 * is never exposed in the shared link.
 */
const CODE_TO_VARIANT: Record<string, ProfileVariantKey> = {
  f8m2: "fullstack",
  b4x9: "backend",
  d9v4: "devops",
  e7k3: "frontend",
  s2q6: "software",
};

export function resolveProfileVariant(): ProfileVariantKey {
  const pathCode = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const queryCode = new URLSearchParams(window.location.search).get("c") ?? "";
  const hashCode = window.location.hash.replace(/^#/, "");

  const code = pathCode || queryCode || hashCode;
  const matched = CODE_TO_VARIANT[code];

  if (matched && window.location.pathname !== "/") {
    window.history.replaceState(null, "", "/");
  } else if (matched && (window.location.search || window.location.hash)) {
    window.history.replaceState(null, "", "/");
  }

  return matched ?? "software";
}
