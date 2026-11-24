import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search,
  Terminal,
  Copy,
  Check,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  Layers,
  GitBranch,
  RefreshCw,
  ShieldCheck,
  Database,
  Sun,
  Moon,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  FileCode,
  Play,
  Sliders,
  Menu,
  X,
  CheckCircle2,
  Info,
  Braces,
  Workflow,
  Hash,
  Users,
  Home,
  Gauge,
  Zap,
  Package,
  Radio,
  AlertCircle,
  SlidersHorizontal,
  Download,
  BarChart3,
  Scale,
  FileJson
} from 'lucide-react';

const DISCORD_INVITE_CODE = 'G3BcYgZYf';
const DISCORD_INVITE_URL = `https://discord.gg/${DISCORD_INVITE_CODE}`;
const DISCORD_DESKTOP_URI = `discord://-/invite/${DISCORD_INVITE_CODE}`;
const DISCORD_API_INVITE_URL = `https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true&with_expiration=true`;

const NPM_PACKAGE_NAME = '@nexus-orm/nexus';
const NPM_PACKAGE_URL = 'https://www.npmjs.com/package/@nexus-orm/nexus';
const NPM_REGISTRY_LATEST_URL = 'https://registry.npmjs.org/@nexus-orm/nexus/latest';
const NPM_REGISTRY_FULL_URL = 'https://registry.npmjs.org/@nexus-orm/nexus';

// ============================================================================
// VERIFIED BENCHMARK DATASET (`results.json` — Bun 1.4.4 + SQLite, 5,000 ops)
// Exact unedited metrics from uploaded results.json
// ============================================================================
const REAL_BENCHMARK_ARTIFACT = {
  generatedAt: '2026-11-24T17:40:08.553Z',
  runtime: 'Bun 1.4.4',
  database: 'SQLite',
  iterationsPerRound: 1000,
  warmup: 100,
  rounds: 5,
  results: {
    Nexus: {
      findUnique: {
        operations: 5000,
        avgMs: 0.2136209000000001,
        p50Ms: 0.20280000000002474,
        p95Ms: 0.2966999999999871,
        p99Ms: 0.462099999999964,
        opsPerSecond: 4681.189902298883
      },
      filteredRead: {
        operations: 5000,
        avgMs: 1.4005988199999937,
        p50Ms: 1.2269999999998618,
        p95Ms: 2.2148000000006505,
        p99Ms: 2.4985999999998967,
        opsPerSecond: 713.9803245014904
      },
      create: {
        operations: 5000,
        avgMs: 7.432296520000053,
        p50Ms: 6.41019999999844,
        p95Ms: 7.5701999999982945,
        p99Ms: 11.211699999999837,
        opsPerSecond: 134.5479149424454
      },
      update: {
        operations: 5000,
        avgMs: 7.091101719999977,
        p50Ms: 6.4306999999971595,
        p95Ms: 7.458600000012666,
        p99Ms: 10.107000000003609,
        opsPerSecond: 141.02181007777213
      },
      delete: {
        operations: 5000,
        avgMs: 15.012728560000111,
        p50Ms: 13.057100000005448,
        p95Ms: 15.397600000011153,
        p99Ms: 34.25789999999688,
        opsPerSecond: 66.61014325299921
      },
      count: {
        operations: 5000,
        avgMs: 0.5920320399999677,
        p50Ms: 0.5899000000208616,
        p95Ms: 0.9337999999988824,
        p99Ms: 1.1349000000045635,
        opsPerSecond: 1689.0977724787574
      },
      exists: {
        operations: 5000,
        avgMs: 0.2959667800001625,
        p50Ms: 0.28750000000582077,
        p95Ms: 0.44210000001476146,
        p99Ms: 0.5460000000020955,
        opsPerSecond: 3378.7575754260356
      },
      bulkInsert100: {
        operations: 5000,
        avgMs: 15.15773811999989,
        p50Ms: 13.61679999998887,
        p95Ms: 17.741900000022724,
        p99Ms: 85.50990000000456,
        opsPerSecond: 65.97290387808913
      },
      transaction: {
        operations: 5000,
        avgMs: 9.111846939999644,
        p50Ms: 7.868799999996554,
        p95Ms: 10.934300000022631,
        p99Ms: 17.475999999966007,
        opsPerSecond: 109.74723418697363
      }
    },
    Prisma: {
      findUnique: {
        operations: 5000,
        avgMs: 0.35768013999990655,
        p50Ms: 0.30760000000009313,
        p95Ms: 0.5690000000176951,
        p99Ms: 0.6917999999714084,
        opsPerSecond: 2795.7940298286094
      },
      filteredRead: {
        operations: 5000,
        avgMs: 1.6390872000003116,
        p50Ms: 1.380399999965448,
        p95Ms: 2.595000000030268,
        p99Ms: 2.819100000022445,
        opsPerSecond: 610.0956678813732
      },
      create: {
        operations: 5000,
        avgMs: 9.876539279999445,
        p50Ms: 8.896900000050664,
        p95Ms: 10.23210000002291,
        p99Ms: 13.084000000031665,
        opsPerSecond: 101.25004028739671
      },
      update: {
        operations: 5000,
        avgMs: 9.469408760000043,
        p50Ms: 8.571300000010524,
        p95Ms: 9.604899999976624,
        p99Ms: 12.243099999963306,
        opsPerSecond: 105.60321402790468
      },
      delete: {
        operations: 5000,
        avgMs: 19.634824320000668,
        p50Ms: 17.64030000002822,
        p95Ms: 19.7954000000027,
        p99Ms: 24.098300000012387,
        opsPerSecond: 50.929918378814705
      },
      count: {
        operations: 5000,
        avgMs: 0.859506199999759,
        p50Ms: 0.7511999999987893,
        p95Ms: 1.23230000003241,
        p99Ms: 1.3220000000437722,
        opsPerSecond: 1163.4587394486282
      },
      exists: {
        operations: 5000,
        avgMs: 0.30702066000009653,
        p50Ms: 0.2554999999701977,
        p95Ms: 0.4887999999918975,
        p99Ms: 0.5546999999787658,
        opsPerSecond: 3257.109798407982
      },
      bulkInsert100: {
        operations: 5000,
        avgMs: 17.843431259998983,
        p50Ms: 16.169699999969453,
        p95Ms: 19.771999999997206,
        p99Ms: 113.31339999998454,
        opsPerSecond: 56.04303261120961
      },
      transaction: {
        operations: 5000,
        avgMs: 10.986466779998224,
        p50Ms: 9.690900000045076,
        p95Ms: 11.413000000058673,
        p99Ms: 15.000300000072457,
        opsPerSecond: 91.021073473829
      }
    },
    Drizzle: {
      findUnique: {
        operations: 5000,
        avgMs: 0.11690955999931321,
        p50Ms: 0.09089999995194376,
        p95Ms: 0.22820000001229346,
        p99Ms: 0.30130000005010515,
        opsPerSecond: 8553.620422537511
      },
      filteredRead: {
        operations: 5000,
        avgMs: 1.1093637999995845,
        p50Ms: 0.9477999999653548,
        p95Ms: 1.7201000000350177,
        p99Ms: 1.9906000000191852,
        opsPerSecond: 901.4175512130237
      },
      create: {
        operations: 5000,
        avgMs: 9.921959760000162,
        p50Ms: 8.56140000000596,
        p95Ms: 9.842900000046939,
        p99Ms: 13.390400000032969,
        opsPerSecond: 100.78654058157395
      },
      update: {
        operations: 5000,
        avgMs: 8.900310419999295,
        p50Ms: 7.97199999995064,
        p95Ms: 9.067500000004657,
        p99Ms: 11.318300000042655,
        opsPerSecond: 112.355631748862
      },
      delete: {
        operations: 5000,
        avgMs: 18.416232239999342,
        p50Ms: 16.337300000013784,
        p95Ms: 18.778999999980442,
        p99Ms: 38.40230000007432,
        opsPerSecond: 54.29992340279239
      },
      count: {
        operations: 5000,
        avgMs: 0.33470662000046575,
        p50Ms: 0.2637000000104308,
        p95Ms: 0.6387999999569729,
        p99Ms: 0.8036000001011416,
        opsPerSecond: 2987.6911308136314
      },
      exists: {
        operations: 5000,
        avgMs: 0.08949789999811911,
        p50Ms: 0.06669999996665865,
        p95Ms: 0.18469999998342246,
        p99Ms: 0.2558000000426546,
        opsPerSecond: 11173.446528030447
      },
      bulkInsert100: {
        operations: 5000,
        avgMs: 16.115491380000325,
        p50Ms: 14.745599999907427,
        p95Ms: 17.5291000000434,
        p99Ms: 106.45329999993555,
        opsPerSecond: 62.052094870716864
      },
      transaction: {
        operations: 5000,
        avgMs: 10.025578380000685,
        p50Ms: 8.830599999986589,
        p95Ms: 10.400999999954365,
        p99Ms: 13.56589999992866,
        opsPerSecond: 99.74486878431165
      }
    }
  }
};

const BENCHMARK_OPERATIONS_META = [
  {
    key: 'create',
    label: 'create',
    category: 'Write / Mutation',
    description: 'Single-record insert with schema validation, parameter binding, and returned record hydration.',
    architecturalTakeaway:
      'Nexus leads both Drizzle (+33.5%) and Prisma (+32.9%) at 134.55 ops/s (6.41 ms p50 vs 8.56 ms / 8.90 ms) as the Go execution engine manages prepared statement reuse and write dispatch.'
  },
  {
    key: 'update',
    label: 'update',
    category: 'Write / Mutation',
    description: 'Primary-key targeted single-row update mutation with typed payload serialization.',
    architecturalTakeaway:
      'Nexus takes 1st place at 141.02 ops/s (6.43 ms p50), outperforming Drizzle by 25.5% and Prisma by 33.5%.'
  },
  {
    key: 'delete',
    label: 'delete',
    category: 'Write / Mutation',
    description: 'Targeted single-row deletion with constraint checks and write acknowledgement.',
    architecturalTakeaway:
      'Nexus leads all three ORMs at 66.61 ops/s (13.06 ms p50), beating Drizzle by 22.7% and Prisma by 30.8%.'
  },
  {
    key: 'bulkInsert100',
    label: 'bulkInsert100',
    category: 'Batch / ACID',
    description: 'Batched insertion of 100 rows in a single operation.',
    architecturalTakeaway:
      'Nexus leads batch ingestion at 65.97 ops/s (13.62 ms p50), ahead of Drizzle (62.05 ops/s) and Prisma (56.04 ops/s), with lower p99 tail latency (85.51 ms vs 106.45 ms / 113.31 ms).'
  },
  {
    key: 'transaction',
    label: 'transaction',
    category: 'Batch / ACID',
    description: 'Multi-statement atomic transaction lifecycle (BEGIN -> writes -> COMMIT) coordinated by the engine.',
    architecturalTakeaway:
      'Nexus leads transactional throughput at 109.75 ops/s (7.87 ms p50), 10.0% faster than Drizzle and 20.6% faster than Prisma.'
  },
  {
    key: 'findUnique',
    label: 'findUnique',
    category: 'Read / Lookup',
    description: 'Single-row primary key lookup (SELECT ... WHERE id = $1 LIMIT 1).',
    architecturalTakeaway:
      'Nexus is 1.67× faster than Prisma (4,681 ops/s vs 2,796 ops/s; 0.20 ms p50), while Drizzle’s direct in-process JS SQLite driver leads raw single-row reads (8,554 ops/s) because it avoids the TS <-> Go runtime bridge hop.'
  },
  {
    key: 'filteredRead',
    label: 'filteredRead',
    category: 'Read / Lookup',
    description: 'Filtered query with predicate evaluation, ordering, and multi-row result hydration.',
    architecturalTakeaway:
      'Nexus achieves 713.98 ops/s (1.23 ms p50), outperforming Prisma by 17.0% while trailing Drizzle’s thin SQL wrapper (901.42 ops/s) by ~0.28 ms at p50.'
  },
  {
    key: 'count',
    label: 'count',
    category: 'Aggregation',
    description: 'Filtered aggregate COUNT(*) query returning scalar row count.',
    architecturalTakeaway:
      'Nexus processes 1,689.10 ops/s (0.59 ms p50)—45.2% faster than Prisma (1,163.46 ops/s)—with Drizzle’s direct SQLite call reaching 2,987.69 ops/s.'
  },
  {
    key: 'exists',
    label: 'exists',
    category: 'Read / Lookup',
    description: 'Boolean existence probe for a matching indexed key.',
    architecturalTakeaway:
      'For sub-0.3 ms SQLite existence checks, the fixed TS <-> Go bridge serialization cost (~0.22 ms) keeps Nexus at 3,378.76 ops/s (still ahead of Prisma’s 3,257.11 ops/s), whereas Drizzle runs directly in Bun’s SQLite binding (11,173.45 ops/s).'
  }
];

// ============================================================================
// CUSTOM NEXUS GEOMETRIC LOGO (Minimalist Geometric 'N' Mark — 32x32 ViewBox)
// ============================================================================
const NexusLogo = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`group/logo select-none ${className}`}
    aria-label="Nexus ORM Logo"
  >
    {/* Sleek Dark Charcoal Squircle Container */}
    <rect
      x="1.5"
      y="1.5"
      width="29"
      height="29"
      rx="7.5"
      className="fill-[#161513] dark:fill-[#0F0E0D] stroke-amber-500/35 group-hover/logo:stroke-amber-400/70 transition-colors duration-200"
      strokeWidth="1.5"
    />

    {/* Left & Right Parallel Golden Yellow Pillars (#F59E0B) */}
    <rect x="7.5" y="7.5" width="4.25" height="17" rx="1.25" fill="#F59E0B" />
    <rect x="20.25" y="7.5" width="4.25" height="17" rx="1.25" fill="#F59E0B" />

    {/* Bold Overlapping Orange Diagonal Bridge (#EA580C) */}
    <path d="M8.25 7.5H12.75L23.75 24.5H19.25L8.25 7.5Z" fill="#EA580C" />
  </svg>
);

// Official Discord Vector Icon
const DiscordIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// ============================================================================
// SYNTAX HIGHLIGHTER FOR TYPESCRIPT / CLI / SQL / JSON BLOCKS
// ============================================================================
const SyntaxHighlightedCode = ({ code, showLineNumbers = true }) => {
  const lines = (code || '').trim().split('\n');

  const tokenizeLine = (line) => {
    if (line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('--')) {
      return <span className="text-stone-500 italic">{line}</span>;
    }

    const tokenRegex =
      /('[^']*'|"[^"]*"|`[^`]*`|\b(?:import|from|export|const|let|async|await|return|function|type|interface|true|false|null|new|SELECT|FROM|WHERE|AND|ORDER|BY|LIMIT|LEFT|JOIN|ON|INSERT|INTO|VALUES|UPDATE|SET|CREATE|TABLE)\b|\b(?:defineSchema|defineTable|defineRelations|defineConfig|column|NexusClient|findMany|findFirst|create|update|delete|transaction|where|include|orderBy|select|limit|eq|gt|and)\b|\b(?:string|number|boolean|Date|Promise|InferModel|InferResult)\b)/g;

    const parts = line.split(tokenRegex);

    return parts.map((part, idx) => {
      if (!part) return null;
      if (/^('[^']*'|"[^"]*"|`[^`]*`)$/.test(part)) {
        return (
          <span key={idx} className="text-amber-300">
            {part}
          </span>
        );
      }
      if (
        /^(import|from|export|const|let|async|await|return|function|type|interface|true|false|null|new|SELECT|FROM|WHERE|AND|ORDER|BY|LIMIT|LEFT|JOIN|ON|INSERT|INTO|VALUES|UPDATE|SET|CREATE|TABLE)$/.test(
          part
        )
      ) {
        return (
          <span key={idx} className="text-orange-400 font-medium">
            {part}
          </span>
        );
      }
      if (
        /^(defineSchema|defineTable|defineRelations|defineConfig|column|NexusClient|findMany|findFirst|create|update|delete|transaction|where|include|orderBy|select|limit|eq|gt|and)$/.test(
          part
        )
      ) {
        return (
          <span key={idx} className="text-amber-400">
            {part}
          </span>
        );
      }
      if (/^(string|number|boolean|Date|Promise|InferModel|InferResult)$/.test(part)) {
        return (
          <span key={idx} className="text-yellow-200">
            {part}
          </span>
        );
      }
      return (
        <span key={idx} className="text-stone-200">
          {part}
        </span>
      );
    });
  };

  return (
    <div className="font-mono text-xs sm:text-[13px] leading-6 overflow-x-auto select-text">
      {lines.map((line, i) => (
        <div key={i} className="table-row hover:bg-white/[0.03] transition-colors px-2">
          {showLineNumbers && (
            <span className="table-cell select-none pr-4 text-right text-stone-600 w-9">
              {i + 1}
            </span>
          )}
          <span className="table-cell whitespace-pre">{tokenizeLine(line)}</span>
        </div>
      ))}
    </div>
  );
};

// ============================================================================
// REAL EXECUTABLE NEXUS AST, SQL COMPILER, HYDRATOR & VALIDATOR FUNCTIONS
// Used by both the Interactive Live Query Playground and the Real Benchmark Suite
// ============================================================================

const PLAYGROUND_COLUMNS = [
  { id: 'id', label: 'id', tsType: 'string', sqlCol: '"organizations"."id"', alwaysRequired: true },
  { id: 'slug', label: 'slug', tsType: 'string', sqlCol: '"organizations"."slug"' },
  { id: 'name', label: 'name', tsType: 'string', sqlCol: '"organizations"."name"' },
  {
    id: 'plan',
    label: 'plan',
    tsType: "'hobby' | 'pro' | 'enterprise'",
    sqlCol: '"organizations"."plan"'
  },
  {
    id: 'region',
    label: 'region',
    tsType: "'us-east' | 'eu-central' | 'ap-south'",
    sqlCol: '"organizations"."region"'
  },
  { id: 'isVerified', label: 'isVerified', tsType: 'boolean', sqlCol: '"organizations"."is_verified"' },
  { id: 'createdAt', label: 'createdAt', tsType: 'Date', sqlCol: '"organizations"."created_at"' }
];

