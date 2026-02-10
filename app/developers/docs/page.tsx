import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Reference | VETTR Developers",
  description:
    "Complete API reference for the VETTR REST API. Browse all endpoints grouped by resource, with methods, paths, and descriptions.",
};

interface PathItem {
  summary?: string;
  description?: string;
  tags?: string[];
}

interface OpenAPISpec {
  info?: {
    title?: string;
    version?: string;
    description?: string;
  };
  paths?: Record<string, Record<string, PathItem>>;
  tags?: Array<{ name: string; description?: string }>;
}

interface EndpointInfo {
  method: string;
  path: string;
  summary: string;
  description: string;
}

interface TagGroup {
  name: string;
  description: string;
  endpoints: EndpointInfo[];
}

async function getApiSpec(): Promise<OpenAPISpec> {
  try {
    const res = await fetch("https://vettr-backend.vercel.app/openapi.json", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return {};
    return res.json();
  } catch {
    return {};
  }
}

function groupEndpointsByTag(spec: OpenAPISpec): TagGroup[] {
  const tagMap = new Map<string, TagGroup>();

  // Initialize from spec tags
  if (spec.tags) {
    for (const tag of spec.tags) {
      tagMap.set(tag.name, {
        name: tag.name,
        description: tag.description || "",
        endpoints: [],
      });
    }
  }

  // Parse paths
  if (spec.paths) {
    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, details] of Object.entries(methods)) {
        if (
          method === "parameters" ||
          method === "servers" ||
          method === "$ref"
        )
          continue;
        const info = details as PathItem;
        const tags = info.tags || ["Other"];

        for (const tag of tags) {
          if (!tagMap.has(tag)) {
            tagMap.set(tag, {
              name: tag,
              description: "",
              endpoints: [],
            });
          }
          tagMap.get(tag)!.endpoints.push({
            method: method.toUpperCase(),
            path,
            summary: info.summary || "",
            description: info.description || "",
          });
        }
      }
    }
  }

  return Array.from(tagMap.values()).filter(
    (group) => group.endpoints.length > 0
  );
}

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-500/10 text-green-400 border-green-500/20",
    POST: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    PUT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    PATCH: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    DELETE: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded text-xs font-bold border min-w-[56px] ${
        colors[method] || "bg-gray-500/10 text-gray-400 border-gray-500/20"
      }`}
    >
      {method}
    </span>
  );
}

export default async function DocsPage() {
  const spec = await getApiSpec();
  const groups = groupEndpointsByTag(spec);
  const totalEndpoints = groups.reduce(
    (sum, g) => sum + g.endpoints.length,
    0
  );

  return (
    <>
      {/* Header */}
      <section className="bg-vettr-dark/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/developers"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  &larr; Developer Portal
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                API Reference
              </h1>
              <p className="text-gray-400 max-w-2xl">
                {spec.info?.description ||
                  "Complete reference for all VETTR API endpoints. Browse by resource group, view request methods, and jump to interactive testing."}
              </p>
              {totalEndpoints > 0 && (
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <span>
                    Version:{" "}
                    <span className="text-gray-300">
                      {spec.info?.version || "1.0"}
                    </span>
                  </span>
                  <span className="text-white/20">|</span>
                  <span>
                    <span className="text-gray-300">{totalEndpoints}</span>{" "}
                    endpoints
                  </span>
                  <span className="text-white/20">|</span>
                  <span>
                    <span className="text-gray-300">{groups.length}</span>{" "}
                    groups
                  </span>
                </div>
              )}
            </div>
            <Link
              href="/developers/swagger"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-vettr-accent text-vettr-navy font-semibold rounded-lg hover:bg-vettr-accent/90 transition-colors text-sm"
            >
              Try it in Swagger UI
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Swagger Link */}
      <div className="sm:hidden px-4 py-3 bg-vettr-dark/40 border-b border-white/5">
        <Link
          href="/developers/swagger"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-vettr-accent text-vettr-navy font-semibold rounded-lg text-sm"
        >
          Try it in Swagger UI &rarr;
        </Link>
      </div>

      {/* Endpoint Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {groups.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Unable to load API specification
            </h3>
            <p className="text-gray-400 mb-6">
              The OpenAPI spec could not be fetched. Try the interactive
              documentation instead.
            </p>
            <Link
              href="/developers/swagger"
              className="px-6 py-3 bg-vettr-accent text-vettr-navy font-semibold rounded-lg hover:bg-vettr-accent/90 transition-colors"
            >
              Open Swagger UI
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Tag Navigation */}
            <div className="flex flex-wrap gap-2">
              {groups.map((group) => (
                <a
                  key={group.name}
                  href={`#${group.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-1.5 text-sm rounded-full bg-vettr-card/50 border border-white/5 text-gray-300 hover:border-vettr-accent/30 hover:text-vettr-accent transition-all"
                >
                  {group.name}
                  <span className="ml-1.5 text-gray-500">
                    {group.endpoints.length}
                  </span>
                </a>
              ))}
            </div>

            {/* Endpoint Groups */}
            {groups.map((group) => (
              <div
                key={group.name}
                id={group.name.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    {group.name}
                  </h2>
                  {group.description && (
                    <p className="text-gray-400 text-sm mt-1">
                      {group.description}
                    </p>
                  )}
                </div>

                <div className="bg-vettr-card/50 rounded-2xl border border-white/5 overflow-hidden divide-y divide-white/5">
                  {group.endpoints.map((endpoint, i) => (
                    <div
                      key={`${endpoint.method}-${endpoint.path}-${i}`}
                      className="flex items-start gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex-shrink-0 pt-0.5">
                        <MethodBadge method={endpoint.method} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <code className="text-sm font-mono text-white break-all">
                          {endpoint.path}
                        </code>
                        {endpoint.summary && (
                          <p className="text-sm text-gray-400 mt-1">
                            {endpoint.summary}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to test these endpoints?
          </h2>
          <p className="text-gray-400 mb-6">
            Use the interactive Swagger UI to make live API calls directly
            from your browser.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/developers/swagger"
              className="px-6 py-3 bg-vettr-accent text-vettr-navy font-semibold rounded-lg hover:bg-vettr-accent/90 transition-colors"
            >
              Open Swagger UI
            </Link>
            <Link
              href="/developers"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10"
            >
              Back to Portal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
