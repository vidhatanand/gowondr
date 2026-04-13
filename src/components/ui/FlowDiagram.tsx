import { type ReactNode } from "react";

interface FlowNode {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  variant?: "default" | "teal" | "terracotta" | "success" | "warning";
}

interface FlowConnection {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}

interface FlowGroup {
  label: string;
  nodeIds: string[];
}

interface FlowDiagramProps {
  title?: string;
  caption?: string;
  nodes: FlowNode[];
  connections: FlowConnection[];
  groups?: FlowGroup[];
  direction?: "horizontal" | "vertical";
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: "bg-teal-soft border-teal/20 text-ink",
  teal: "bg-teal text-paper border-teal",
  terracotta: "bg-terracotta-soft border-terracotta/20 text-ink",
  success: "bg-strong-soft border-strong-ink/20 text-ink",
  warning: "bg-refresh-soft border-refresh-ink/20 text-ink",
};

function FlowNodeCard({ node }: { node: FlowNode }) {
  const variant = node.variant || "default";
  return (
    <div
      className={`rounded-xl border px-3 py-2.5 md:px-4 md:py-3 text-center min-w-[100px] max-w-[180px] ${variantStyles[variant]}`}
    >
      {node.icon && (
        <div className="flex justify-center mb-1.5 text-teal">{node.icon}</div>
      )}
      <p className="font-body font-semibold text-[14px] leading-tight">
        {node.label}
      </p>
      {node.description && (
        <p className="mt-1 text-[12px] leading-snug opacity-70">
          {node.description}
        </p>
      )}
    </div>
  );
}