const PLAYGROUND_FILTERS = [
  {
    id: 'plan_enterprise',
    label: "plan === 'enterprise'",
    field: 'plan',
    op: 'EQ',
    tsExpr: "eq(organizations.plan, 'enterprise')",
    sqlCol: '"organizations"."plan"',
    bindValue: 'enterprise'
  },
  {
    id: 'region_eu',
    label: "region === 'eu-central'",
    field: 'region',
    op: 'EQ',
    tsExpr: "eq(organizations.region, 'eu-central')",
    sqlCol: '"organizations"."region"',
    bindValue: 'eu-central'
  },
  {
    id: 'verified_true',
    label: 'isVerified === true',
    field: 'isVerified',
    op: 'EQ',
    tsExpr: 'eq(organizations.isVerified, true)',
    sqlCol: '"organizations"."is_verified"',
    bindValue: true
  }
];

const PLAYGROUND_RELATIONS = [
  {
    id: 'members',
    label: 'members (1:N)',
    tsInclude: `members: {\n      select: { id: true, email: true, role: true },\n      limit: 5\n    }`,
    tsReturnType: `  members: Array<{\n    id: string;\n    email: string;\n    role: 'owner' | 'admin' | 'member';\n  }>;`,
    sqlJoin:
      'LEFT JOIN LATERAL (SELECT "id", "email", "role", "org_id" FROM "members" WHERE "members"."org_id" = "organizations"."id" LIMIT 5) AS "rel_members" ON TRUE'
  },
  {
    id: 'projects',
    label: 'projects (1:N)',
    tsInclude: `projects: {\n      select: { id: true, name: true, status: true }\n    }`,
    tsReturnType: `  projects: Array<{\n    id: string;\n    name: string;\n    status: 'draft' | 'active' | 'archived';\n  }>;`,
    sqlJoin:
      'LEFT JOIN "projects" AS "rel_projects" ON "rel_projects"."org_id" = "organizations"."id"'
  },
  {
    id: 'auditLogs',
    label: 'auditLogs (1:N)',
    tsInclude: `auditLogs: {\n      select: { id: true, action: true, createdAt: true },\n      limit: 3\n    }`,
    tsReturnType: `  auditLogs: Array<{\n    id: string;\n    action: string;\n    createdAt: Date;\n  }>;`,
    sqlJoin:
      'LEFT JOIN LATERAL (SELECT "id", "action", "created_at", "org_id" FROM "audit_logs" WHERE "audit_logs"."org_id" = "organizations"."id" ORDER BY "created_at" DESC LIMIT 3) AS "rel_audit_logs" ON TRUE'
  }
];

// Real function 1: Construct a deterministic Nexus Query AST Envelope
function buildNexusQueryAst(selectedCols, activeFilterObjs, activeRelObjs, orderByDir, limitNum) {
  return {
    protocol: 'nexus.ast.v1',
    operation: 'FIND_MANY',
    table: 'organizations',
    projection: selectedCols.map((c) => c.id),
    where: activeFilterObjs.map((f, idx) => ({
      field: f.field,
      operator: f.op,
      parameterIndex: idx + 1
    })),
    include: activeRelObjs.map((r) => ({
      relation: r.id,
      strategy: r.id === 'projects' ? 'LEFT_JOIN' : 'LATERAL_JOIN'
    })),
    orderBy: [{ field: 'createdAt', direction: orderByDir.toUpperCase() }],
    limit: limitNum
  };
}

// Real function 2: Compile a Nexus Query AST into a parameterized SQL statement + bindings array
function compileAstToParameterizedSql(selectedCols, activeFilterObjs, activeRelObjs, orderByDir, limitNum) {
  const selectClause = selectedCols.map((c) => c.sqlCol).join(', ');
  const joinClauses = activeRelObjs.map((r) => r.sqlJoin);
  const whereClause =
    activeFilterObjs.length > 0
      ? `\nWHERE ${activeFilterObjs.map((f, i) => `${f.sqlCol} = $${i + 1}`).join(' AND ')}`
      : '';
  const joinString = joinClauses.length > 0 ? `\n${joinClauses.join('\n')}` : '';
  const sql = `SELECT ${selectClause}\nFROM "organizations"${joinString}${whereClause}\nORDER BY "organizations"."created_at" ${orderByDir.toUpperCase()}\nLIMIT ${limitNum};`;
  const bindings = activeFilterObjs.map((f) => f.bindValue);
  return { sql, bindings };
}

// Real function 3: Hydrate flat joined SQL rows into deduplicated 1:N nested object graph (O(N) Map)
function hydrateRelationalRows(flatRows) {
  const orgMap = new Map();
  for (let i = 0; i < flatRows.length; i++) {
    const row = flatRows[i];
    let org = orgMap.get(row.org_id);
    if (!org) {
      org = {
        id: row.org_id,
        slug: row.org_slug,
        name: row.org_name,
        plan: row.org_plan,
        members: []
      };
      orgMap.set(row.org_id, org);
    }
    if (row.member_id) {
      org.members.push({
        id: row.member_id,
        email: row.member_email,
        isOwner: row.member_owner
      });
    }
  }
  return Array.from(orgMap.values());
}

// Real function 4: Validate candidate record against Nexus schema column constraints
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const VALID_PLANS = new Set(['hobby', 'pro', 'enterprise']);

function validateSchemaRecord(input) {
  if (!input || typeof input !== 'object') return { valid: false, error: 'INVALID_OBJECT' };
  const id = input.id || '018f3a9c-7c40-7000-8000-19a84c90b111';
  if (!UUID_REGEX.test(id)) return { valid: false, error: 'INVALID_UUID' };
  if (typeof input.slug !== 'string' || input.slug.length < 2) {
    return { valid: false, error: 'INVALID_SLUG' };
  }
  if (typeof input.name !== 'string' || input.name.length === 0) {
    return { valid: false, error: 'INVALID_NAME' };
  }
  const plan = input.plan || 'hobby';
  if (!VALID_PLANS.has(plan)) return { valid: false, error: 'INVALID_ENUM_PLAN' };
  return {
    valid: true,
    record: {
      id,
      slug: input.slug,
      name: input.name,
      plan,
      isVerified: Boolean(input.isVerified),
      createdAt: input.createdAt instanceof Date ? input.createdAt : new Date()
    }
  };
}

// ============================================================================
// STATIC PRODUCT CONTENT: FEATURES, CODE SHOWCASE, ARCHITECTURE, DOCUMENTATION
// ============================================================================

const FEATURES_LIST = [
  {
    id: 'type-safe-queries',
    docTarget: 'queries',
    title: 'Type-safe queries',
    tag: 'TypeScript API',
    icon: Code2,
    description:
      'Construct expressive queries with end-to-end static type inference. Filters, partial projections, and nested includes automatically narrow your return type at compile time.',
    snippet: `db.query.users.findMany({ select: { id: true, handle: true } })`
  },
  {
    id: 'go-execution',
    docTarget: 'architecture-doc',
    title: 'Go-powered execution',
    tag: 'Execution Engine',
    icon: Cpu,
    description:
      'While you author pure TypeScript, query planning, statement preparation, connection pooling, and driver dispatch are executed by a compiled Go engine.',
    snippet: `Engine Bridge: TS Query AST -> Go Planner -> Backend Driver`
  },
  {
    id: 'schema-driven',
    docTarget: 'schema',
    title: 'Schema-driven development',
    tag: 'Single Source of Truth',
    icon: Layers,
    description:
      'Define tables, column constraints, defaults, and enums directly in TypeScript without fragile code generation steps blocking your editor feedback loop.',
    snippet: `export const users = defineTable('users', { id: column.uuid() })`
  },
  {
    id: 'relations',
    docTarget: 'relations',
    title: 'Relations',
    tag: 'Relational Graph',
    icon: GitBranch,
    description:
      'Declare explicit one-to-one, one-to-many, and many-to-many associations. Fetch deeply linked records in a single declarative query without manual join boilerplate.',
    snippet: `include: { profile: true, posts: { limit: 5 } }`
  },
  {
    id: 'migrations',
    docTarget: 'migrations',
    title: 'Migrations',
    tag: 'State Management',
    icon: RefreshCw,
    description:
      'Generate deterministic, version-controlled schema migrations from your TypeScript definitions. Inspect SQL diffs before applying changes across environments.',
    snippet: `$ npx @nexus-orm/nexus migrate dev --name add_projects_table`
  },
  {
    id: 'transactions',
    docTarget: 'transactions',
    title: 'Transactions',
    tag: 'ACID Guarantees',
    icon: ShieldCheck,
    description:
      'Run multi-step writes inside isolated transaction closures coordinated by the Go engine, with automatic rollback if any operation throws an exception.',
    snippet: `await db.transaction(async (tx) => { /* atomic writes */ })`
  },
  {
    id: 'introspection',
    docTarget: 'introspection-cli',
    title: 'Database introspection',
    tag: 'Brownfield Ready',
    icon: Database,
    description:
      'Adopt Nexus incrementally on existing databases. Introspect live tables, foreign keys, and indexes directly into clean TypeScript schema files.',
    snippet: `$ npx @nexus-orm/nexus introspect --out ./src/db/schema.ts`
  },
  {
    id: 'cli-tooling',
    docTarget: 'introspection-cli',
    title: 'CLI tooling',
    tag: '@nexus-orm/nexus',
    icon: Terminal,
    description:
      'Integrated CLI workflow for project scaffolding, schema validation, migration workflows, and database introspection.',
    snippet: `$ npx @nexus-orm/nexus init`
  }
];

const CODE_SHOWCASE_TABS = [
  {
    id: 'schema',
    filename: 'schema.ts',
    title: '1. Defining a Schema',
    subtitle: 'Declarative table definitions with strict column types and constraints.',
    code: `import { defineSchema, defineTable, column } from '@nexus-orm/nexus';

export const organizations = defineTable('organizations', {
  id: column.uuid().primaryKey().defaultRandom(),
  slug: column.text().notNull().unique(),
  name: column.text().notNull(),
  plan: column.enum(['hobby', 'pro', 'enterprise']).notNull().default('hobby'),
  createdAt: column.timestamp().notNull().defaultNow()
});

export const members = defineTable('members', {
  id: column.uuid().primaryKey().defaultRandom(),
  orgId: column.uuid().notNull().references(() => organizations.id),
  email: column.text().notNull(),
  isOwner: column.boolean().notNull().default(false),
  joinedAt: column.timestamp().notNull().defaultNow()
});

export const schema = defineSchema({
  organizations,
  members
});`,
    typeOutput: `// Inferred directly from schema.ts (zero codegen watcher required)
type Organization = {
  id: string;
  slug: string;
  name: string;
  plan: 'hobby' | 'pro' | 'enterprise';
  createdAt: Date;
};`,
    engineNote:
      'Schema definitions compile into a normalized metadata graph used simultaneously by TypeScript static analysis and the Go migration/query engine.'
  },
  {
    id: 'client',
    filename: 'client.ts',
    title: '2. Connecting to a Database',
    subtitle: 'Initialize NexusClient with your schema and Go execution engine driver configuration.',
    code: `import { NexusClient } from '@nexus-orm/nexus';
import { schema } from './schema';

export const db = new NexusClient({
  schema,
  driver: {
    adapter: 'sql-backend',
    url: process.env.DATABASE_URL
  },
  engine: {
    // Go execution engine lifecycle & connection pool management
    maxOpenConns: 25,
    maxIdleConns: 5,
    queryLogging: process.env.NODE_ENV === 'development'
  }
});

// Verify connectivity with the Go execution engine
export async function verifyDatabaseConnection() {
  const status = await db.engine.ping();
  return status.connected;
}`,
    typeOutput: `// Strongly typed client instance bound to your schema models
const db: NexusClient<{
  organizations: typeof organizations;
  members: typeof members;
}>`,
    engineNote:
      'NexusClient manages the communication bridge to the Go execution engine, which handles connection pooling and backend driver abstraction.'
  },
  {
    id: 'queries',
    filename: 'queries.ts',
    title: '3. Querying Records',
    subtitle: 'Fluent filtering, ordering, pagination, and narrowed column selection.',
    code: `import { db } from './client';
import { organizations } from './schema';
import { eq, and } from '@nexus-orm/nexus';

export async function getEnterpriseOrgs() {
  // Partial select automatically narrows the returned TypeScript type
  const orgs = await db.query.organizations.findMany({
    where: and(
      eq(organizations.plan, 'enterprise')
    ),
    select: {
      id: true,
      slug: true,
      name: true,
      createdAt: true
    },
    orderBy: { createdAt: 'desc' },
    limit: 20
  });

  return orgs;
}`,
    typeOutput: `// Narrowed return type reflects only the selected fields:
type GetEnterpriseOrgsReturn = Promise<Array<{
  id: string;
  slug: string;
  name: string;
  createdAt: Date;
}>>`,
    engineNote:
      'The query builder constructs a compact AST payload sent to the Go execution engine, which parameterizes all inputs to prevent SQL injection.'
  },
  {
    id: 'relations',
    filename: 'relations.ts',
    title: '4. Working with Relations',
    subtitle: 'Define explicit associations and query nested graphs with type safety.',
    code: `import { defineRelations, eq } from '@nexus-orm/nexus';
import { organizations, members } from './schema';
import { db } from './client';

export const orgRelations = defineRelations(organizations, ({ many }) => ({
  members: many(members, {
    fields: [organizations.id],
    references: [members.orgId]
  })
}));

export async function getOrganizationWithRoster(slug: string) {
  return await db.query.organizations.findFirst({
    where: eq(organizations.slug, slug),
    include: {
      members: {
        select: {
          id: true,
          email: true,
          isOwner: true
        },
        orderBy: { joinedAt: 'asc' }
      }
    }
  });
}`,
    typeOutput: `type OrgWithRoster = {
  id: string;
  slug: string;
  name: string;
  plan: 'hobby' | 'pro' | 'enterprise';
  createdAt: Date;
  members: Array<{
    id: string;
    email: string;
    isOwner: boolean;
  }>;
} | null`,
    engineNote:
      'Relational queries are planned by the Go engine and assembled into nested results before returning across the bridge to TypeScript.'
  }
];

const ARCHITECTURE_LAYERS = [
  {
    id: 'ts-layer',
    step: '01',
    name: 'TypeScript API & Static Type Layer',
    package: '@nexus-orm/nexus',
    summary: 'Developer-facing TypeScript interface for schemas, relations, and type-safe query building.',
    responsibilities: [
      'Declarative table, column, and relation definitions in pure TypeScript',
      'Compile-time return type inference for selects, filters, and nested includes',
      'Constructs a deterministic Query AST without raw string concatenation'
    ],
    payloadTitle: 'TypeScript Query AST Construction',
    payload: `{
  "protocol": "nexus.ast.v1",
  "operation": "FIND_MANY",
  "table": "organizations",
  "projection": ["id", "slug", "name"],
  "where": [{ "field": "plan", "operator": "EQ", "parameterIndex": 1 }],
  "include": [{ "relation": "members", "strategy": "LATERAL_JOIN" }]
}`
  },
  {
    id: 'bridge-layer',
    step: '02',
    name: 'Structured AST & Protocol Bridge',
    package: 'TS <-> Go Runtime Bridge',
    summary: 'Deterministic serialization boundary connecting the TypeScript runtime to the Go execution engine.',
    responsibilities: [
      'Serializes validated Query AST and bound parameters into a structured protocol message',
      'Propagates cancellation signals, transaction context tokens, and structured error codes',
      'Deserializes engine records back into typed JavaScript objects with Date/UUID hydration'
    ],
    payloadTitle: 'Bridge Envelope Dispatch',
    payload: `EnvelopeHeader {
  ProtocolVersion: "nexus.v1",
  TransactionID:   null,
  Operation:       OP_QUERY_SELECT,
  Bindings:        [Param(1, STRING, "enterprise")]
}`
  },
  {
    id: 'go-engine',
    step: '03',
    name: 'Go Execution Engine',
    package: 'nexus-engine (Go)',
    summary: 'Compiled Go core responsible for query planning, transaction coordination, and connection management.',
    responsibilities: [
      'Compiles Query AST into parameterized target SQL statements',
      'Coordinates ACID transaction lifecycles, savepoints, and rollback safety',
      'Manages connection pooling, statement caching, and concurrent execution safety',
      'Computes schema diffs and catalog introspection snapshots'
    ],
    payloadTitle: 'Go Engine Execution State',
    payload: `func (e *Engine) ExecuteQuery(ctx context.Context, ast *QueryAST) (*ResultSet, error) {
  plan, err := e.Planner.BuildParameterized(ast)
  if err != nil {
    return nil, err
  }
  conn, err := e.Pool.Acquire(ctx, ast.TxID)
  if err != nil {
    return nil, err
  }
  defer conn.Release()
  return e.Driver.QueryContext(ctx, conn, plan.Statement, plan.Args...)
}`
  },
  {
    id: 'driver-layer',
    step: '04',
    name: 'Backend Driver Abstraction',
    package: 'Database Driver Interface',
    summary: 'Clean backend driver boundary isolating database dialect details from application logic.',
    responsibilities: [
      'Standardized Go driver contract for executing prepared queries and transactions',
      'Introspects live catalog tables, columns, indexes, and foreign key constraints',
      'Executes migration steps safely within transactional locks'
    ],
    payloadTitle: 'Driver Interface Contract',
    payload: `type BackendDriver interface {
  QueryContext(ctx context.Context, stmt string, args ...any) (Rows, error)
  BeginTx(ctx context.Context, opts TxOptions) (DriverTx, error)
  IntrospectSchema(ctx context.Context) (*CatalogSnapshot, error)
  ApplyMigration(ctx context.Context, step MigrationStep) error
}`
  }
];