function Arrow({
  label,
  dashed,
  vertical,
}: {
  label?: string;
  dashed?: boolean;
  vertical?: boolean;
}) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0.5 py-1">
        <div
          className={`w-px h-6 ${dashed ? "border-l border-dashed border-teal/40" : "bg-teal/30"}`}
        />
        {label && (
          <span className="text-[11px] text-slate italic px-1">{label}</span>
        )}
        <svg width="12" height="8" className="text-teal/40">
          <path d="M0 0 L6 8 L12 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-0.5 px-1 shrink-0">
      <div
        className={`h-px w-6 md:w-10 ${dashed ? "border-t border-dashed border-teal/40" : "bg-teal/30"}`}
      />
      {label && (
        <span className="text-[11px] text-slate italic whitespace-nowrap">
          {label}
        </span>
      )}
      <svg width="8" height="12" className="text-teal/40 shrink-0">
        <path d="M0 0 L8 6 L0 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function FlowDiagram({
  title,
  caption,
  nodes,
  connections,
  groups,
  direction = "horizontal",
  className = "",
}: FlowDiagramProps) {
  // Build adjacency for rendering order
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // If groups exist, render grouped layout
  if (groups && groups.length > 0) {
    return (
      <figure className={`mx-auto max-w-[960px] ${className}`} role="img" aria-label={title || "Flow diagram"}>
        {title && (
          <figcaption className="text-center mb-4">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
              {title}
            </span>
          </figcaption>
        )}
        <div className="rounded-2xl border border-sand bg-paper-alt p-4 md:p-6 overflow-hidden">
          <div className={`flex flex-col ${direction === "horizontal" ? "md:flex-row md:flex-wrap" : ""} items-center gap-4 md:gap-3 justify-center`}>
            {groups.map((group, gi) => (
              <div key={group.label} className="flex flex-col md:flex-row items-center gap-3 min-w-0">
                {gi > 0 && (
                  <Arrow
                    label={connections.find((c) => {
                      const prevGroupIds = groups[gi - 1].nodeIds;
                      return prevGroupIds.includes(c.from) && group.nodeIds.includes(c.to);
                    })?.label}
                    dashed={connections.find((c) => {
                      const prevGroupIds = groups[gi - 1].nodeIds;
                      return prevGroupIds.includes(c.from) && group.nodeIds.includes(c.to);
                    })?.dashed}
                    vertical={direction !== "horizontal"}
                  />
                )}
                <div className="rounded-xl border border-sand/60 bg-paper p-3 md:p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate mb-2 text-center">
                    {group.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    {group.nodeIds.map((id) => {
                      const node = nodeMap.get(id);
                      return node ? <FlowNodeCard key={id} node={node} /> : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {caption && (
          <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[640px] mx-auto">
            {caption}
          </p>
        )}
      </figure>
    );
  }

  // Simple linear flow (no groups)
  // Determine flow from connections order
  const orderedNodes: FlowNode[] = [];
  const visited = new Set<string>();

  // Find start node (not a target of any connection)
  const targets = new Set(connections.map((c) => c.to));
  const startNode = nodes.find((n) => !targets.has(n.id));
  if (startNode) {
    let current: string | undefined = startNode.id;
    while (current && !visited.has(current)) {
      visited.add(current);
      const node = nodeMap.get(current);
      if (node) orderedNodes.push(node);
      const next = connections.find((c) => c.from === current);
      current = next?.to;
    }
  }
  // Add any remaining nodes
  nodes.forEach((n) => {
    if (!visited.has(n.id)) orderedNodes.push(n);
  });

  return (
    <figure className={`mx-auto max-w-[960px] ${className}`} role="img" aria-label={title || "Flow diagram"}>
      {title && (
        <figcaption className="text-center mb-4">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
            {title}
          </span>
        </figcaption>
      )}
      <div className="rounded-2xl border border-sand bg-paper-alt p-4 md:p-6 overflow-x-auto">
        <div
          className={`flex ${
            direction === "horizontal" ? "flex-col md:flex-row" : "flex-col"
          } items-center justify-center gap-0`}
        >
          {orderedNodes.map((node, i) => {
            const conn = connections.find((c) => c.from === node.id);
            return (
              <div
                key={node.id}
                className={`flex ${
                  direction === "horizontal"
                    ? "flex-col md:flex-row"
                    : "flex-col"
                } items-center`}
              >
                <FlowNodeCard node={node} />
                {i < orderedNodes.length - 1 && conn && (
                  <Arrow
                    label={conn.label}
                    dashed={conn.dashed}
                    vertical={direction !== "horizontal"}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {caption && (
        <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[640px] mx-auto">
          {caption}
        </p>
      )}
    </figure>
  );
}

// Convenience: Comparison diagram (two paths side by side)
interface ComparisonPath {
  label: string;
  variant: "success" | "warning";
  steps: { label: string; description?: string }[];
  outcome: { label: string; description?: string };
}

interface FlowComparisonProps {
  title?: string;
  caption?: string;
  left: ComparisonPath;
  right: ComparisonPath;
  className?: string;
}

export function FlowComparison({
  title,
  caption,
  left,
  right,
  className = "",
}: FlowComparisonProps) {
  const pathVariants = {
    success: {
      bg: "bg-strong-soft",
      border: "border-strong-ink/20",
      badge: "bg-strong-ink text-paper",
      dot: "bg-strong-ink",
    },
    warning: {
      bg: "bg-refresh-soft",
      border: "border-refresh-ink/20",
      badge: "bg-refresh-ink text-paper",
      dot: "bg-refresh-ink",
    },
  };

  function PathColumn({ path }: { path: ComparisonPath }) {
    const v = pathVariants[path.variant];
    return (
      <div className={`flex-1 rounded-xl border ${v.border} ${v.bg} p-4 md:p-5`}>
        <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-full ${v.badge} mb-3`}>
          {path.label}
        </span>
        <div className="space-y-2.5">
          {path.steps.map((step, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${v.dot} mt-1.5 shrink-0`} />
              <div>
                <p className="font-body font-semibold text-[14px] text-ink leading-tight">
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-[12px] text-slate mt-0.5">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Outcome */}
        <div className={`mt-3 pt-3 border-t ${v.border}`}>
          <p className="font-body font-semibold text-[14px] text-ink">
            {path.outcome.label}
          </p>
          {path.outcome.description && (
            <p className="text-[12px] text-slate mt-0.5">{path.outcome.description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <figure className={`mx-auto max-w-[900px] ${className}`} role="img" aria-label={title || "Comparison"}>
      {title && (
        <figcaption className="text-center mb-4">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
            {title}
          </span>
        </figcaption>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PathColumn path={left} />
        <PathColumn path={right} />
      </div>
      {caption && (
        <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[640px] mx-auto">
          {caption}
        </p>
      )}
    </figure>
  );
}