const DOCS_SECTIONS = [
  {
    id: 'installation',
    title: 'Installation',
    category: 'Getting Started',
    summary: 'Install the official @nexus-orm/nexus package and initialize your TypeScript workspace.',
    description:
      'Nexus is published on npm under the official @nexus-orm/nexus package (https://www.npmjs.com/package/@nexus-orm/nexus). It provides the TypeScript schema builder, type-safe query client, Go execution engine bridge, and CLI workflow commands.',
    codeTitle: 'Terminal — Install @nexus-orm/nexus from npm',
    code: `# Install with pnpm
pnpm add @nexus-orm/nexus

# Or install with npm
npm install @nexus-orm/nexus

# Or install with yarn / bun
yarn add @nexus-orm/nexus
bun add @nexus-orm/nexus

# Initialize Nexus configuration in your workspace
npx @nexus-orm/nexus init`,
    secondaryCodeTitle: 'nexus.config.ts — Workspace Configuration',
    secondaryCode: `import { defineConfig } from '@nexus-orm/nexus';

export default defineConfig({
  schema: './src/db/schema.ts',
  migrations: {
    dir: './nexus/migrations',
    table: '_nexus_migrations'
  },
  driver: {
    adapter: 'sql-backend',
    url: process.env.DATABASE_URL
  }
});`,
    toc: [
      { id: 'overview', label: 'Package Overview' },
      { id: 'primary-code', label: 'Package Installation' },
      { id: 'secondary-code', label: 'Workspace Configuration' },
      { id: 'implementation-notes', label: 'TypeScript Requirements' }
    ],
    notes: [
      '@nexus-orm/nexus provides the TypeScript query API, schema builders, and Go execution engine bridge.',
      'Running npx @nexus-orm/nexus init scaffolds nexus.config.ts and your initial schema directory.',
      'Enable TypeScript strict mode ("strict": true) in tsconfig.json for full static type inference.'
    ]
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    category: 'Getting Started',
    summary: 'Go from an empty project to executing your first type-safe query.',
    description:
      'After installing @nexus-orm/nexus, create your schema definition, configure the Nexus client, apply your initial migration, and run a typed query powered by the Go execution engine.',
    codeTitle: 'src/index.ts — Complete Quick Start Example',
    code: `import { defineSchema, defineTable, column, NexusClient, eq } from '@nexus-orm/nexus';

// 1. Define your table model
export const tasks = defineTable('tasks', {
  id: column.uuid().primaryKey().defaultRandom(),
  title: column.text().notNull(),
  completed: column.boolean().notNull().default(false),
  createdAt: column.timestamp().notNull().defaultNow()
});

// 2. Initialize the NexusClient with the Go execution engine
const db = new NexusClient({
  schema: defineSchema({ tasks }),
  driver: {
    adapter: 'sql-backend',
    url: process.env.DATABASE_URL
  }
});

// 3. Create and query records with end-to-end type safety
async function main() {
  await db.tasks.create({
    data: { title: 'Configure Nexus Go Engine Bridge' }
  });

  const pendingTasks = await db.query.tasks.findMany({
    where: eq(tasks.completed, false),
    orderBy: { createdAt: 'desc' }
  });

  console.log('Pending tasks:', pendingTasks);
}

main();`,
    secondaryCodeTitle: 'Terminal — Apply Migration & Execute',
    secondaryCode: `# Generate and apply your initial migration
npx @nexus-orm/nexus migrate dev --name init_tasks

# Execute your TypeScript entry point
npx tsx src/index.ts`,
    toc: [
      { id: 'overview', label: 'Quick Start Walkthrough' },
      { id: 'primary-code', label: 'Schema & Client Setup' },
      { id: 'secondary-code', label: 'Running Your First Query' },
      { id: 'implementation-notes', label: 'Developer Workflow Tips' }
    ],
    notes: [
      'No separate code generation watcher is needed when editing your schema models—TypeScript infers types directly from @nexus-orm/nexus.',
      'Use npx @nexus-orm/nexus migrate dev to synchronize your schema definitions with your database.'
    ]
  },
  {
    id: 'schema',
    title: 'Schema & Models',
    category: 'Core Concepts',
    summary: 'Define tables, typed columns, primary keys, constraints, and default values.',
    description:
      'Nexus schemas are written in standard TypeScript modules using defineTable, column builders, and defineSchema from @nexus-orm/nexus. Each column helper chains nullability, default rules, and foreign key references.',
    codeTitle: 'src/db/schema.ts — Column Builders & Constraints',
    code: `import { defineSchema, defineTable, column, type InferModel } from '@nexus-orm/nexus';

export const accounts = defineTable('accounts', {
  id: column.uuid().primaryKey().defaultRandom(),
  username: column.text().notNull().unique(),
  tier: column.enum(['free', 'pro', 'team']).notNull().default('free'),
  quotaLimit: column.integer().notNull().default(1000),
  isVerified: column.boolean().notNull().default(false),
  createdAt: column.timestamp().notNull().defaultNow()
});

export const apiKeys = defineTable('api_keys', {
  id: column.uuid().primaryKey().defaultRandom(),
  accountId: column.uuid().notNull().references(() => accounts.id),
  label: column.text().notNull(),
  revokedAt: column.timestamp() // Nullable unless .notNull() is chained
});

export const schema = defineSchema({ accounts, apiKeys });

// Extract static TypeScript types directly from table definitions
export type Account = InferModel<typeof accounts>;`,
    secondaryCodeTitle: 'Column Builder Modifiers Reference',
    secondaryCode: `column.uuid().primaryKey().defaultRandom()
column.text().notNull().unique()
column.integer().notNull().default(0)
column.boolean().notNull().default(false)
column.timestamp().notNull().defaultNow()
column.enum(['draft', 'active', 'archived']).default('draft')`,
    toc: [
      { id: 'overview', label: 'Declarative Schemas' },
      { id: 'primary-code', label: 'Table & Column Definitions' },
      { id: 'secondary-code', label: 'Column Modifiers' },
      { id: 'implementation-notes', label: 'Type Inference Rules' }
    ],
    notes: [
      'Columns are nullable by default unless chained with .notNull() or .primaryKey().',
      'Use InferModel<typeof accounts> to extract the static TypeScript type of any table definition.'
    ]
  },
  {
    id: 'queries',
    title: 'Type-Safe Queries',
    category: 'Core Concepts',
    summary: 'Build expressive read and write operations with compile-time projection narrowing.',
    description:
      'The Nexus query builder provides a predictable object API for reading and mutating data. All filter operators (eq, gt, and, or) validate column types against input values.',
    codeTitle: 'src/db/queries.ts — Read & Write Operations',
    code: `import { db } from './client';
import { accounts } from './schema';
import { eq, and, gt } from '@nexus-orm/nexus';

// Read multiple records with filtering and partial field projection
const proAccounts = await db.query.accounts.findMany({
  where: and(
    eq(accounts.tier, 'pro'),
    gt(accounts.quotaLimit, 500)
  ),
  select: {
    id: true,
    username: true,
    quotaLimit: true
  },
  orderBy: { createdAt: 'desc' },
  limit: 25
});

// Insert a new record
const newAccount = await db.accounts.create({
  data: {
    username: 'sonikki_dev',
    tier: 'team',
    isVerified: true
  }
});

// Update matching records
await db.accounts.update({
  where: eq(accounts.id, newAccount.id),
  data: { quotaLimit: 5000 }
});`,
    secondaryCodeTitle: 'Compile-Time Narrowed Return Signature',
    secondaryCode: `// Because "select" only specified id, username, and quotaLimit,
// TypeScript automatically narrows the return type of proAccounts:
type ProAccountsResult = Array<{
  id: string;
  username: string;
  quotaLimit: number;
}>;`,
    toc: [
      { id: 'overview', label: 'Query Builder Overview' },
      { id: 'primary-code', label: 'Filtering, Projection & Mutations' },
      { id: 'secondary-code', label: 'Projection Narrowing' },
      { id: 'implementation-notes', label: 'Go Engine Parameterization' }
    ],
    notes: [
      'When you provide a select object, omitted columns are excluded from both the SQL projection and the returned TypeScript type.',
      'All query values are converted into bound positional parameters ($1, $2...) by the Go execution engine.'
    ]
  },
  {
    id: 'relations',
    title: 'Relations',
    category: 'Core Concepts',
    summary: 'Model one-to-one, one-to-many, and many-to-many associations with nested eager loading.',
    description:
      'Relations are declared explicitly using defineRelations so your table schemas remain modular. Once registered, use include inside any findMany or findFirst query.',
    codeTitle: 'src/db/relations.ts — Explicit Relational Mapping',
    code: `import { defineRelations, eq } from '@nexus-orm/nexus';
import { accounts, apiKeys } from './schema';
import { db } from './client';

export const accountRelations = defineRelations(accounts, ({ many }) => ({
  apiKeys: many(apiKeys, {
    fields: [accounts.id],
    references: [apiKeys.accountId]
  })
}));

// Query parent record along with filtered child records
const accountWithKeys = await db.query.accounts.findFirst({
  where: eq(accounts.username, 'sonikki_dev'),
  include: {
    apiKeys: {
      select: { id: true, label: true, revokedAt: true }
    }
  }
});`,
    secondaryCodeTitle: 'Narrowed Relational Return Type',
    secondaryCode: `type AccountWithKeys = {
  id: string;
  username: string;
  tier: 'free' | 'pro' | 'team';
  quotaLimit: number;
  isVerified: boolean;
  createdAt: Date;
  apiKeys: Array<{
    id: string;
    label: string;
    revokedAt: Date | null;
  }>;
} | null;`,
    toc: [
      { id: 'overview', label: 'Declaring Relations' },
      { id: 'primary-code', label: 'Nested Includes & Eager Loading' },
      { id: 'secondary-code', label: 'Relational Type Inference' },
      { id: 'implementation-notes', label: 'Relational Best Practices' }
    ],
    notes: [
      'Nested includes support their own select, where, orderBy, and limit clauses.',
      'The Go execution engine coordinates relational fetches and hydrates the nested result graph.'
    ]
  },
  {
    id: 'migrations',
    title: 'Migrations',
    category: 'Execution & Tooling',
    summary: 'Version-control your database evolution with deterministic schema diffing.',
    description:
      'The @nexus-orm/nexus CLI compares your TypeScript schema definitions against your migration history or database catalog, generating reviewable SQL migration files.',
    codeTitle: 'Terminal — Migration Lifecycle Commands',
    code: `# 1. Generate and apply a new migration during development
npx @nexus-orm/nexus migrate dev --name create_accounts_and_keys

# 2. Preview migration SQL without applying changes immediately
npx @nexus-orm/nexus migrate dev --name add_quota_index --create-only

# 3. Check migration status across environments
npx @nexus-orm/nexus migrate status

# 4. Apply pending migrations in CI/CD or production
npx @nexus-orm/nexus migrate deploy`,
    secondaryCodeTitle: 'Example Generated SQL Migration File',
    secondaryCode: `-- Generated by @nexus-orm/nexus Schema Differ
CREATE TABLE "accounts" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "username" TEXT NOT NULL UNIQUE,
  "tier" TEXT NOT NULL DEFAULT 'free',
  "quota_limit" INTEGER NOT NULL DEFAULT 1000,
  "is_verified" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,
    toc: [
      { id: 'overview', label: 'Deterministic Schema Diffing' },
      { id: 'primary-code', label: 'Development & Production CLI' },
      { id: 'secondary-code', label: 'Generated Migration Artifacts' },
      { id: 'implementation-notes', label: 'Migration Workflow Notes' }
    ],
    notes: [
      'Migrations are stored in ./nexus/migrations as timestamped directories.',
      'You can inspect generated SQL statements before applying them using --create-only.'
    ]
  },
  {
    id: 'transactions',
    title: 'Transactions',
    category: 'Execution & Tooling',
    summary: 'Coordinate atomic multi-step mutations with automatic rollback on errors.',
    description:
      'Use db.transaction(async (tx) => ...) to bind multiple operations to a single transaction context managed by the Go execution engine. Throwing an error inside the callback automatically triggers a rollback.',
    codeTitle: 'src/services/rotation.ts — Transactional API Key Rotation',
    code: `import { db } from '../db/client';
import { apiKeys } from '../db/schema';
import { eq } from '@nexus-orm/nexus';

export async function rotateApiKey(oldKeyId: string, accountId: string) {
  return await db.transaction(async (tx) => {
    // 1. Mark the existing key as revoked
    await tx.apiKeys.update({
      where: eq(apiKeys.id, oldKeyId),
      data: { revokedAt: new Date() }
    });

    // 2. Issue a replacement key within the same atomic boundary
    const replacementKey = await tx.apiKeys.create({
      data: {
        accountId,
        label: 'Rotated Key'
      }
    });

    return replacementKey;
  });
}`,
    secondaryCodeTitle: 'Transactional Safety Contract',
    secondaryCode: `// Every operation invoked on "tx" carries the scoped TransactionID
// pinned to a dedicated connection in the Go execution engine pool.
// Uncaught errors automatically trigger ROLLBACK before rethrowing.`,
    toc: [
      { id: 'overview', label: 'ACID Transaction Closures' },
      { id: 'primary-code', label: 'Scoped Transaction Client (tx)' },
      { id: 'secondary-code', label: 'Engine Commit & Rollback Contract' },
      { id: 'implementation-notes', label: 'Isolation & Error Handling' }
    ],
    notes: [
      'Always use the scoped tx client passed to the callback rather than the root db instance.',
      'If any promise rejects inside the transaction closure, the Go engine issues a ROLLBACK immediately.'
    ]
  },
  {
    id: 'introspection-cli',
    title: 'Introspection & CLI',
    category: 'Execution & Tooling',
    summary: 'Adopt Nexus on existing databases and manage your project from the command line.',
    description:
      'For existing databases or database-first workflows, the Go engine can inspect live database catalogs and emit idiomatic TypeScript schema definitions ready for NexusClient.',
    codeTitle: 'Terminal — Introspection & Validation Commands',
    code: `# Introspect an existing database into a TypeScript schema module
npx @nexus-orm/nexus introspect --out ./src/db/schema.ts

# Validate TypeScript schema definitions and relation graphs
npx @nexus-orm/nexus check`,
    secondaryCodeTitle: 'Introspected Schema Output Example',
    secondaryCode: `// Emitted by npx @nexus-orm/nexus introspect
import { defineSchema, defineTable, column } from '@nexus-orm/nexus';

export const existingUsers = defineTable('users', {
  id: column.uuid().primaryKey(),
  email: column.text().notNull().unique(),
  createdAt: column.timestamp().notNull().defaultNow()
});`,
    toc: [
      { id: 'overview', label: 'Database Introspection' },
      { id: 'primary-code', label: 'CLI Command Reference' },
      { id: 'secondary-code', label: 'Emitted Schema Code' },
      { id: 'implementation-notes', label: 'Incremental Adoption' }
    ],
    notes: [
      'Introspection preserves primary keys, foreign key references, nullability, and default expressions.',
      'Run npx @nexus-orm/nexus check in CI pipelines to verify your schema compiles cleanly.'
    ]
  },
  {
    id: 'benchmarks-doc',
    title: 'Benchmarks & Methodology',
    category: 'Reference',
    summary:
      'Transparent, reproducible benchmark results comparing Nexus, Drizzle, and Prisma on Bun 1.4.4 + SQLite (5,000 ops/test).',
    description:
      'We publish unedited benchmark artifacts rather than cherry-picked micro-claims. In the Bun 1.4.4 + SQLite suite (5 rounds × 1,000 iterations + 100 warmup = 5,000 measured operations per workload), Nexus leads every mutation, batch insert, and ACID transaction benchmark while outperforming Prisma across all 9 operations. On ultra-short (<0.3 ms) local SQLite point reads, Drizzle’s zero-bridge JS driver leads due to the fixed TS <-> Go serialization boundary.',
    codeTitle: 'results.json — Benchmark Run Configuration & Summary Artifact',
    code: `{
  "generatedAt": "2026-11-24T17:40:08.553Z",
  "runtime": "Bun 1.4.4",
  "database": "SQLite",
  "iterationsPerRound": 1000,
  "warmup": 100,
  "rounds": 5,
  "measuredOperationsPerWorkload": 5000,
  "summaryOpsPerSecond": {
    "create":        { "Nexus": 134.55, "Drizzle": 100.79, "Prisma": 101.25 },
    "update":        { "Nexus": 141.02, "Drizzle": 112.36, "Prisma": 105.60 },
    "delete":        { "Nexus": 66.61,  "Drizzle": 54.30,  "Prisma": 50.93  },
    "bulkInsert100": { "Nexus": 65.97,  "Drizzle": 62.05,  "Prisma": 56.04  },
    "transaction":   { "Nexus": 109.75, "Drizzle": 99.74,  "Prisma": 91.02  },
    "findUnique":    { "Nexus": 4681.19,"Drizzle": 8553.62,"Prisma": 2795.79},
    "filteredRead":  { "Nexus": 713.98, "Drizzle": 901.42, "Prisma": 610.10 },
    "count":         { "Nexus": 1689.10,"Drizzle": 2987.69,"Prisma": 1163.46},
    "exists":        { "Nexus": 3378.76,"Drizzle": 11173.45,"Prisma": 3257.11}
  }
}`,
    secondaryCodeTitle: 'Architectural Trade-off Analysis (TS <-> Go Engine Bridge)',
    secondaryCode: `// 1. Write, Batch & Transaction Workloads (Nexus #1 across all 5):
//    create (+33.5% vs Drizzle, +32.9% vs Prisma)
//    update (+25.5% vs Drizzle, +33.5% vs Prisma)
//    delete (+22.7% vs Drizzle, +30.8% vs Prisma)
//    bulkInsert100 (+6.3% vs Drizzle, +17.7% vs Prisma)
//    transaction (+10.0% vs Drizzle, +20.6% vs Prisma)
//
// 2. Local SQLite Sub-Millisecond Point Reads:
//    In-process SQLite calls take ~0.07-0.11 ms in raw JS bindings.
//    Crossing the TS <-> Go runtime bridge adds ~0.11-0.20 ms of fixed
//    serialization overhead—making Nexus 1.67x faster than Prisma on
//    findUnique while trailing Drizzle's direct JS binding on point reads.`,
    toc: [
      { id: 'overview', label: 'Transparent Benchmark Overview' },
      { id: 'primary-code', label: 'Run Metadata & Throughput Artifact' },
      { id: 'secondary-code', label: 'Architectural Trade-off Analysis' },
      { id: 'implementation-notes', label: 'Reproducibility Notes' }
    ],
    notes: [
      'All 3 ORMs executed identical schemas, 100 warmup iterations, and 5 rounds × 1,000 iterations (5,000 total measured operations) under Bun 1.4.4 with SQLite.',
      'Full raw JSON metrics including avgMs, p50Ms, p95Ms, p99Ms, and opsPerSecond are embedded and downloadable on the Homepage Benchmarks section.'
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    category: 'Reference',
    summary: 'Reference for @nexus-orm/nexus TypeScript exports and CLI commands.',
    description:
      'Core TypeScript functions, query builder methods, and CLI commands exported by the @nexus-orm/nexus package.',
    codeTitle: 'Core Exports & Type Utilities Overview (@nexus-orm/nexus)',
    code: `import {
  // Schema Definition
  defineSchema,
  defineTable,
  defineRelations,
  defineConfig,
  column,

  // Client & Runtime Bridge
  NexusClient,

  // Filter Operators
  eq, ne, gt, gte, lt, lte, and, or, inArray, isNull,

  // Static Type Helpers
  type InferModel,
  type InferInsertModel
} from '@nexus-orm/nexus';`,
    secondaryCodeTitle: 'NexusClient Configuration Interface',
    secondaryCode: `interface NexusClientConfig<TSchema> {
  schema: TSchema;
  driver: {
    adapter: string;
    url: string | undefined;
  };
  engine?: {
    maxOpenConns?: number;
    maxIdleConns?: number;
    queryLogging?: boolean;
  };
}`,
    toc: [
      { id: 'overview', label: 'Package Exports Overview' },
      { id: 'primary-code', label: '@nexus-orm/nexus Surface' },
      { id: 'secondary-code', label: 'Client Configuration Contract' },
      { id: 'api-table', label: 'Symbols & CLI Reference Table' }
    ],
    notes: [
      'All exports from @nexus-orm/nexus include TypeScript declaration types.',
      'See the reference table below for symbols and CLI commands.'
    ]
  }
];

const API_REFERENCE_ITEMS = [
  {
    symbol: 'defineTable(name, columns)',
    pkg: '@nexus-orm/nexus',
    kind: 'Function',
    description: 'Declares a typed database table model with column definitions and constraints.'
  },
  {
    symbol: 'defineSchema(models)',
    pkg: '@nexus-orm/nexus',
    kind: 'Function',
    description: 'Combines table definitions and relations into a unified schema graph for NexusClient.'
  },
  {
    symbol: 'defineRelations(table, builder)',
    pkg: '@nexus-orm/nexus',
    kind: 'Function',
    description: 'Registers one-to-one, one-to-many, or many-to-many relations between schema tables.'
  },
  {
    symbol: 'new NexusClient(config)',
    pkg: '@nexus-orm/nexus',
    kind: 'Class',
    description: 'Instantiates the TypeScript query client and configures the Go execution engine bridge.'
  },
  {
    symbol: 'db.query.<model>.findMany(opts)',
    pkg: '@nexus-orm/nexus',
    kind: 'Method',
    description: 'Executes a type-safe multi-record query supporting where, select, include, orderBy, and limit.'
  },
  {
    symbol: 'db.transaction(callback)',
    pkg: '@nexus-orm/nexus',
    kind: 'Method',
    description: 'Runs an asynchronous closure inside an ACID transaction coordinated by the Go execution engine.'
  },
  {
    symbol: 'npx @nexus-orm/nexus init',
    pkg: '@nexus-orm/nexus',
    kind: 'CLI Command',
    description: 'Scaffolds nexus.config.ts and the initial schema and migrations directory structure.'
  },
  {
    symbol: 'npx @nexus-orm/nexus migrate dev',
    pkg: '@nexus-orm/nexus',
    kind: 'CLI Command',
    description: 'Computes schema diffs via the Go engine, generates a versioned migration, and applies it.'
  },
  {
    symbol: 'npx @nexus-orm/nexus migrate deploy',
    pkg: '@nexus-orm/nexus',
    kind: 'CLI Command',
    description: 'Applies pending committed migrations in production or CI environments.'
  },
  {
    symbol: 'npx @nexus-orm/nexus introspect',
    pkg: '@nexus-orm/nexus',
    kind: 'CLI Command',
    description: 'Inspects an existing database catalog and emits typed Nexus schema definitions.'
  }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'docs'
  const [activeNav, setActiveNav] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pkgManager, setPkgManager] = useState('pnpm');
  const [copiedId, setCopiedId] = useState(null);

  // Interactive Live Query & AST Playground State (Hero & Playground)
  const [selectedColIds, setSelectedColIds] = useState(['id', 'slug', 'name', 'plan', 'createdAt']);
  const [selectedFilterIds, setSelectedFilterIds] = useState(['plan_enterprise']);
  const [selectedRelationIds, setSelectedRelationIds] = useState(['members']);
  const [queryOrderBy, setQueryOrderBy] = useState('desc');
  const [queryLimit, setQueryLimit] = useState(25);
  const [playgroundInspectorTab, setPlaygroundInspectorTab] = useState('sql'); // 'sql' | 'types' | 'ast'

  // Code Showcase & Architecture States
  const [showcaseTabId, setShowcaseTabId] = useState('schema');
  const [activeArchLayerId, setActiveArchLayerId] = useState('ts-layer');
  const [isSimulatingFlow, setIsSimulatingFlow] = useState(false);

  // Verified Benchmark Dataset Explorer States (`results.json`)
  const [selectedBenchOp, setSelectedBenchOp] = useState('create');
  const [benchMetricMode, setBenchMetricMode] = useState('opsPerSecond'); // 'opsPerSecond' | 'p50Ms' | 'p99Ms'
  const [showRawBenchmarkJson, setShowRawBenchmarkJson] = useState(false);

  // Documentation Portal States
  const [activeDocId, setActiveDocId] = useState('installation');
  const [docFilterQuery, setDocFilterQuery] = useState('');

  // Search & Live NPM Manifest Inspector Modals
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [npmModalOpen, setNpmModalOpen] = useState(false);

  // ============================================================================
  // 1. REAL LIVE NPM REGISTRY STATE (`registry.npmjs.org/@nexus-orm/nexus`)
  // ============================================================================
  const [npmState, setNpmState] = useState({
    loading: true,
    error: null,
    version: null,
    description: null,
    license: null,
    unpackedSize: null,
    fileCount: null,
    tarball: null,
    integrity: null,
    dependencies: {},
    maintainers: [],
    publishedAt: null,
    repositoryUrl: null,
    rawManifest: null,
    fetchedAt: null
  });

  const fetchLiveNpmData = useCallback(async () => {
    setNpmState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const [latestRes, fullRes] = await Promise.all([
        fetch(NPM_REGISTRY_LATEST_URL),
        fetch(NPM_REGISTRY_FULL_URL).catch(() => null)
      ]);

      if (!latestRes.ok) {
        throw new Error(`npm registry returned HTTP ${latestRes.status}`);
      }

      const latestData = await latestRes.json();
      let publishedAt = null;
      if (fullRes && fullRes.ok) {
        const fullData = await fullRes.json();
        if (fullData && fullData.time && latestData.version) {
          publishedAt = fullData.time[latestData.version] || fullData.time.modified || null;
        }
      }

      let repoUrl = null;
      if (latestData.repository) {
        const rawUrl =
          typeof latestData.repository === 'string'
            ? latestData.repository
            : latestData.repository.url;
        if (rawUrl) {
          repoUrl = rawUrl.replace(/^git\+/, '').replace(/\.git$/, '');
        }
      }

      setNpmState({
        loading: false,
        error: null,
        version: latestData.version || 'latest',
        description: latestData.description || 'TypeScript-first ORM powered by a Go execution engine.',
        license: latestData.license || 'MIT',
        unpackedSize: latestData.dist?.unpackedSize || null,
        fileCount: latestData.dist?.fileCount || null,
        tarball: latestData.dist?.tarball || null,
        integrity: latestData.dist?.integrity || null,
        dependencies: latestData.dependencies || {},
        maintainers: latestData.maintainers || [],
        publishedAt,
        repositoryUrl: repoUrl,
        rawManifest: latestData,
        fetchedAt: new Date().toLocaleTimeString()
      });
    } catch (err) {
      setNpmState((prev) => ({
        ...prev,
        loading: false,
        error: err.message || 'Unable to reach registry.npmjs.org'
      }));
    }
  }, []);

  // ============================================================================
  // 2. REAL LIVE DISCORD API STATE (`discord.com/api/v10/invites/G3BcYgZYf`)
  // ============================================================================
  const [discordState, setDiscordState] = useState({
    loading: true,
    error: null,
    code: DISCORD_INVITE_CODE,
    guildId: null,
    guildName: null,
    guildIcon: null,
    guildDescription: null,
    guildBanner: null,
    channelName: null,
    channelId: null,
    presenceCount: null,
    memberCount: null,
    inviter: null,
    expiresAt: null,
    widgetEnabled: false,
    widgetData: null,
    showWidgetIframe: false,
    iconError: false,
    fetchedAt: null
  });

  const fetchLiveDiscordInvite = useCallback(async () => {
    setDiscordState((prev) => ({ ...prev, loading: true, error: null, iconError: false }));
    try {
      const response = await fetch(DISCORD_API_INVITE_URL);
      if (!response.ok) {
        throw new Error(`Discord API returned HTTP ${response.status}`);
      }
      const data = await response.json();
      const guildId = data.guild?.id || null;

      let widgetEnabled = false;
      let widgetData = null;
      if (guildId) {
        try {
          const widgetRes = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
          if (widgetRes.ok) {
            widgetEnabled = true;
            widgetData = await widgetRes.json();
          }
        } catch (_e) {
          widgetEnabled = false;
        }
      }

      setDiscordState((prev) => ({
        ...prev,
        loading: false,
        error: null,
        code: data.code || DISCORD_INVITE_CODE,
        guildId,
        guildName: data.guild?.name || 'Nexus ORM',
        guildIcon: data.guild?.icon || null,
        guildDescription: data.guild?.description || null,
        guildBanner: data.guild?.banner || null,
        channelName: data.channel?.name || null,
        channelId: data.channel?.id || null,
        presenceCount:
          typeof data.approximate_presence_count === 'number'
            ? data.approximate_presence_count
            : null,
        memberCount:
          typeof data.approximate_member_count === 'number'
            ? data.approximate_member_count
            : null,
        inviter: data.inviter || null,
        expiresAt: data.expires_at || null,
        widgetEnabled,
        widgetData,
        fetchedAt: new Date().toLocaleTimeString()
      }));
    } catch (err) {
      setDiscordState((prev) => ({
        ...prev,
        loading: false,
        error: err.message || 'Unable to query Discord API'
      }));
    }
  }, []);

  // ============================================================================
  // 3. REAL IN-BROWSER EXECUTABLE BENCHMARK SUITE (`performance.now()`)
  // ============================================================================
  const [benchIterations, setBenchIterations] = useState(10000);
  const [benchComplexity, setBenchComplexity] = useState('standard'); // 'simple' | 'standard' | 'complex'
  const [benchResults, setBenchResults] = useState(null);
  const [isRunningBench, setIsRunningBench] = useState(false);

  const executeRealBrowserBenchmarks = useCallback(
    (iterCount = benchIterations, complexity = benchComplexity) => {
      setIsRunningBench(true);

      // Configure real workload inputs according to selected complexity
      const cols =
        complexity === 'simple'
          ? PLAYGROUND_COLUMNS.slice(0, 3)
          : complexity === 'standard'
          ? PLAYGROUND_COLUMNS.slice(0, 5)
          : PLAYGROUND_COLUMNS;

      const filters =
        complexity === 'simple'
          ? PLAYGROUND_FILTERS.slice(0, 1)
          : complexity === 'standard'
          ? PLAYGROUND_FILTERS.slice(0, 2)
          : PLAYGROUND_FILTERS;

      const rels =
        complexity === 'simple'
          ? []
          : complexity === 'standard'
          ? PLAYGROUND_RELATIONS.slice(0, 1)
          : PLAYGROUND_RELATIONS;

      // Pre-build flat joined rows for the 1:N relational hydration workload
      const childCountPerParent = complexity === 'simple' ? 2 : complexity === 'standard' ? 5 : 10;
      const flatFixtureRows = [];
      for (let p = 0; p < 5; p++) {
        for (let c = 0; c < childCountPerParent; c++) {
          flatFixtureRows.push({
            org_id: `018f3a9c-7c40-7000-8000-00000000000${p}`,
            org_slug: `org-team-${p}`,
            org_name: `Organization ${p}`,
            org_plan: p % 2 === 0 ? 'enterprise' : 'pro',
            member_id: `mem_${p}_${c}`,
            member_email: `dev${c}@sonikki.gg`,
            member_owner: c === 0
          });
        }
      }

      const candidateRecord = {
        id: '018f3a9c-7c40-7000-8000-19a84c90b111',
        slug: 'sonikki-core',
        name: 'Sonikki Core Engineering',
        plan: 'enterprise',
        isVerified: true,
        createdAt: new Date()
      };

      // Helper to measure a workload in 20 sub-batches so we get real p50 and p95 batch latencies
      const measureWorkload = (fn) => {
        const batches = 20;
        const perBatch = Math.max(1, Math.floor(iterCount / batches));
        const batchSamplesUsPerOp = [];

        // Warmup 200 ops
        let lastOutput = null;
        for (let w = 0; w < 200; w++) {
          lastOutput = fn(w);
        }

        const tStart = performance.now();
        for (let b = 0; b < batches; b++) {
          const b0 = performance.now();
          for (let i = 0; i < perBatch; i++) {
            lastOutput = fn(i);
          }
          const b1 = performance.now();
          const batchElapsedUs = (b1 - b0) * 1000;
          batchSamplesUsPerOp.push(batchElapsedUs / perBatch);
        }
        const tEnd = performance.now();

        const totalMs = Math.max(0.05, tEnd - tStart);
        const totalOps = batches * perBatch;
        const sorted = [...batchSamplesUsPerOp].sort((a, b) => a - b);
        const p50Us = sorted[Math.floor(sorted.length * 0.5)] || (totalMs * 1000) / totalOps;
        const p95Us = sorted[Math.floor(sorted.length * 0.95)] || p50Us;
        const opsPerSec = Math.round((totalOps / totalMs) * 1000);

        return {
          totalMs: Number(totalMs.toFixed(2)),
          p50Us: Number(p50Us.toFixed(3)),
          p95Us: Number(p95Us.toFixed(3)),
          opsPerSec,
          lastOutput
        };
      };

      // Workload 1: Relational Query AST Construction
      const astResult = measureWorkload((i) =>
        buildNexusQueryAst(cols, filters, rels, i % 2 === 0 ? 'desc' : 'asc', 25)
      );

      // Workload 2: Parameterized SQL Statement Compilation
      const sqlResult = measureWorkload(() =>
        compileAstToParameterizedSql(cols, filters, rels, 'desc', 25)
      );

      // Workload 3: 1:N Nested Relational Graph Hydration (Single-Pass Map)
      const hydrateResult = measureWorkload(() => hydrateRelationalRows(flatFixtureRows));

      // Workload 4: Schema Constraint & Type Validation
      const validateResult = measureWorkload(() => validateSchemaRecord(candidateRecord));

      setBenchResults({
        iterations: iterCount,
        complexity,
        measuredAt: new Date().toLocaleTimeString(),
        workloads: [
          {
            id: 'ast-build',
            name: '1. Relational Query AST Construction',
            description: `Constructs normalized Query AST envelopes (${cols.length} projected columns, ${filters.length} predicates, ${rels.length} relation joins).`,
            ...astResult,
            samplePreview: JSON.stringify(astResult.lastOutput)
          },
          {
            id: 'sql-compile',
            name: '2. Parameterized SQL Statement Compilation',
            description:
              'Compiles AST nodes into parameterized SQL with positional $1..$N bindings and lateral join clauses.',
            ...sqlResult,
            samplePreview: sqlResult.lastOutput.sql.replace(/\n/g, ' ')
          },
          {
            id: 'graph-hydrate',
            name: `3. 1:N Relational Graph Hydration (${flatFixtureRows.length} joined rows → 5 nested parents)`,
            description:
              'Deduplicates flat SQL join rows into nested parent/child object graphs in a single O(N) pass.',
            ...hydrateResult,
            samplePreview: `Hydrated ${hydrateResult.lastOutput.length} parent records (${flatFixtureRows.length} total child rows linked)`
          },
          {
            id: 'schema-validate',
            name: '4. Schema Constraint & Type Validation',
            description:
              'Validates UUID format, non-null text constraints, enum membership, and default timestamp hydration.',
            ...validateResult,
            samplePreview: JSON.stringify(validateResult.lastOutput.record)
          }
        ]
      });
      setIsRunningBench(false);
    },
    [benchIterations, benchComplexity]
  );

  const handleDownloadResultsJson = () => {
    const jsonString = JSON.stringify(REAL_BENCHMARK_ARTIFACT, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'results.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Trigger real API fetches & initial live browser benchmark on mount
  useEffect(() => {
    fetchLiveNpmData();
    fetchLiveDiscordInvite();
    executeRealBrowserBenchmarks(10000, 'standard');
  }, [fetchLiveNpmData, fetchLiveDiscordInvite, executeRealBrowserBenchmarks]);

  // Keyboard shortcut Cmd/Ctrl + K for quick search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setNpmModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Automated architecture flow trace
  useEffect(() => {
    if (!isSimulatingFlow) return;
    const ids = ARCHITECTURE_LAYERS.map((l) => l.id);
    let currentIdx = ids.indexOf(activeArchLayerId);

    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % ids.length;
      setActiveArchLayerId(ids[currentIdx]);
      if (currentIdx === ids.length - 1) {
        setIsSimulatingFlow(false);
      }
    }, 1100);

    return () => clearInterval(interval);
  }, [isSimulatingFlow, activeArchLayerId]);

  const handleCopy = (text, id) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  const openDocsPage = (docSlug = 'installation') => {
    setActiveDocId(docSlug);
    setActivePage('docs');
    setActiveNav(docSlug === 'api-reference' ? 'api-reference-nav' : 'docs-page');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (sectionId, docTopicId = null) => {
    setMobileMenuOpen(false);
    if (sectionId === 'docs-page' || (sectionId === 'documentation' && docTopicId)) {
      openDocsPage(docTopicId || activeDocId);
      return;
    }

    setActiveNav(sectionId);
    if (docTopicId) {
      setActiveDocId(docTopicId);
    }

    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToDocAnchor = (anchorId) => {
    const el = document.getElementById(`doc-anchor-${anchorId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle helpers for the Interactive Live Query & AST Playground
  const togglePlaygroundCol = (colId) => {
    if (colId === 'id') return; // primary key stays selected
    setSelectedColIds((prev) =>
      prev.includes(colId) ? prev.filter((id) => id !== colId) : [...prev, colId]
    );
  };

  const togglePlaygroundFilter = (filterId) => {
    setSelectedFilterIds((prev) =>
      prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]
    );
  };

  const togglePlaygroundRelation = (relId) => {
    setSelectedRelationIds((prev) =>
      prev.includes(relId) ? prev.filter((id) => id !== relId) : [...prev, relId]
    );
  };

  // Dynamically computed TypeScript query code, narrowed return type, AST JSON, and parameterized SQL
  const livePlaygroundOutput = useMemo(() => {
    const activeCols = PLAYGROUND_COLUMNS.filter((c) => selectedColIds.includes(c.id));
    const activeFilters = PLAYGROUND_FILTERS.filter((f) => selectedFilterIds.includes(f.id));
    const activeRels = PLAYGROUND_RELATIONS.filter((r) => selectedRelationIds.includes(r.id));

    const selectLines = activeCols.map((c) => `    ${c.id}: true`).join(',\n');
    const whereClauseCode =
      activeFilters.length === 0
        ? ''
        : activeFilters.length === 1
        ? `  where: ${activeFilters[0].tsExpr},\n`
        : `  where: and(\n    ${activeFilters.map((f) => f.tsExpr).join(',\n    ')}\n  ),\n`;

    const includeClauseCode =
      activeRels.length === 0
        ? ''
        : `  include: {\n    ${activeRels.map((r) => r.tsInclude).join(',\n    ')}\n  },\n`;

    const tsCode = `import { db } from './client';
import { organizations } from './schema';
import { eq${activeFilters.length > 1 ? ', and' : ''} } from '@nexus-orm/nexus';

const result = await db.query.organizations.findMany({
${whereClauseCode}  select: {
${selectLines}
  },
${includeClauseCode}  orderBy: { createdAt: '${queryOrderBy}' },
  limit: ${queryLimit}
});`;

    const returnTypeFields = activeCols.map((c) => `  ${c.id}: ${c.tsType};`).join('\n');
    const returnTypeRels = activeRels.map((r) => r.tsReturnType).join('\n');
    const narrowedType = `// Narrowed at compile time from your exact select & include configuration:
type InferredQueryResult = Array<{
${returnTypeFields}${returnTypeRels ? '\n' + returnTypeRels : ''}
}>;`;

    const astEnvelope = buildNexusQueryAst(
      activeCols,
      activeFilters,
      activeRels,
      queryOrderBy,
      queryLimit
    );
    const compiledSql = compileAstToParameterizedSql(
      activeCols,
      activeFilters,
      activeRels,
      queryOrderBy,
      queryLimit
    );

    return {
      tsCode,
      narrowedType,
      astJson: JSON.stringify(astEnvelope, null, 2),
      sql: compiledSql.sql,
      bindings: compiledSql.bindings
    };
  }, [selectedColIds, selectedFilterIds, selectedRelationIds, queryOrderBy, queryLimit]);

  const installCommands = {
    pnpm: 'pnpm add @nexus-orm/nexus',
    npm: 'npm install @nexus-orm/nexus',
    yarn: 'yarn add @nexus-orm/nexus',
    bun: 'bun add @nexus-orm/nexus'
  };

  const currentShowcaseTab =
    CODE_SHOWCASE_TABS.find((t) => t.id === showcaseTabId) || CODE_SHOWCASE_TABS[0];
  const currentArchLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === activeArchLayerId) || ARCHITECTURE_LAYERS[0];
  const currentDocSection =
    DOCS_SECTIONS.find((d) => d.id === activeDocId) || DOCS_SECTIONS[0];

  const docsCategories = useMemo(() => {
    const groups = ['Getting Started', 'Core Concepts', 'Execution & Tooling', 'Reference'];
    return groups.map((cat) => ({
      category: cat,
      items: DOCS_SECTIONS.filter(
        (d) =>
          d.category === cat &&
          (d.title.toLowerCase().includes(docFilterQuery.toLowerCase()) ||
            d.summary.toLowerCase().includes(docFilterQuery.toLowerCase()))
      )
    }));
  }, [docFilterQuery]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const allItems = [
      ...DOCS_SECTIONS.map((d) => ({
        type: 'Documentation',
        title: d.title,
        subtitle: d.summary,
        action: () => {
          setSearchModalOpen(false);
          openDocsPage(d.id);
        }
      })),
      ...FEATURES_LIST.map((f) => ({
        type: 'Feature',
        title: f.title,
        subtitle: f.description,
        action: () => {
          setSearchModalOpen(false);
          navigateToSection('features');
        }
      })),
      ...API_REFERENCE_ITEMS.map((a) => ({
        type: a.pkg,
        title: a.symbol,
        subtitle: a.description,
        action: () => {
          setSearchModalOpen(false);
          openDocsPage('api-reference');
        }
      }))
    ];

    if (!q) return allItems.slice(0, 8);
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const discordIconUrl =
    discordState.guildId && discordState.guildIcon && !discordState.iconError
      ? `https://cdn.discordapp.com/icons/${discordState.guildId}/${discordState.guildIcon}.png?size=128`
      : null;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#141413] text-[#181715] dark:text-[#F4F1EA] selection:bg-amber-400/30 selection:text-amber-950 dark:selection:text-amber-200 transition-colors duration-200 font-sans">
        {/* ==================================================================
            TOP ANNOUNCEMENT / LIVE ECOSYSTEM STATUS BAR
        ================================================================== */}
        <div className="border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F3EFE6] dark:bg-[#1A1917] px-4 py-2 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                NEXUS ORM
              </span>
              <span className="text-stone-700 dark:text-stone-300 font-medium">
                TypeScript-first developer ergonomics meets a compiled Go execution engine.
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-stone-600 dark:text-stone-400">
              <button
                onClick={() => setNpmModalOpen(true)}
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-amber-800 dark:text-amber-300 cursor-pointer"
              >
                <Package className="w-3.5 h-3.5" />
                <span>
                  @nexus-orm/nexus{npmState.version ? ` v${npmState.version}` : ''}
                </span>
              </button>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <button
                onClick={() => openDocsPage('installation')}
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                Docs Portal
              </button>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-stone-700 dark:text-stone-300"
              >
                <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>
                  Discord
                  {typeof discordState.presenceCount === 'number'
                    ? ` (${discordState.presenceCount} online)`
                    : ''}
                </span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <a
                href="https://sonikki.gg"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                sonikki.gg
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================================
            STICKY NAVIGATION HEADER
        ================================================================== */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FAF8F5]/90 dark:bg-[#141413]/90 border-b border-[#E6E2D8] dark:border-[#282623]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            {/* Brand Logo + Wordmark */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToSection('overview')}
                className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
              >
                <NexusLogo className="w-10 h-10 transition-transform duration-200 group-hover:scale-105" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold tracking-tight text-lg text-stone-900 dark:text-stone-100">
                      NEXUS
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/35 font-bold">
                      ORM
                    </span>
                  </div>
                  <span className="block font-mono text-[10px] text-stone-500 dark:text-stone-400 -mt-0.5">
                    sonikki.gg
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
              <button
                onClick={() => navigateToSection('overview')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === 'home' && activeNav === 'overview'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => navigateToSection('features')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === 'home' && activeNav === 'features'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => navigateToSection('architecture')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === 'home' && activeNav === 'architecture'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => navigateToSection('benchmarks')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                  activePage === 'home' && activeNav === 'benchmarks'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                <Gauge className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Benchmarks</span>
              </button>
              <button
                onClick={() =>
                  openDocsPage(activeDocId === 'api-reference' ? 'installation' : activeDocId)
                }
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                  activePage === 'docs' && activeDocId !== 'api-reference'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/30 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Documentation</span>
              </button>
              <button
                onClick={() => openDocsPage('api-reference')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === 'docs' && activeDocId === 'api-reference'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/30 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                API Reference
              </button>
              <button
                onClick={() => navigateToSection('discord-community')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activePage === 'home' && activeNav === 'discord-community'
                    ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                Discord
              </button>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-500 dark:text-stone-400 hover:border-amber-500/50 transition-colors shadow-2xs cursor-pointer"
                aria-label="Search documentation"
              >
                <Search className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="hidden xl:inline">Search docs...</span>
                <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-[#F4F1EA] dark:bg-[#282623] text-stone-600 dark:text-stone-300 rounded border border-[#E2DDD2] dark:border-[#383530]">
                  ⌘K
                </kbd>
              </button>

              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-800 dark:text-stone-200 hover:border-amber-500/60 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                title="Join the Official Nexus ORM Discord Server"
              >
                <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="hidden md:inline">Discord</span>
              </a>

              <button
                onClick={() => setNpmModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-800 dark:text-stone-200 hover:border-amber-500/50 transition-colors cursor-pointer"
                title="Inspect live @nexus-orm/nexus npm package manifest"
              >
                <Package className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span className="hidden md:inline">
                  npm{npmState.version ? ` v${npmState.version}` : ''}
                </span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-700 dark:text-stone-300 hover:border-amber-500/50 transition-colors cursor-pointer"
                aria-label="Toggle color theme"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              <button
                onClick={() => openDocsPage('quick-start')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xs transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-700 dark:text-stone-300"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Responsive Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-b border-[#E6E2D8] dark:border-[#282623] bg-[#FAF8F5] dark:bg-[#181715] px-4 py-4 space-y-2">
              <button
                onClick={() => navigateToSection('overview')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>Overview (Homepage)</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => navigateToSection('features')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>Features</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => navigateToSection('architecture')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>Architecture</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => navigateToSection('benchmarks')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>Benchmarks (Bun 1.4.4 + SQLite)</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => openDocsPage('installation')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-amber-800 dark:text-amber-300 bg-amber-500/10 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Dedicated Documentation Page
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => openDocsPage('api-reference')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 flex items-center justify-between"
              >
                <span>API Reference</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <div className="pt-2 border-t border-[#E6E2D8] dark:border-[#282623] flex flex-wrap items-center justify-between gap-2">
                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 py-2"
                >
                  <DiscordIcon className="w-4 h-4" />
                  Join Discord Server
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setNpmModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300 py-2"
                >
                  <Package className="w-4 h-4 text-orange-500" />
                  Inspect Live npm Manifest
                </button>
              </div>
            </div>
          )}
        </header>

        {/* ==================================================================
            VIEW 1: DEDICATED FULL-PAGE DOCUMENTATION PORTAL (activePage === 'docs')
        ================================================================== */}
        {activePage === 'docs' ? (
          <div className="min-h-[calc(100vh-4rem)] bg-[#FAF8F5] dark:bg-[#141413] border-b border-[#E6E2D8] dark:border-[#282623]">
            {/* Subheader Bar */}
            <div className="border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/80 dark:bg-[#191816]/80 px-4 sm:px-6 lg:px-8 py-3">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    onClick={() => navigateToSection('overview')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#22201D] border border-[#E2DDD2] dark:border-[#2F2D29] text-stone-700 dark:text-stone-300 hover:border-amber-500/50 transition-colors cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>← Back to Homepage</span>
                  </button>
                  <span className="text-stone-400">/</span>
                  <span className="text-stone-500 dark:text-stone-400">Docs</span>
                  <span className="text-stone-400">/</span>
                  <span className="text-stone-600 dark:text-stone-300">{currentDocSection.category}</span>
                  <span className="text-stone-400">/</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400">
                    {currentDocSection.title}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-semibold hover:bg-amber-500/25 transition-colors inline-flex items-center gap-1"
                  >
                    <span>
                      @nexus-orm/nexus{npmState.version ? ` v${npmState.version}` : ''}
                    </span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#22201D] border border-[#E2DDD2] dark:border-[#2F2D29] text-xs font-medium text-stone-700 dark:text-stone-300 hover:border-amber-500 transition-colors"
                  >
                    <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3-Column Documentation Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* COLUMN 1: Left Sticky Navigation Sidebar */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#EFECE4] dark:border-[#282622]">
                    <NexusLogo className="w-8 h-8 shrink-0" />
                    <div>
                      <div className="font-bold text-sm text-stone-900 dark:text-white flex items-center gap-1.5">
                        <span>Nexus Docs</span>
                        {npmState.version && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300">
                            v{npmState.version}
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400">
                        sonikki.gg/docs
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-5">
                    <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={docFilterQuery}
                      onChange={(e) => setDocFilterQuery(e.target.value)}
                      placeholder="Filter topics..."
                      className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-[#FAF8F5] dark:bg-[#141312] border border-[#DED8CA] dark:border-[#2E2C28] text-stone-800 dark:text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-5">
                    {docsCategories.map((group) =>
                      group.items.length > 0 ? (
                        <div key={group.category}>
                          <div className="px-2 mb-1.5 font-mono text-[11px] uppercase tracking-wider font-semibold text-stone-400 dark:text-stone-500">
                            {group.category}
                          </div>
                          <div className="space-y-1">
                            {group.items.map((item) => {
                              const isActive = item.id === activeDocId;
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    setActiveDocId(item.id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                                    isActive
                                      ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/35 font-semibold'
                                      : 'text-stone-600 dark:text-stone-400 hover:bg-[#F4F1EA] dark:hover:bg-[#24221F] hover:text-stone-900 dark:hover:text-stone-200'
                                  }`}
                                >
                                  <span>{item.title}</span>
                                  {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </aside>

                {/* COLUMN 2: Center Technical Documentation Reader */}
                <main className="lg:col-span-6 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-6 sm:p-8 lg:p-10 shadow-2xs">
                  <div id="doc-anchor-overview">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      {currentDocSection.category}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
                      {currentDocSection.title}
                    </h1>
                    <p className="mt-2.5 text-base sm:text-lg font-medium text-amber-800 dark:text-amber-300">
                      {currentDocSection.summary}
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      {currentDocSection.description}
                    </p>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-amber-500/30 flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        Official Package:{' '}
                      </span>
                      Distributed via{' '}
                      <a
                        href={NPM_PACKAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-amber-700 dark:text-amber-300 underline hover:text-orange-600"
                      >
                        @nexus-orm/nexus
                      </a>{' '}
                      on npm.
                    </div>
                  </div>

                  {/* Primary Code Block */}
                  <div id="doc-anchor-primary-code" className="mt-8">
                    <div className="rounded-xl bg-[#151413] border border-stone-800 overflow-hidden shadow-md">
                      <div className="px-4 py-2.5 bg-[#1E1C1A] border-b border-stone-800 flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-stone-200 font-medium flex items-center gap-2">
                          <FileCode className="w-3.5 h-3.5 text-amber-400" />
                          {currentDocSection.codeTitle}
                        </span>
                        <button
                          onClick={() =>
                            handleCopy(currentDocSection.code, `dedicated-doc-${currentDocSection.id}`)
                          }
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs transition-colors cursor-pointer"
                        >
                          {copiedId === `dedicated-doc-${currentDocSection.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-4 sm:p-5 overflow-x-auto">
                        <SyntaxHighlightedCode code={currentDocSection.code} />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Code Block */}
                  {currentDocSection.secondaryCode && (
                    <div id="doc-anchor-secondary-code" className="mt-7">
                      <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2.5">
                        {currentDocSection.secondaryCodeTitle}
                      </h3>
                      <div className="rounded-xl bg-[#151413] border border-stone-800 overflow-hidden">
                        <div className="px-4 py-2 bg-[#1E1C1A] border-b border-stone-800 flex items-center justify-between">
                          <span className="font-mono text-[11px] text-amber-300">
                            {currentDocSection.secondaryCodeTitle}
                          </span>
                          <button
                            onClick={() =>
                              handleCopy(
                                currentDocSection.secondaryCode,
                                `dedicated-sec-${currentDocSection.id}`
                              )
                            }
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-[11px] transition-colors cursor-pointer"
                          >
                            {copiedId === `dedicated-sec-${currentDocSection.id}` ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <SyntaxHighlightedCode code={currentDocSection.secondaryCode} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Implementation Notes */}
                  <div
                    id="doc-anchor-implementation-notes"
                    className="mt-8 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925] p-5"
                  >
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold mb-3">
                      Key Implementation Notes
                    </div>
                    <ul className="space-y-2.5">
                      {currentDocSection.notes.map((note, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* API Reference Table */}
                  {currentDocSection.id === 'api-reference' && (
                    <div id="doc-anchor-api-table" className="mt-8">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-3">
                        Core Symbols & CLI Commands
                      </h3>
                      <div className="overflow-x-auto rounded-xl border border-[#E4DFD3] dark:border-[#2B2925]">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-[#F4F1EA] dark:bg-[#23211E] border-b border-[#E4DFD3] dark:border-[#2B2925] font-mono text-xs text-stone-600 dark:text-stone-300">
                              <th className="py-3 px-4">Symbol / Command</th>
                              <th className="py-3 px-4">Package</th>
                              <th className="py-3 px-4">Kind</th>
                              <th className="py-3 px-4">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EFECE4] dark:divide-[#262421]">
                            {API_REFERENCE_ITEMS.map((item, i) => (
                              <tr
                                key={i}
                                className="hover:bg-[#FAF8F5] dark:hover:bg-[#1F1E1B] transition-colors"
                              >
                                <td className="py-3 px-4 font-mono font-semibold text-amber-800 dark:text-amber-300 whitespace-nowrap">
                                  {item.symbol}
                                </td>
                                <td className="py-3 px-4 font-mono text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap">
                                  {item.pkg}
                                </td>
                                <td className="py-3 px-4">
                                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                                    {item.kind}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-stone-600 dark:text-stone-300">
                                  {item.description}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Previous / Next Article Pagination */}
                  <div className="mt-10 pt-6 border-t border-[#EFECE4] dark:border-[#282622] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(() => {
                      const currentIndex = DOCS_SECTIONS.findIndex((d) => d.id === activeDocId);
                      const prevDoc = DOCS_SECTIONS[currentIndex - 1];
                      const nextDoc = DOCS_SECTIONS[currentIndex + 1];
                      return (
                        <>
                          <div>
                            {prevDoc && (
                              <button
                                onClick={() => {
                                  setActiveDocId(prevDoc.id);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="w-full text-left p-4 rounded-xl border border-[#E4DFD3] dark:border-[#2B2925] hover:border-amber-500/60 transition-colors group cursor-pointer"
                              >
                                <span className="block font-mono text-[11px] text-stone-400">
                                  ← Previous Article
                                </span>
                                <span className="mt-1 block text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                                  {prevDoc.title}
                                </span>
                              </button>
                            )}
                          </div>
                          <div>
                            {nextDoc && (
                              <button
                                onClick={() => {
                                  setActiveDocId(nextDoc.id);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="w-full text-right p-4 rounded-xl border border-[#E4DFD3] dark:border-[#2B2925] hover:border-amber-500/60 transition-colors group cursor-pointer"
                              >
                                <span className="block font-mono text-[11px] text-stone-400">
                                  Next Article →
                                </span>
                                <span className="mt-1 block text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                                  {nextDoc.title}
                                </span>
                              </button>
                            )}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </main>

                {/* COLUMN 3: Right Sticky Table of Contents & Live Discord Invite Card */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-5">
                  <div className="rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-5 shadow-2xs">
                    <div className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-500 dark:text-stone-400 mb-3">
                      On this page
                    </div>
                    <ul className="space-y-2 text-xs">
                      {(currentDocSection.toc || []).map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToDocAnchor(item.id)}
                            className="text-left text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            <span className="w-1 h-1 rounded-full bg-amber-500" />
                            <span>{item.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Discord Card in Docs Sidebar */}
                  <div className="rounded-2xl bg-[#161513] text-stone-200 border border-stone-800 p-5 shadow-md">
                    <div className="flex items-center gap-2.5">
                      {discordIconUrl ? (
                        <img
                          src={discordIconUrl}
                          alt={discordState.guildName || 'Discord Server'}
                          className="w-9 h-9 rounded-xl object-cover border border-amber-500/40"
                          onError={() =>
                            setDiscordState((prev) => ({ ...prev, iconError: true }))
                          }
                        />
                      ) : (
                        <NexusLogo className="w-9 h-9" />
                      )}
                      <div>
                        <div className="font-bold text-sm text-white">
                          {discordState.guildName || 'Nexus Discord'}
                        </div>
                        <div className="font-mono text-[11px] text-amber-400">
                          discord.gg/{DISCORD_INVITE_CODE}
                        </div>
                      </div>
                    </div>

                    {typeof discordState.presenceCount === 'number' && (
                      <div className="mt-3 flex items-center gap-3 text-xs font-mono text-stone-300">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {discordState.presenceCount} Online
                        </span>
                        {typeof discordState.memberCount === 'number' && (
                          <span className="text-stone-400">
                            • {discordState.memberCount} Members
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-4 space-y-2">
                      <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <DiscordIcon className="w-3.5 h-3.5" />
                        <span>Join Discord Server</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* ==================================================================
                VIEW 2: HOMEPAGE — HERO SECTION WITH LIVE INTERACTIVE QUERY & AST PLAYGROUND
            ================================================================== */}
            <section
              id="overview"
              className="relative overflow-hidden border-b border-[#E6E2D8] dark:border-[#282623] pt-10 pb-16 lg:pt-16 lg:pb-24"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-45 dark:opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.22) 1px, transparent 0)',
                  backgroundSize: '28px 28px'
                }}
              />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
                  {/* Left Column: Headline, Live npm Registry Badge, Install Switcher & CTAs */}
                  <div className="lg:col-span-5 pt-1">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] shadow-2xs mb-6">
                      <NexusLogo className="w-5 h-5" />
                      <span className="font-mono text-xs font-medium text-stone-700 dark:text-stone-300">
                        TypeScript API + Go Execution Engine
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-stone-900 dark:text-white">
                      Your data layer.{' '}
                      <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 dark:from-amber-400 dark:via-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
                        Connected.
                      </span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                      A TypeScript-first ORM powered by Go. Build type-safe database applications with a
                      developer experience designed for simplicity and control.
                    </p>

                    {/* Primary CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openDocsPage('quick-start')}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-stone-900 hover:bg-stone-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-stone-950 shadow-sm transition-all cursor-pointer"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 dark:text-amber-300 border border-amber-500/35 transition-all"
                      >
                        <DiscordIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>Join Discord</span>
                      </a>

                      <button
                        onClick={() => setNpmModalOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E1D1B] hover:bg-[#F3EFE6] dark:hover:bg-[#262522] text-stone-800 dark:text-stone-200 border border-[#DCD6C8] dark:border-[#32302B] transition-all cursor-pointer"
                      >
                        <Package className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        <span>Inspect npm Package</span>
                      </button>
                    </div>

                    {/* Package Manager Install Box for @nexus-orm/nexus */}
                    <div className="mt-8 rounded-xl bg-white dark:bg-[#1A1917] border border-[#E2DDD2] dark:border-[#2C2A26] shadow-2xs overflow-hidden">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-[#F4F1EA] dark:bg-[#211F1D] border-b border-[#E2DDD2] dark:border-[#2C2A26]">
                        <div className="flex items-center gap-1">
                          {['pnpm', 'npm', 'yarn', 'bun'].map((pm) => (
                            <button
                              key={pm}
                              onClick={() => setPkgManager(pm)}
                              className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                                pkgManager === pm
                                  ? 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 font-semibold'
                                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                              }`}
                            >
                              {pm}
                            </button>
                          ))}
                        </div>
                        <a
                          href={NPM_PACKAGE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-amber-700 dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                        >
                          <span>@nexus-orm/nexus</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="px-4 py-3 flex items-center justify-between gap-3 font-mono text-xs text-stone-800 dark:text-stone-200">
                        <div className="truncate">
                          <span className="text-amber-600 dark:text-amber-400 select-none">$ </span>
                          <span>{installCommands[pkgManager]}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(installCommands[pkgManager], 'hero-install')}
                          className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F4F1EA] dark:bg-[#282623] hover:bg-amber-500/20 text-stone-700 dark:text-stone-300 text-[11px] transition-colors cursor-pointer"
                        >
                          {copiedId === 'hero-install' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Live npm Registry Telemetry Cards */}
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setNpmModalOpen(true)}
                        className="text-left px-3 py-2.5 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623] hover:border-amber-500/50 transition-colors cursor-pointer"
                      >
                        <div className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold flex items-center justify-between">
                          <span>npm Version</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <div className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 mt-0.5 truncate">
                          {npmState.loading
                            ? 'Fetching...'
                            : npmState.version
                            ? `v${npmState.version}`
                            : '@nexus-orm/nexus'}
                        </div>
                      </button>

                      <button
                        onClick={() => setNpmModalOpen(true)}
                        className="text-left px-3 py-2.5 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623] hover:border-amber-500/50 transition-colors cursor-pointer"
                      >
                        <div className="text-[10px] font-mono uppercase text-orange-700 dark:text-orange-400 font-semibold">
                          Unpacked Size
                        </div>
                        <div className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 mt-0.5 truncate">
                          {npmState.loading
                            ? 'Fetching...'
                            : npmState.unpackedSize
                            ? `${(npmState.unpackedSize / 1024).toFixed(1)} KB`
                            : 'Inspect npm'}
                        </div>
                      </button>

                      <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623] hover:border-amber-500/50 transition-colors block"
                      >
                        <div className="text-[10px] font-mono uppercase text-stone-600 dark:text-stone-400 font-semibold flex items-center justify-between">
                          <span>Discord Live</span>
                          <ArrowUpRight className="w-3 h-3 text-amber-500" />
                        </div>
                        <div className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 mt-0.5 truncate">
                          {discordState.loading
                            ? 'Connecting...'
                            : typeof discordState.presenceCount === 'number'
                            ? `${discordState.presenceCount} Online`
                            : 'Join Server'}
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: REAL Interactive Query & AST Compiler Playground */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#161514] border border-stone-800 shadow-xl overflow-hidden">
                      {/* Top Header */}
                      <div className="px-4 py-3 bg-[#1E1C1A] border-b border-stone-800 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 mr-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-500/70" />
                          </div>
                          <span className="font-mono text-xs font-semibold text-white flex items-center gap-1.5">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                            Interactive Query, Type & SQL Compiler Playground
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(livePlaygroundOutput.tsCode, 'hero-code')}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-[11px] transition-colors cursor-pointer"
                        >
                          {copiedId === 'hero-code' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied TS</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy TS</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Interactive Toggle Controls Bar */}
                      <div className="p-3.5 bg-[#191816] border-b border-stone-800 space-y-2.5 text-xs">
                        {/* Row 1: Toggle Projected Columns */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[11px] text-stone-400 mr-1">
                            select:
                          </span>
                          {PLAYGROUND_COLUMNS.map((col) => {
                            const active = selectedColIds.includes(col.id);
                            return (
                              <button
                                key={col.id}
                                onClick={() => togglePlaygroundCol(col.id)}
                                className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors cursor-pointer ${
                                  active
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                                    : 'bg-stone-900 text-stone-500 border border-stone-800 hover:text-stone-300'
                                }`}
                                title={
                                  col.alwaysRequired
                                    ? 'Primary key id is always selected'
                                    : `Toggle ${col.label} column`
                                }
                              >
                                {col.label}
                              </button>
                            );
                          })}
                        </div>

                        {/* Row 2: Toggle Where Filters & Relations */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-800/80">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-mono text-[11px] text-stone-400 mr-1">
                              where:
                            </span>
                            {PLAYGROUND_FILTERS.map((f) => {
                              const active = selectedFilterIds.includes(f.id);
                              return (
                                <button
                                  key={f.id}
                                  onClick={() => togglePlaygroundFilter(f.id)}
                                  className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors cursor-pointer ${
                                    active
                                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 font-semibold'
                                      : 'bg-stone-900 text-stone-500 border border-stone-800 hover:text-stone-300'
                                  }`}
                                >
                                  {f.label}
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center gap-1.5 font-mono text-[11px]">
                            <span className="text-stone-400">limit:</span>
                            {[10, 25, 50].map((lim) => (
                              <button
                                key={lim}
                                onClick={() => setQueryLimit(lim)}
                                className={`px-1.5 py-0.5 rounded cursor-pointer ${
                                  queryLimit === lim
                                    ? 'bg-amber-500 text-stone-950 font-bold'
                                    : 'bg-stone-900 text-stone-400'
                                }`}
                              >
                                {lim}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Row 3: Toggle Relational Includes */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-800/80">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-mono text-[11px] text-stone-400 mr-1">
                              include:
                            </span>
                            {PLAYGROUND_RELATIONS.map((rel) => {
                              const active = selectedRelationIds.includes(rel.id);
                              return (
                                <button
                                  key={rel.id}
                                  onClick={() => togglePlaygroundRelation(rel.id)}
                                  className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors cursor-pointer ${
                                    active
                                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                                      : 'bg-stone-900 text-stone-500 border border-stone-800 hover:text-stone-300'
                                  }`}
                                >
                                  +{rel.label}
                                </button>
                              );
                            })}
                          </div>

                          <button
                            onClick={() =>
                              setQueryOrderBy((prev) => (prev === 'desc' ? 'asc' : 'desc'))
                            }
                            className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300 font-mono text-[11px] hover:border-amber-500/40 cursor-pointer"
                          >
                            orderBy: createdAt {queryOrderBy.toUpperCase()}
                          </button>
                        </div>
                      </div>

                      {/* Generated TypeScript Code */}
                      <div className="p-4 sm:p-5 bg-[#141312] overflow-x-auto">
                        <SyntaxHighlightedCode code={livePlaygroundOutput.tsCode} />
                      </div>

                      {/* Bottom Live Compiler Output Drawer: Parameterized SQL | Narrowed TS Type | Go AST JSON */}
                      <div className="border-t border-stone-800 bg-[#1B1A18]">
                        <div className="px-4 py-2 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setPlaygroundInspectorTab('sql')}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                                playgroundInspectorTab === 'sql'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                                  : 'text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <Database className="w-3.5 h-3.5" />
                              Compiled Parameterized SQL
                            </button>
                            <button
                              onClick={() => setPlaygroundInspectorTab('types')}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                                playgroundInspectorTab === 'types'
                                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold'
                                  : 'text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <Braces className="w-3.5 h-3.5" />
                              Narrowed Return Type
                            </button>
                            <button
                              onClick={() => setPlaygroundInspectorTab('ast')}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                                playgroundInspectorTab === 'ast'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                                  : 'text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <Cpu className="w-3.5 h-3.5" />
                              Go Engine AST Envelope
                            </button>
                          </div>
                        </div>

                        <div className="p-4 font-mono text-xs text-stone-300 bg-[#171614] overflow-x-auto">
                          {playgroundInspectorTab === 'sql' && (
                            <div>
                              <pre className="text-amber-200/95 leading-5 whitespace-pre-wrap">
                                {livePlaygroundOutput.sql}
                              </pre>
                              <div className="mt-2.5 pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 flex items-center justify-between">
                                <span>
                                  Bound Parameters:{' '}
                                  <code className="text-orange-300">
                                    {JSON.stringify(livePlaygroundOutput.bindings)}
                                  </code>
                                </span>
                                <span className="text-emerald-400">✔ Zero SQL Injection Surface</span>
                              </div>
                            </div>
                          )}
                          {playgroundInspectorTab === 'types' && (
                            <pre className="text-orange-200/95 leading-5">
                              {livePlaygroundOutput.narrowedType}
                            </pre>
                          )}
                          {playgroundInspectorTab === 'ast' && (
                            <pre className="text-amber-200/90 leading-5">
                              {livePlaygroundOutput.astJson}
                            </pre>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================
                TRANSPARENT BENCHMARK SUITE (`results.json` — Bun 1.4.4 + SQLite)
                + LIVE IN-BROWSER AST/SQL MICRO-BENCHMARK RUNNER
            ================================================================== */}
            <section
              id="benchmarks"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/60 dark:bg-[#171614]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header & Transparency Statement */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>VERIFIED BENCHMARK DATA • BUN 1.4.4 + SQLITE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
                      Transparent head-to-head benchmarks. No cherry-picking.
                    </h2>
                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      Every metric below is loaded directly from our unmodified{' '}
                      <code className="font-mono text-amber-700 dark:text-amber-300 font-semibold">
                        results.json
                      </code>{' '}
                      suite across <strong>5,000 measured operations</strong> per workload (5 rounds
                      × 1,000 iterations after 100 warmup ops). We publish both where Nexus leads
                      (writes, updates, deletes, batch inserts, and ACID transactions) and where
                      in-process JS drivers lead (sub-0.3 ms local SQLite point reads).
                    </p>
                  </div>

                  {/* Action Buttons: View/Download Raw results.json & Docs Guide */}
                  <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
                    <button
                      onClick={() => setShowRawBenchmarkJson((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1E1D1B] border border-[#DCD6C8] dark:border-[#32302B] hover:border-amber-500/60 text-stone-800 dark:text-stone-200 font-mono text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <FileJson className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>{showRawBenchmarkJson ? 'Hide results.json' : 'Inspect results.json'}</span>
                    </button>

                    <button
                      onClick={handleDownloadResultsJson}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1E1D1B] border border-[#DCD6C8] dark:border-[#32302B] hover:border-amber-500/60 text-stone-800 dark:text-stone-200 font-mono text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                      <span>Download JSON</span>
                    </button>

                    <button
                      onClick={() => openDocsPage('benchmarks-doc')}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-mono text-xs font-semibold shadow-xs transition-all cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Methodology Docs</span>
                    </button>
                  </div>
                </div>

                {/* Exact Run Metadata Strip */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  {[
                    { label: 'Runtime', value: REAL_BENCHMARK_ARTIFACT.runtime },
                    { label: 'Database', value: REAL_BENCHMARK_ARTIFACT.database },
                    {
                      label: 'Measured Ops / Test',
                      value: (
                        REAL_BENCHMARK_ARTIFACT.rounds * REAL_BENCHMARK_ARTIFACT.iterationsPerRound
                      ).toLocaleString()
                    },
                    {
                      label: 'Rounds × Iterations',
                      value: `${REAL_BENCHMARK_ARTIFACT.rounds} × ${REAL_BENCHMARK_ARTIFACT.iterationsPerRound}`
                    },
                    { label: 'Warmup Ops', value: `${REAL_BENCHMARK_ARTIFACT.warmup} ops` },
                    { label: 'Timestamp (UTC)', value: '2026-11-24 17:40' }
                  ].map((meta) => (
                    <div
                      key={meta.label}
                      className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925]"
                    >
                      <div className="text-[10px] font-mono uppercase text-stone-500 dark:text-stone-400">
                        {meta.label}
                      </div>
                      <div className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        {meta.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collapsible Raw results.json Artifact Viewer */}
                {showRawBenchmarkJson && (
                  <div className="mt-6 rounded-2xl bg-[#151413] border border-stone-800 overflow-hidden shadow-xl">
                    <div className="px-4 py-2.5 bg-[#1E1C1A] border-b border-stone-800 flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-amber-300 font-semibold flex items-center gap-2">
                        <FileJson className="w-3.5 h-3.5" />
                        results.json — Unmodified Benchmark Output ({REAL_BENCHMARK_ARTIFACT.generatedAt})
                      </span>
                      <button
                        onClick={() =>
                          handleCopy(
                            JSON.stringify(REAL_BENCHMARK_ARTIFACT, null, 2),
                            'copy-raw-results-json'
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs transition-colors cursor-pointer"
                      >
                        {copiedId === 'copy-raw-results-json' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied JSON</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Raw JSON</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs text-stone-200 overflow-x-auto max-h-80 leading-5">
                      {JSON.stringify(REAL_BENCHMARK_ARTIFACT, null, 2)}
                    </pre>
                  </div>
                )}

                {/* Honest Executive Summary Cards */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-amber-500/40 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase font-bold text-amber-700 dark:text-amber-400">
                        Where Nexus Leads (#1)
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 font-semibold">
                        5 of 9 Workloads
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-base text-stone-900 dark:text-white">
                      Writes, Updates, Deletes, Bulk Inserts &amp; Transactions
                    </div>
                    <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Nexus ranks #1 across every mutation and batch workload:{' '}
                      <strong>create</strong> (134.5 ops/s, +33.5% vs Drizzle),{' '}
                      <strong>update</strong> (141.0 ops/s, +25.5% vs Drizzle),{' '}
                      <strong>delete</strong> (66.6 ops/s, +22.7% vs Drizzle),{' '}
                      <strong>bulkInsert100</strong> (66.0 ops/s), and{' '}
                      <strong>transaction</strong> (109.7 ops/s).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase font-bold text-orange-700 dark:text-orange-400">
                        Nexus vs. Prisma
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-orange-500/15 text-orange-800 dark:text-orange-300 font-semibold">
                        9 of 9 Workloads
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-base text-stone-900 dark:text-white">
                      Faster than Prisma across every single operation
                    </div>
                    <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Nexus outperforms Prisma on all 9 benchmarked workloads—including{' '}
                      <strong>1.67× faster</strong> on <code className="font-mono">findUnique</code>{' '}
                      (4,681 vs 2,796 ops/s), <strong>1.45× faster</strong> on{' '}
                      <code className="font-mono">count</code>, and <strong>1.33× faster</strong> on{' '}
                      <code className="font-mono">create</code> and{' '}
                      <code className="font-mono">update</code>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase font-bold text-stone-600 dark:text-stone-400 flex items-center gap-1">
                        <Scale className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        Candid Architectural Trade-off
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-base text-stone-900 dark:text-white">
                      Sub-millisecond local SQLite point reads
                    </div>
                    <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      On ultra-fast local SQLite reads (<code className="font-mono">findUnique</code>{' '}
                      and <code className="font-mono">exists</code>), Drizzle’s in-process JS binding
                      leads (0.09 ms / 0.07 ms p50) because Nexus crosses a structured{' '}
                      <code className="font-mono">TS ↔ Go</code> runtime bridge (~0.20 ms / 0.29 ms
                      p50).
                    </p>
                  </div>
                </div>

                {/* Interactive Single-Operation Deep-Dive Inspector */}
                {(() => {
                  const activeMeta =
                    BENCHMARK_OPERATIONS_META.find((m) => m.key === selectedBenchOp) ||
                    BENCHMARK_OPERATIONS_META[0];
                  const nexusData = REAL_BENCHMARK_ARTIFACT.results.Nexus[activeMeta.key];
                  const drizzleData = REAL_BENCHMARK_ARTIFACT.results.Drizzle[activeMeta.key];
                  const prismaData = REAL_BENCHMARK_ARTIFACT.results.Prisma[activeMeta.key];

                  const bars = [
                    {
                      name: 'Nexus ORM',
                      badge: 'TS API + Go Engine',
                      data: nexusData,
                      isNexus: true
                    },
                    {
                      name: 'Drizzle ORM',
                      badge: 'JS Query Builder',
                      data: drizzleData,
                      isNexus: false
                    },
                    {
                      name: 'Prisma ORM',
                      badge: 'Schema + Engine',
                      data: prismaData,
                      isNexus: false
                    }
                  ];

                  const values = bars.map((b) => b.data[benchMetricMode]);
                  const maxVal = Math.max(...values, 0.0001);
                  const bestVal =
                    benchMetricMode === 'opsPerSecond'
                      ? Math.max(...values)
                      : Math.min(...values);

                  return (
                    <div className="mt-8 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-sm overflow-hidden">
                      {/* Operation Pill Tabs */}
                      <div className="p-4 bg-[#FAF8F5] dark:bg-[#161513] border-b border-[#E6E2D8] dark:border-[#2B2925] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {BENCHMARK_OPERATIONS_META.map((op) => {
                            const isSelected = op.key === selectedBenchOp;
                            const nOps = REAL_BENCHMARK_ARTIFACT.results.Nexus[op.key].opsPerSecond;
                            const dOps =
                              REAL_BENCHMARK_ARTIFACT.results.Drizzle[op.key].opsPerSecond;
                            const pOps = REAL_BENCHMARK_ARTIFACT.results.Prisma[op.key].opsPerSecond;
                            const nexusIsFirst = nOps >= dOps && nOps >= pOps;

                            return (
                              <button
                                key={op.key}
                                onClick={() => setSelectedBenchOp(op.key)}
                                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                                  isSelected
                                    ? 'bg-stone-900 dark:bg-amber-500 text-white dark:text-stone-950 shadow-2xs'
                                    : 'bg-white dark:bg-[#211F1C] text-stone-700 dark:text-stone-300 border border-[#E2DDD2] dark:border-[#2F2D29] hover:border-amber-500/50'
                                }`}
                              >
                                <span>{op.label}</span>
                                {nexusIsFirst && (
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      isSelected
                                        ? 'bg-amber-400 dark:bg-stone-950'
                                        : 'bg-amber-500'
                                    }`}
                                    title="Nexus #1 in this workload"
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Metric Toggle */}
                        <div className="flex items-center gap-1 bg-white dark:bg-[#211F1C] p-1 rounded-xl border border-[#E2DDD2] dark:border-[#2F2D29]">
                          {[
                            { id: 'opsPerSecond', label: 'Throughput (ops/s ↑)' },
                            { id: 'p50Ms', label: 'Median p50 (ms ↓)' },
                            { id: 'p99Ms', label: 'Tail p99 (ms ↓)' }
                          ].map((mode) => (
                            <button
                              key={mode.id}
                              onClick={() => setBenchMetricMode(mode.id)}
                              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                                benchMetricMode === mode.id
                                  ? 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/35'
                                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                              }`}
                            >
                              {mode.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Operation Breakdown */}
                      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-5">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/25 font-semibold">
                                {activeMeta.category}
                              </span>
                              <span className="font-mono text-xs text-stone-500">
                                5,000 measured operations
                              </span>
                            </div>
                            <h3 className="mt-2 text-2xl font-extrabold font-mono text-stone-900 dark:text-white">
                              {activeMeta.label}()
                            </h3>
                            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                              {activeMeta.description}
                            </p>
                          </div>

                          <div className="space-y-4">
                            {bars.map((bar) => {
                              const val = bar.data[benchMetricMode];
                              const pct = Math.max(8, Math.round((val / maxVal) * 100));
                              const isWinner = Math.abs(val - bestVal) < 0.0001;

                              return (
                                <div key={bar.name}>
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`font-bold text-sm ${
                                          bar.isNexus
                                            ? 'text-amber-700 dark:text-amber-400'
                                            : 'text-stone-800 dark:text-stone-200'
                                        }`}
                                      >
                                        {bar.name}
                                      </span>
                                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F4F1EA] dark:bg-[#252320] text-stone-500 dark:text-stone-400">
                                        {bar.badge}
                                      </span>
                                      {isWinner && (
                                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                                          FASTEST
                                        </span>
                                      )}
                                    </div>

                                    <div className="font-mono text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                                      {benchMetricMode === 'opsPerSecond'
                                        ? `${val.toLocaleString(undefined, {
                                            maximumFractionDigits: 2
                                          })} ops/s`
                                        : `${val.toFixed(3)} ms`}
                                    </div>
                                  </div>

                                  <div className="w-full h-3 rounded-full bg-stone-200/80 dark:bg-stone-800 overflow-hidden">
                                    <div
                                      className={`h-full rounded-full transition-all duration-300 ${
                                        bar.isNexus
                                          ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                                          : 'bg-stone-500 dark:bg-stone-600'
                                      }`}
                                      style={{ width: `${pct}%` }}
                                    />
                                  </div>

                                  <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-[11px] text-stone-500 dark:text-stone-400">
                                    <span>avg: {bar.data.avgMs.toFixed(3)} ms</span>
                                    <span>• p50: {bar.data.p50Ms.toFixed(3)} ms</span>
                                    <span>• p95: {bar.data.p95Ms.toFixed(3)} ms</span>
                                    <span>• p99: {bar.data.p99Ms.toFixed(3)} ms</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Column: Candid Engineering Interpretation */}
                        <div className="lg:col-span-5 rounded-2xl bg-[#161514] border border-stone-800 p-6 text-stone-200">
                          <div className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                            Transparent Engineering Note
                          </div>
                          <p className="mt-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                            {activeMeta.architecturalTakeaway}
                          </p>

                          <div className="mt-5 pt-4 border-t border-stone-800 grid grid-cols-2 gap-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-[#1E1C1A] border border-stone-800">
                              <div className="text-[10px] text-stone-400 uppercase">
                                Nexus vs. Drizzle
                              </div>
                              <div className="mt-1 text-sm font-extrabold text-amber-400">
                                {(nexusData.opsPerSecond / drizzleData.opsPerSecond).toFixed(2)}×
                                throughput
                              </div>
                            </div>
                            <div className="p-3 rounded-xl bg-[#1E1C1A] border border-stone-800">
                              <div className="text-[10px] text-stone-400 uppercase">
                                Nexus vs. Prisma
                              </div>
                              <div className="mt-1 text-sm font-extrabold text-orange-400">
                                {(nexusData.opsPerSecond / prismaData.opsPerSecond).toFixed(2)}×
                                throughput
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Full 9-Operation Head-to-Head Matrix Table */}
                <div className="mt-8 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs overflow-hidden">
                  <div className="px-6 py-4 bg-[#FAF8F5] dark:bg-[#161513] border-b border-[#E6E2D8] dark:border-[#2B2925] flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-base text-stone-900 dark:text-white">
                        Complete 9-Operation Benchmark Matrix (results.json)
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        Click any row to inspect its latency percentiles (avg, p50, p95, p99) in
                        the chart above.
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-stone-500">
                      Higher ops/s &amp; lower p50 ms = faster
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#F4F1EA] dark:bg-[#211F1C] border-b border-[#E4DFD3] dark:border-[#2B2925] font-mono text-xs text-stone-600 dark:text-stone-300">
                          <th className="py-3 px-4">Operation</th>
                          <th className="py-3 px-4 text-amber-800 dark:text-amber-300">
                            Nexus (ops/s | p50)
                          </th>
                          <th className="py-3 px-4">Drizzle (ops/s | p50)</th>
                          <th className="py-3 px-4">Prisma (ops/s | p50)</th>
                          <th className="py-3 px-4">Nexus vs. Drizzle</th>
                          <th className="py-3 px-4">Nexus vs. Prisma</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EFECE4] dark:divide-[#262421]">
                        {BENCHMARK_OPERATIONS_META.map((op) => {
                          const n = REAL_BENCHMARK_ARTIFACT.results.Nexus[op.key];
                          const d = REAL_BENCHMARK_ARTIFACT.results.Drizzle[op.key];
                          const p = REAL_BENCHMARK_ARTIFACT.results.Prisma[op.key];
                          const vsDrizzle = n.opsPerSecond / d.opsPerSecond;
                          const vsPrisma = n.opsPerSecond / p.opsPerSecond;
                          const isSelected = op.key === selectedBenchOp;

                          return (
                            <tr
                              key={op.key}
                              onClick={() => setSelectedBenchOp(op.key)}
                              className={`cursor-pointer transition-colors ${
                                isSelected
                                  ? 'bg-amber-500/10'
                                  : 'hover:bg-[#FAF8F5] dark:hover:bg-[#1F1E1B]'
                              }`}
                            >
                              <td className="py-3 px-4 font-mono font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap">
                                {op.label}
                              </td>
                              <td className="py-3 px-4 font-mono whitespace-nowrap">
                                <span className="font-extrabold text-amber-700 dark:text-amber-400">
                                  {n.opsPerSecond.toFixed(1)} ops/s
                                </span>{' '}
                                <span className="text-xs text-stone-500">
                                  ({n.p50Ms.toFixed(2)} ms)
                                </span>
                              </td>
                              <td className="py-3 px-4 font-mono whitespace-nowrap text-stone-700 dark:text-stone-300">
                                <span
                                  className={
                                    d.opsPerSecond > n.opsPerSecond ? 'font-bold' : 'font-normal'
                                  }
                                >
                                  {d.opsPerSecond.toFixed(1)} ops/s
                                </span>{' '}
                                <span className="text-xs text-stone-500">
                                  ({d.p50Ms.toFixed(2)} ms)
                                </span>
                              </td>
                              <td className="py-3 px-4 font-mono whitespace-nowrap text-stone-700 dark:text-stone-300">
                                <span>{p.opsPerSecond.toFixed(1)} ops/s</span>{' '}
                                <span className="text-xs text-stone-500">
                                  ({p.p50Ms.toFixed(2)} ms)
                                </span>
                              </td>
                              <td className="py-3 px-4 font-mono whitespace-nowrap">
                                <span
                                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                    vsDrizzle >= 1
                                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                                      : 'bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                                  }`}
                                >
                                  {vsDrizzle.toFixed(2)}×
                                </span>
                              </td>
                              <td className="py-3 px-4 font-mono whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                                  {vsPrisma.toFixed(2)}×
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Live Client-Side Browser Micro-Benchmark Runner (Clearly Separated) */}
                <div className="mt-10 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-6 sm:p-8 shadow-2xs">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EFECE4] dark:border-[#282622]">
                    <div>
                      <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider font-semibold text-orange-700 dark:text-orange-400">
                        <Gauge className="w-3.5 h-3.5" />
                        <span>Interactive Client-Side Micro-Benchmark (Browser JS Engine)</span>
                      </div>
                      <h3 className="mt-1 text-xl font-bold text-stone-900 dark:text-white">
                        Test Nexus AST, SQL Compiler &amp; Hydration Speed on Your Device
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                        Separate from the server-side Bun 1.4.4 + SQLite suite above, this runs real
                        in-memory JS benchmarks right in your browser via{' '}
                        <code className="font-mono">performance.now()</code>.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 bg-[#FAF8F5] dark:bg-[#141312] p-1 rounded-xl border border-[#E2DDD2] dark:border-[#2E2C28]">
                        {[1000, 10000, 50000].map((cnt) => (
                          <button
                            key={cnt}
                            onClick={() => {
                              setBenchIterations(cnt);
                              executeRealBrowserBenchmarks(cnt, benchComplexity);
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                              benchIterations === cnt
                                ? 'bg-amber-500 text-stone-950'
                                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                            }`}
                          >
                            {(cnt / 1000).toFixed(0)}k ops
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 bg-[#FAF8F5] dark:bg-[#141312] p-1 rounded-xl border border-[#E2DDD2] dark:border-[#2E2C28]">
                        {['simple', 'standard', 'complex'].map((comp) => (
                          <button
                            key={comp}
                            onClick={() => {
                              setBenchComplexity(comp);
                              executeRealBrowserBenchmarks(benchIterations, comp);
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono capitalize font-semibold transition-colors cursor-pointer ${
                              benchComplexity === comp
                                ? 'bg-orange-500 text-white'
                                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                            }`}
                          >
                            {comp}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          executeRealBrowserBenchmarks(benchIterations, benchComplexity)
                        }
                        disabled={isRunningBench}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 dark:bg-amber-500 text-white dark:text-stone-950 font-mono text-xs font-semibold transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isRunningBench ? 'Running...' : 'Re-Run'}</span>
                      </button>
                    </div>
                  </div>

                  {benchResults && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benchResults.workloads.map((w) => (
                        <div
                          key={w.id}
                          className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925]"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="font-bold text-sm text-stone-900 dark:text-white">
                              {w.name}
                            </div>
                            <div className="font-mono text-xs font-extrabold text-amber-700 dark:text-amber-400 shrink-0">
                              {w.opsPerSec.toLocaleString()} ops/s
                            </div>
                          </div>
                          <div className="mt-1 font-mono text-[11px] text-stone-500">
                            p50: {w.p50Us} µs/op • p95: {w.p95Us} µs/op • {w.totalMs} ms total
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ==================================================================
                DOCUMENTATION ENTRY POINTS SECTION
            ================================================================== */}
            <section
              id="documentation"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      DOCUMENTATION PORTAL
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
                      Structured documentation for every layer.
                    </h2>
                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
                      Select any guide below to open it directly in the dedicated full-page Nexus
                      Documentation Portal.
                    </p>
                  </div>

                  <button
                    onClick={() => openDocsPage('installation')}
                    className="self-start lg:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xs transition-all cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Open Full Documentation Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {DOCS_SECTIONS.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => openDocsPage(doc.id)}
                      className="group text-left p-6 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] hover:border-amber-500 dark:hover:border-amber-500/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/25 font-semibold">
                            {doc.category}
                          </span>
                          <span className="font-mono text-[11px] text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            /docs/{doc.id}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          {doc.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                          {doc.summary}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#EFECE4] dark:border-[#282622] flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                        <span>Read {doc.title} Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================================
                REAL LIVE DISCORD SERVER INVITE WIDGET (NO FAKE CHAT)
                Fetches directly from: https://discord.com/api/v10/invites/G3BcYgZYf?with_counts=true
            ================================================================== */}
            <section
              id="discord-community"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/70 dark:bg-[#171614]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Explanation & Direct Links */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      <DiscordIcon className="w-3.5 h-3.5" />
                      <span>LIVE DISCORD API INVITE</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
                      Join the official Nexus Discord community.
                    </h2>

                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      Connect directly with the maintainers and developers building with{' '}
                      <code className="font-mono text-amber-700 dark:text-amber-400 font-semibold">
                        @nexus-orm/nexus
                      </code>{' '}
                      at{' '}
                      <a
                        href="https://sonikki.gg"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono font-semibold text-amber-700 dark:text-amber-400 underline"
                      >
                        sonikki.gg
                      </a>
                      . The invite card on the right queries Discord&apos;s live public API (
                      <code className="font-mono text-xs">discord.com/api/v10/invites/{DISCORD_INVITE_CODE}</code>
                      ) in real time.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-sm transition-all"
                      >
                        <DiscordIcon className="w-4 h-4" />
                        <span>Open Invite in Browser</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <a
                        href={DISCORD_DESKTOP_URI}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E1D1B] hover:bg-[#F3EFE6] dark:hover:bg-[#262522] text-stone-800 dark:text-stone-200 border border-[#DCD6C8] dark:border-[#32302B] transition-all"
                      >
                        <span>Launch Discord App</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Real Live Discord API Telemetry & Invite Widget */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#161514] border border-stone-800 shadow-2xl overflow-hidden text-stone-200">
                      {/* Top Live Status Bar */}
                      <div className="px-5 py-3.5 bg-[#1E1C1A] border-b border-stone-800 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="font-mono text-xs font-semibold text-stone-200">
                            LIVE DISCORD INVITE INSPECTOR
                          </span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-800 text-amber-300">
                            code: {discordState.code}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {discordState.fetchedAt && (
                            <span className="font-mono text-[11px] text-stone-400">
                              Synced {discordState.fetchedAt}
                            </span>
                          )}
                          <button
                            onClick={fetchLiveDiscordInvite}
                            disabled={discordState.loading}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs transition-colors cursor-pointer"
                            title="Re-fetch live data from Discord API"
                          >
                            <RefreshCw
                              className={`w-3.5 h-3.5 ${discordState.loading ? 'animate-spin' : ''}`}
                            />
                            <span>Refresh Live Data</span>
                          </button>
                        </div>
                      </div>

                      {/* Main Live Server Card Body */}
                      <div className="p-6 sm:p-8">
                        {discordState.error ? (
                          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="font-bold text-sm text-white">
                                  Direct Discord Invite Ready ({DISCORD_INVITE_URL})
                                </div>
                                <p className="text-xs text-stone-400 mt-1">
                                  Live metadata request returned: {discordState.error}. You can still
                                  open or copy the official invite link directly below.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                          <div className="flex items-center gap-4">
                            {discordIconUrl ? (
                              <img
                                src={discordIconUrl}
                                alt={discordState.guildName || 'Discord Server Icon'}
                                className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/50 shadow-md"
                                onError={() =>
                                  setDiscordState((prev) => ({ ...prev, iconError: true }))
                                }
                              />
                            ) : (
                              <NexusLogo className="w-16 h-16 shrink-0" />
                            )}

                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                                  {discordState.loading
                                    ? 'Fetching Discord Server...'
                                    : discordState.guildName || 'Nexus ORM Official'}
                                </h3>
                                <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                  Verified Invite
                                </span>
                              </div>

                              {discordState.guildDescription && (
                                <p className="mt-1 text-xs text-stone-400">
                                  {discordState.guildDescription}
                                </p>
                              )}

                              <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                                {typeof discordState.presenceCount === 'number' && (
                                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    {discordState.presenceCount.toLocaleString()} Online Now
                                  </span>
                                )}
                                {typeof discordState.memberCount === 'number' && (
                                  <span className="inline-flex items-center gap-1.5 text-stone-300">
                                    <Users className="w-3.5 h-3.5 text-amber-400" />
                                    {discordState.memberCount.toLocaleString()} Total Members
                                  </span>
                                )}
                                {discordState.channelName && (
                                  <span className="inline-flex items-center gap-1 text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/25">
                                    <Hash className="w-3.5 h-3.5" />
                                    {discordState.channelName}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Live Metadata Grid from Discord API */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-xl bg-[#1C1B18] border border-stone-800">
                            <div className="text-[10px] font-mono uppercase text-stone-400">
                              Guild ID
                            </div>
                            <div className="mt-1 font-mono text-xs font-bold text-stone-200 truncate">
                              {discordState.guildId || 'Fetching...'}
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[#1C1B18] border border-stone-800">
                            <div className="text-[10px] font-mono uppercase text-stone-400">
                              Invite Channel
                            </div>
                            <div className="mt-1 font-mono text-xs font-bold text-amber-300 truncate">
                              {discordState.channelName
                                ? `#${discordState.channelName}`
                                : 'Direct Invite'}
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[#1C1B18] border border-stone-800">
                            <div className="text-[10px] font-mono uppercase text-stone-400">
                              Invite URL
                            </div>
                            <div className="mt-1 font-mono text-xs font-bold text-stone-200 truncate">
                              discord.gg/{DISCORD_INVITE_CODE}
                            </div>
                          </div>
                        </div>

                        {/* Optional Live Discord Embed Iframe if Widget is enabled on the guild */}
                        {discordState.guildId && discordState.widgetEnabled && (
                          <div className="mt-5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-mono text-xs text-amber-300">
                                Official Discord Live Server Widget
                              </span>
                              <button
                                onClick={() =>
                                  setDiscordState((prev) => ({
                                    ...prev,
                                    showWidgetIframe: !prev.showWidgetIframe
                                  }))
                                }
                                className="font-mono text-xs text-stone-300 underline cursor-pointer"
                              >
                                {discordState.showWidgetIframe
                                  ? 'Hide Live Widget Iframe'
                                  : 'Show Live Widget Iframe'}
                              </button>
                            </div>
                            {discordState.showWidgetIframe && (
                              <iframe
                                title="Nexus ORM Live Discord Widget"
                                src={`https://discord.com/widget?id=${discordState.guildId}&theme=dark`}
                                width="100%"
                                height="320"
                                frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                className="rounded-xl border border-stone-800"
                              />
                            )}
                          </div>
                        )}

                        {/* Action Bar */}
                        <div className="mt-6 pt-5 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <a
                              href={DISCORD_INVITE_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 shadow-sm transition-all"
                            >
                              <DiscordIcon className="w-4 h-4" />
                              <span>Accept Invite (discord.gg/{DISCORD_INVITE_CODE})</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </a>

                            <button
                              onClick={() => handleCopy(DISCORD_INVITE_URL, 'discord-live-copy')}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                            >
                              {copiedId === 'discord-live-copy' ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>Copied URL</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy Invite Link</span>
                                </>
                              )}
                            </button>
                          </div>

                          <a
                            href={DISCORD_DESKTOP_URI}
                            className="font-mono text-xs text-amber-400 hover:underline"
                          >
                            Open in Discord Desktop App →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================================================================
            FINAL CTA SECTION
        ================================================================== */}
        <section className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE6] dark:from-[#141413] dark:to-[#191816]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-6">
              <NexusLogo className="w-12 h-12" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
              Ready to connect your TypeScript data layer?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Start defining type-safe schemas and executing queries powered by the Nexus Go engine.
              Install{' '}
              <code className="font-mono text-amber-700 dark:text-amber-300">@nexus-orm/nexus</code>{' '}
              directly from npm.
            </p>

            <div className="mt-8 max-w-md mx-auto rounded-xl bg-[#161514] border border-stone-800 p-2 pl-4 flex items-center justify-between gap-3 shadow-md">
              <code className="font-mono text-xs sm:text-sm text-stone-200 truncate">
                <span className="text-amber-400">$ </span>
                {installCommands[pkgManager]}
              </code>
              <button
                onClick={() => handleCopy(installCommands[pkgManager], 'cta-init')}
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-semibold transition-colors inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                {copiedId === 'cta-init' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => openDocsPage('installation')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-stone-900 hover:bg-stone-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-stone-950 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Documentation Portal</span>
              </button>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 dark:text-amber-300 border border-amber-500/35 transition-all"
              >
                <DiscordIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Join Discord Community</span>
              </a>
              <button
                onClick={() => setNpmModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E1D1B] hover:bg-stone-100 dark:hover:bg-[#282623] text-stone-800 dark:text-stone-200 border border-[#DCD6C8] dark:border-[#32302B] transition-all cursor-pointer"
              >
                <Package className="w-4 h-4 text-orange-500" />
                <span>Inspect Live npm Manifest</span>
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            FOOTER
        ================================================================== */}
        <footer className="bg-[#F3EFE6] dark:bg-[#121110] text-stone-600 dark:text-stone-400 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#E2DDD2] dark:border-[#24221F]">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <NexusLogo className="w-9 h-9" />
                  <div>
                    <span className="font-extrabold tracking-tight text-lg text-stone-900 dark:text-white">
                      NEXUS ORM
                    </span>
                    <span className="block font-mono text-[11px] text-amber-700 dark:text-amber-400">
                      sonikki.gg
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 max-w-sm leading-relaxed">
                  A modern TypeScript-first ORM powered by a Go execution engine. Built for
                  type-safe queries, declarative schemas, migrations, and transactional reliability.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5 font-mono text-xs">
                  <a
                    href="https://sonikki.gg"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1B19] border border-[#E2DDD2] dark:border-[#2C2A26] text-stone-800 dark:text-stone-200 hover:border-amber-500 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>sonikki.gg</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1B19] border border-[#E2DDD2] dark:border-[#2C2A26] text-stone-800 dark:text-stone-200 hover:border-amber-500 transition-colors"
                  >
                    <Package className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>@nexus-orm/nexus</span>
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1B19] border border-[#E2DDD2] dark:border-[#2C2A26] text-stone-800 dark:text-stone-200 hover:border-amber-500 transition-colors"
                  >
                    <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>discord.gg/{DISCORD_INVITE_CODE}</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Documentation
                </div>
                <ul className="space-y-2 text-sm">
                  {DOCS_SECTIONS.slice(0, 5).map((doc) => (
                    <li key={doc.id}>
                      <button
                        onClick={() => openDocsPage(doc.id)}
                        className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {doc.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Execution & CLI
                </div>
                <ul className="space-y-2 text-sm">
                  {DOCS_SECTIONS.slice(5).map((doc) => (
                    <li key={doc.id}>
                      <button
                        onClick={() => openDocsPage(doc.id)}
                        className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {doc.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => navigateToSection('architecture')}
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      Go Engine Bridge
                    </button>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Ecosystem
                </div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Discord Server</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={NPM_PACKAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>npm Registry</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setNpmModalOpen(true)}
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      Package Manifest
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://sonikki.gg"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>sonikki.gg</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
              <div>
                © {new Date().getFullYear()} Nexus ORM • Associated with{' '}
                <a
                  href="https://sonikki.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-amber-700 dark:text-amber-400 hover:underline"
                >
                  sonikki.gg
                </a>
              </div>
              <div className="font-mono">
                @nexus-orm/nexus • TypeScript Interface + Go Execution Engine
              </div>
            </div>
          </div>
        </footer>

        {/* ==================================================================
            MODAL 1: CMD/CTRL+K QUICK DOCUMENTATION SEARCH
        ================================================================== */}
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setSearchModalOpen(false)}
            />
            <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E2DDD2] dark:border-[#2F2D29] shadow-2xl overflow-hidden z-10">
              <div className="px-4 py-3.5 border-b border-[#E6E2D8] dark:border-[#2B2925] flex items-center gap-3">
                <Search className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation, CLI commands, or API symbols..."
                  className="w-full bg-transparent text-sm text-stone-900 dark:text-white focus:outline-none"
                />
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F4F1EA] dark:bg-[#282623] text-stone-500 cursor-pointer"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#F2EFE8] dark:divide-[#252320]">
                {searchResults.length === 0 ? (
                  <div className="py-10 text-center text-sm text-stone-500">
                    No matching documentation topics or API symbols found.
                  </div>
                ) : (
                  searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-amber-500/10 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#F4F1EA] dark:bg-[#282623] text-amber-700 dark:text-amber-400">
                            {item.type}
                          </span>
                          <span className="font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            MODAL 2: LIVE `@nexus-orm/nexus` NPM PACKAGE MANIFEST INSPECTOR
            Fetches live data from https://registry.npmjs.org/@nexus-orm/nexus/latest
        ================================================================== */}
        {npmModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setNpmModalOpen(false)}
            />
            <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E2DDD2] dark:border-[#2F2D29] shadow-2xl overflow-hidden z-10 max-h-[88vh] flex flex-col">
              <div className="px-5 py-4 border-b border-[#E6E2D8] dark:border-[#2B2925] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Package className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <div>
                    <div className="font-bold text-sm text-stone-900 dark:text-white">
                      Live npm Registry Manifest — {NPM_PACKAGE_NAME}
                    </div>
                    <div className="font-mono text-[11px] text-stone-500">
                      Source: registry.npmjs.org/@nexus-orm/nexus/latest
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={fetchLiveNpmData}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F4F1EA] dark:bg-[#282623] text-stone-700 dark:text-stone-300 hover:bg-amber-500/20 cursor-pointer"
                  >
                    Refresh
                  </button>
                  <button
                    onClick={() => setNpmModalOpen(false)}
                    className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-200/60 dark:hover:bg-stone-800 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-5 overflow-y-auto space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925]">
                    <div className="text-[10px] font-mono uppercase text-stone-500">Version</div>
                    <div className="mt-1 font-mono text-sm font-bold text-amber-700 dark:text-amber-400">
                      {npmState.version || '—'}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925]">
                    <div className="text-[10px] font-mono uppercase text-stone-500">License</div>
                    <div className="mt-1 font-mono text-sm font-bold text-stone-900 dark:text-white">
                      {npmState.license || '—'}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925]">
                    <div className="text-[10px] font-mono uppercase text-stone-500">
                      Unpacked Size
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-stone-900 dark:text-white">
                      {npmState.unpackedSize
                        ? `${(npmState.unpackedSize / 1024).toFixed(1)} KB`
                        : '—'}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-[#E6E2D8] dark:border-[#2B2925]">
                    <div className="text-[10px] font-mono uppercase text-stone-500">File Count</div>
                    <div className="mt-1 font-mono text-sm font-bold text-stone-900 dark:text-white">
                      {npmState.fileCount ?? '—'}
                    </div>
                  </div>
                </div>

                {npmState.rawManifest ? (
                  <div className="rounded-xl bg-[#151413] border border-stone-800 overflow-hidden">
                    <div className="px-4 py-2 bg-[#1E1C1A] border-b border-stone-800 flex items-center justify-between text-xs font-mono text-stone-300">
                      <span>Live package.json response from registry.npmjs.org</span>
                      {npmState.publishedAt && (
                        <span className="text-stone-400">
                          Published: {new Date(npmState.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <pre className="p-4 font-mono text-xs text-amber-200/90 overflow-x-auto max-h-72 leading-5">
                      {JSON.stringify(
                        {
                          name: npmState.rawManifest.name,
                          version: npmState.rawManifest.version,
                          description: npmState.rawManifest.description,
                          license: npmState.rawManifest.license,
                          main: npmState.rawManifest.main,
                          types: npmState.rawManifest.types,
                          exports: npmState.rawManifest.exports,
                          dependencies: npmState.rawManifest.dependencies,
                          dist: {
                            unpackedSize: npmState.rawManifest.dist?.unpackedSize,
                            fileCount: npmState.rawManifest.dist?.fileCount,
                            tarball: npmState.rawManifest.dist?.tarball
                          }
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-stone-500">
                    {npmState.loading
                      ? 'Loading live package manifest from registry.npmjs.org...'
                      : `Could not load registry JSON (${npmState.error}).`}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                  >
                    <span>Open @nexus-orm/nexus on npmjs.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {npmState.repositoryUrl && (
                    <a
                      href={npmState.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#F4F1EA] dark:bg-[#282623] text-stone-800 dark:text-stone-200"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-orange-500" />
                      <span>Open Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}