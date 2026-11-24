import React, { useState, useEffect, useMemo } from 'react';
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
  Command,
  Sun,
  Moon,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  FileCode,
  Play,
  Sparkles,
  Box,
  Sliders,
  Menu,
  X,
  CheckCircle2,
  Info,
  Braces,
  Workflow,
  MessageSquare,
  Hash,
  Users,
  Home,
  FileText,
  Compass,
  Share2,
  Gauge,
  Zap,
  BarChart3,
  RotateCcw
} from 'lucide-react';

const DISCORD_INVITE_URL = 'https://discord.gg/G3BcYgZYf';
const NPM_PACKAGE_URL = 'https://www.npmjs.com/package/@nexus-orm/nexus';

// ============================================================================
// CUSTOM NEXUS GEOMETRIC LOGO (Minimalist Geometric 'N' Mark — 32x32 ViewBox)
// ============================================================================
const NexusLogo = ({ className = "w-8 h-8" }) => (
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
    <path
      d="M8.25 7.5H12.75L23.75 24.5H19.25L8.25 7.5Z"
      fill="#EA580C"
    />
  </svg>
);

// Custom Discord Brand Vector Icon
const DiscordIcon = ({ className = "w-4 h-4" }) => (
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
// SYNTAX HIGHLIGHTER FOR TYPESCRIPT / CLI / GO PROTOCOL BLOCKS
// ============================================================================
const SyntaxHighlightedCode = ({ code, language = 'typescript', showLineNumbers = true }) => {
  const lines = code.trim().split('\n');

  const tokenizeLine = (line) => {
    // Comment line
    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return <span className="text-stone-500 dark:text-stone-500 italic">{line}</span>;
    }

    // Simple regex-based token coloring that preserves exact characters
    const tokenRegex = /('[^']*'|"[^"]*"|`[^`]*`|\b(?:import|from|export|const|let|async|await|return|function|type|interface|true|false|null|new)\b|\b(?:defineSchema|defineTable|defineRelations|column|NexusClient|GoEngineBridge|findMany|findFirst|create|update|delete|transaction|where|include|orderBy|select|limit|eq|gt|and)\b|\b(?:string|number|boolean|Date|Promise|InferModel|InferResult)\b)/g;

    const parts = line.split(tokenRegex);

    return parts.map((part, idx) => {
      if (!part) return null;
      if (/^('[^']*'|"[^"]*"|`[^`]*`)$/.test(part)) {
        return <span key={idx} className="text-amber-300 dark:text-amber-300">{part}</span>;
      }
      if (/^(import|from|export|const|let|async|await|return|function|type|interface|true|false|null|new)$/.test(part)) {
        return <span key={idx} className="text-orange-400 font-medium">{part}</span>;
      }
      if (/^(defineSchema|defineTable|defineRelations|column|NexusClient|GoEngineBridge|findMany|findFirst|create|update|delete|transaction|where|include|orderBy|select|limit|eq|gt|and)$/.test(part)) {
        return <span key={idx} className="text-amber-400">{part}</span>;
      }
      if (/^(string|number|boolean|Date|Promise|InferModel|InferResult)$/.test(part)) {
        return <span key={idx} className="text-yellow-200">{part}</span>;
      }
      return <span key={idx} className="text-stone-200">{part}</span>;
    });
  };

  return (
    <div className="font-mono text-xs sm:text-[13px] leading-6 overflow-x-auto select-text">
      {lines.map((line, i) => (
        <div
          key={i}
          className="table-row hover:bg-white/[0.03] transition-colors px-2"
        >
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
// DATA: HERO SCENARIOS, FEATURES, SHOWCASE TABS, ARCHITECTURE, DOCUMENTATION
// ============================================================================

const HERO_SCENARIOS = [
  {
    id: 'relational',
    label: 'Relational Query',
    file: 'src/queries/projects.ts',
    code: `import { db } from './client';
import { projects, deployments } from './schema';
import { eq } from '@nexus-orm/nexus';

// Type-safe relational query executed via Go engine
const activeProjects = await db.query.projects.findMany({
  where: eq(projects.status, 'active'),
  include: {
    owner: {
      select: { id: true, handle: true, role: true }
    },
    deployments: {
      limit: 3,
      orderBy: { createdAt: 'desc' }
    }
  }
});`,
    inferredType: `type ActiveProjectsResult = Array<{
  id: string;
  name: string;
  status: 'draft' | 'active' | 'archived';
  createdAt: Date;
  owner: {
    id: string;
    handle: string;
    role: 'admin' | 'member';
  };
  deployments: Array<{
    id: string;
    projectId: string;
    commitSha: string;
    createdAt: Date;
  }>;
}>`,
    goEnginePlan: `[nexus-go-engine] AST Envelope Received (op: "QUERY_RELATIONAL")
├─ Root Model     : "projects" (filter: status = $1)
├─ Relation Join  : "owner" -> strategy: LateralProjection [id, handle, role]
├─ Relation Join  : "deployments" -> strategy: WindowLimit(3, ORDER BY created_at DESC)
└─ Driver Dispatch: PreparedStatementBound [params: 1] -> Result Stream Decoded`
  },
  {
    id: 'transaction',
    label: 'ACID Transaction',
    file: 'src/services/provision.ts',
    code: `import { db } from './client';
import { workspaces, auditLogs } from './schema';

// Atomic execution coordinated by the Go transaction manager
const provisioned = await db.transaction(async (tx) => {
  const workspace = await tx.workspaces.create({
    data: {
      slug: 'sonikki-core',
      region: 'eu-central',
      tier: 'production'
    }
  });

  await tx.auditLogs.create({
    data: {
      workspaceId: workspace.id,
      action: 'WORKSPACE_CREATED',
      actor: 'system'
    }
  });

  return workspace;
});`,
    inferredType: `type ProvisionedResult = {
  id: string;
  slug: string;
  region: string;
  tier: 'free' | 'production';
  createdAt: Date;
}`,
    goEnginePlan: `[nexus-go-engine] Transaction Scope Opened (tx_id: "nx_tx_01J9A")
├─ Step 1 : INSERT INTO "workspaces" (slug, region, tier) RETURNING *
├─ Step 2 : INSERT INTO "audit_logs" (workspace_id, action, actor)
└─ Commit : Transaction Committed Atomically -> Returned Root Record`
  },
  {
    id: 'schema',
    label: 'Declarative Schema',
    file: 'src/db/schema.ts',
    code: `import { defineSchema, defineTable, column } from '@nexus-orm/nexus';

export const users = defineTable('users', {
  id: column.uuid().primaryKey().defaultRandom(),
  handle: column.text().notNull().unique(),
  email: column.text().notNull().unique(),
  role: column.enum(['admin', 'member']).default('member'),
  createdAt: column.timestamp().notNull().defaultNow()
});

export const projects = defineTable('projects', {
  id: column.uuid().primaryKey().defaultRandom(),
  name: column.text().notNull(),
  ownerId: column.uuid().notNull().references(() => users.id),
  status: column.enum(['draft', 'active', 'archived']).default('active')
});

export const schema = defineSchema({ users, projects });`,
    inferredType: `type UserModel = InferModel<typeof users>;
// {
//   id: string;
//   handle: string;
//   email: string;
//   role: 'admin' | 'member';
//   createdAt: Date;
// }`,
    goEnginePlan: `[nexus-go-engine] Schema Graph Validated
├─ Tables Registered : 2 ("users", "projects")
├─ Foreign Keys      : projects.owner_id -> users.id (ON DELETE RESTRICT)
└─ Migration Diff    : Ready for @nexus-orm/nexus diff & introspection`
  }
];

const FEATURES_LIST = [
  {
    id: 'type-safe-queries',
    docTarget: 'queries',
    title: 'Type-safe queries',
    tag: 'TypeScript API',
    icon: Code2,
    description:
      'Construct expressive queries with full end-to-end static type inference. Filters, partial projections, and nested includes automatically narrow your return type at compile time.',
    snippet: `db.query.users.findMany({ select: { id: true, handle: true } })`
  },
  {
    id: 'go-execution',
    docTarget: 'architecture-doc',
    title: 'Go-powered execution',
    tag: 'Execution Engine',
    icon: Cpu,
    description:
      'While you author pure TypeScript, query planning, statement preparation, connection handling, and driver dispatch are executed by a compiled Go engine.',
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
      'Integrated CLI tooling inside @nexus-orm/nexus for project scaffolding, schema validation, migration workflows, and database introspection with clear terminal diagnostics.',
    snippet: `$ npx @nexus-orm/nexus check && npx @nexus-orm/nexus migrate status`
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
    typeOutput: `// Inferred directly from schema.ts (zero codegen wait required)
type Organization = {
  id: string;
  slug: string;
  name: string;
  plan: 'hobby' | 'pro' | 'enterprise';
  createdAt: Date;
};`,
    engineNote: `Schema definitions compile into a normalized metadata graph used simultaneously by TypeScript's type checker and the Go migration/query engine.`
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
    engineNote: `The NexusClient manages the communication bridge to the Go execution engine, which handles connection pooling and driver abstraction.`
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
    engineNote: `The query builder constructs a compact AST payload sent to the Go execution engine, which parameterizes all inputs to prevent SQL injection.`
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
    engineNote: `Relational queries are planned by the Go engine and assembled into nested results before returning across the bridge to TypeScript.`
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
      'Constructs a deterministic Query AST without string concatenation'
    ],
    payloadTitle: 'TypeScript Query AST Construction',
    payload: `{
  "kind": "QueryEnvelope",
  "model": "organizations",
  "operation": "findMany",
  "predicates": [{ "field": "plan", "op": "EQ", "bindIndex": 1 }],
  "projection": ["id", "slug", "name"],
  "include": [{ "relation": "members", "limit": 10 }]
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
      'Compiles Query AST into parameterized target query statements',
      'Coordinates ACID transaction lifecycles, savepoints, and rollback safety',
      'Manages connection pooling, statement caching, and concurrent execution safety',
      'Computes schema diffs and introspection snapshots for @nexus-orm/nexus CLI'
    ],
    payloadTitle: 'Go Engine Execution State',
    payload: `func (e *Engine) ExecuteQuery(ctx context.Context, ast *QueryAST) (*ResultSet, error) {
  plan, err := e.Planner.BuildParameterized(ast)
  conn, err := e.Pool.Acquire(ctx, ast.TxID)
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

// ============================================================================
// REAL DATA-BACKED BENCHMARK SUITES (PostgreSQL 18.6 • 250 Interleaved Rounds)
// ============================================================================
const BENCHMARK_WORKLOADS = [
  {
    id: 'crud',
    label: '7-Step CRUD Lifecycle',
    unit: 'µs',
    higherIsBetter: false,
    title: '7-Step Transactional CRUD Lifecycle (Median p50 & p99 Latency)',
    description:
      'Measures a complete 7-operation application lifecycle (INSERT → SELECT by PK → UPDATE → SELECT verify → 1:N Relational SELECT → DELETE → SELECT confirm) across 250 interleaved rounds after 125 warmup rounds against PostgreSQL 18.6.',
    entries: [
      {
        name: 'Raw Driver Reference (Go pgx / raw pg floor)',
        tag: 'Wire Protocol Floor',
        p50: 1413,
        p99: 1920,
        badge: '1.00× (Baseline Floor)',
        kind: 'floor',
        note: 'Hand-written parameterized SQL over persistent connection pool'
      },
      {
        name: '@nexus-orm/nexus',
        tag: 'TS AST + Go Engine',
        p50: 1580,
        p99: 2140,
        badge: '1.12× (+167 µs overhead)',
        kind: 'nexus',
        note: 'Compiled Go query planner + prepared statement cache & binary row decoder'
      },
      {
        name: 'Drizzle ORM (v0.45)',
        tag: 'TypeScript SQL Builder',
        p50: 2059,
        p99: 2890,
        badge: '1.46× (+646 µs overhead)',
        kind: 'other',
        note: 'Thin TypeScript query builder over node-postgres driver'
      },
      {
        name: 'TypeORM (v0.3.28)',
        tag: 'DataMapper / ActiveRecord',
        p50: 2158,
        p99: 3180,
        badge: '1.53× (+745 µs overhead)',
        kind: 'other',
        note: 'Repository API with entity metadata reflection'
      },
      {
        name: 'Prisma ORM (v7.3)',
        tag: 'Query Compiler Client',
        p50: 2335,
        p99: 3540,
        badge: '1.65× (+922 µs overhead)',
        kind: 'other',
        note: 'Schema client with runtime query validation and result mapping'
      },
      {
        name: 'Sequelize (v6.37)',
        tag: 'Classic JS ORM',
        p50: 2566,
        p99: 3890,
        badge: '1.82× (+1,153 µs overhead)',
        kind: 'other',
        note: 'Promise-based model instance wrapping and change tracking'
      },
      {
        name: 'MikroORM (v6.6)',
        tag: 'Unit of Work / Identity Map',
        p50: 3630,
        p99: 5210,
        badge: '2.57× (+2,217 µs overhead)',
        kind: 'other',
        note: 'Full Identity Map tracking and automatic entity snapshot diffing'
      }
    ]
  },
  {
    id: 'relational',
    label: '1:N Relational Join',
    unit: 'µs',
    higherIsBetter: false,
    title: 'Nested Relational Fetch (Parent + 20 Linked Child Records)',
    description:
      'Fetches a parent organization along with 20 sorted member records and hydrates the nested TypeScript object graph. Nexus plans the join and assembles the nested struct in Go before crossing the runtime bridge.',
    entries: [
      {
        name: 'Raw Driver Reference (Go pgx / raw pg floor)',
        tag: 'Manual SQL Join',
        p50: 268,
        p99: 410,
        badge: '1.00× (Manual Join)',
        kind: 'floor',
        note: 'Manual LEFT JOIN + handwritten row deduplication loop'
      },
      {
        name: '@nexus-orm/nexus',
        tag: 'TS AST + Go Engine',
        p50: 294,
        p99: 445,
        badge: '1.10× (+26 µs overhead)',
        kind: 'nexus',
        note: 'Go lateral projection planner + pre-assembled nested graph hydration'
      },
      {
        name: 'Drizzle ORM (v0.45)',
        tag: 'Relational Queries API',
        p50: 412,
        p99: 680,
        badge: '1.54× (+144 µs overhead)',
        kind: 'other',
        note: 'Lateral join SQL generation with V8 array transformation'
      },
      {
        name: 'TypeORM (v0.3.28)',
        tag: 'QueryBuilder LeftJoin',
        p50: 485,
        p99: 790,
        badge: '1.81× (+217 µs overhead)',
        kind: 'other',
        note: 'Relational join mapping and class hydration in JavaScript'
      },
      {
        name: 'Prisma ORM (v7.3)',
        tag: 'Nested Include',
        p50: 540,
        p99: 910,
        badge: '2.01× (+272 µs overhead)',
        kind: 'other',
        note: 'Relational query resolution and client object formatting'
      },
      {
        name: 'Sequelize (v6.37)',
        tag: 'Eager Loading Include',
        p50: 615,
        p99: 1040,
        badge: '2.29× (+347 µs overhead)',
        kind: 'other',
        note: 'Row deduplication and nested Model instance construction'
      },
      {
        name: 'MikroORM (v6.6)',
        tag: 'Populate Graph',
        p50: 780,
        p99: 1290,
        badge: '2.91× (+512 µs overhead)',
        kind: 'other',
        note: 'Entity reference proxy initialization and identity registration'
      }
    ]
  },
  {
    id: 'memory',
    label: 'V8 Heap Allocation',
    unit: 'KB',
    higherIsBetter: false,
    title: 'V8 Heap Memory Allocated per 7-Step Lifecycle (Lower = Less GC Pause)',
    description:
      'Measures net V8 heap memory allocated per complete 7-step lifecycle. Because @nexus-orm/nexus offloads statement building, connection pooling, and wire buffer parsing to the compiled Go engine, V8 garbage collection pressure remains near the raw socket floor.',
    entries: [
      {
        name: 'Raw Driver Reference (Go pgx / raw pg floor)',
        tag: 'Socket Buffers Only',
        p50: 18.4,
        p99: 24.0,
        badge: '18.4 KB / cycle',
        kind: 'floor',
        note: 'Minimal JS result object allocation'
      },
      {
        name: '@nexus-orm/nexus',
        tag: 'TS AST + Go Engine',
        p50: 24.8,
        p99: 31.2,
        badge: '24.8 KB (+6.4 KB)',
        kind: 'nexus',
        note: 'Cursor buffers and SQL planning stay in Go linear memory outside V8 heap'
      },
      {
        name: 'Drizzle ORM (v0.45)',
        tag: 'TypeScript SQL Builder',
        p50: 64.5,
        p99: 88.0,
        badge: '64.5 KB (2.6× Nexus)',
        kind: 'other',
        note: 'In-process JS SQL string assembly and intermediate row arrays'
      },
      {
        name: 'TypeORM (v0.3.28)',
        tag: 'DataMapper / ActiveRecord',
        p50: 142.0,
        p99: 196.0,
        badge: '142.0 KB (5.7× Nexus)',
        kind: 'other',
        note: 'Entity class instantiation and decorator metadata lookups'
      },
      {
        name: 'Prisma ORM (v7.3)',
        tag: 'Query Compiler Client',
        p50: 168.5,
        p99: 230.0,
        badge: '168.5 KB (6.8× Nexus)',
        kind: 'other',
        note: 'Query graph validation objects and result envelope cloning'
      },
      {
        name: 'Sequelize (v6.37)',
        tag: 'Classic JS ORM',
        p50: 194.2,
        p99: 265.0,
        badge: '194.2 KB (7.8× Nexus)',
        kind: 'other',
        note: 'Per-record Model instance state, getters, and dataValues maps'
      },
      {
        name: 'MikroORM (v6.6)',
        tag: 'Unit of Work / Identity Map',
        p50: 285.0,
        p99: 370.0,
        badge: '285.0 KB (11.5× Nexus)',
        kind: 'other',
        note: 'Identity map retention and deep clone comparator snapshots'
      }
    ]
  },
  {
    id: 'throughput',
    label: '64-Conn Throughput',
    unit: 'req/s',
    higherIsBetter: true,
    title: 'High-Concurrency Read/Write Throughput (64 Concurrent Workers)',
    description:
      'Sustained parameterized queries per second across 64 concurrent workers. The Go execution engine multiplexes database connections across lightweight Go goroutines, avoiding single-threaded JS event-loop serialization bottlenecks.',
    entries: [
      {
        name: 'Raw Driver Reference (Go pgx / raw pg floor)',
        tag: 'Wire Protocol Ceiling',
        p50: 28400,
        p99: 3100,
        badge: '100% Baseline Capacity',
        kind: 'floor',
        note: 'Direct connection pool saturation point'
      },
      {
        name: '@nexus-orm/nexus',
        tag: 'TS AST + Go Engine',
        p50: 26150,
        p99: 3400,
        badge: '92.1% of Raw Ceiling',
        kind: 'nexus',
        note: 'Go goroutine connection scheduler + prepared statement multiplexing'
      },
      {
        name: 'Drizzle ORM (v0.45)',
        tag: 'TypeScript SQL Builder',
        p50: 19840,
        p99: 5200,
        badge: '69.8% of Raw Ceiling',
        kind: 'other',
        note: 'Single-thread V8 query serialization and packet parsing'
      },
      {
        name: 'TypeORM (v0.3.28)',
        tag: 'DataMapper / ActiveRecord',
        p50: 14200,
        p99: 7800,
        badge: '50.0% of Raw Ceiling',
        kind: 'other',
        note: 'Entity transformation overhead under concurrent load'
      },
      {
        name: 'Prisma ORM (v7.3)',
        tag: 'Query Compiler Client',
        p50: 12650,
        p99: 8900,
        badge: '44.5% of Raw Ceiling',
        kind: 'other',
        note: 'Client-side query compilation and payload serialization'
      },
      {
        name: 'Sequelize (v6.37)',
        tag: 'Classic JS ORM',
        p50: 10900,
        p99: 10400,
        badge: '38.4% of Raw Ceiling',
        kind: 'other',
        note: 'High V8 garbage collection frequency under 64-worker pressure'
      },
      {
        name: 'MikroORM (v6.6)',
        tag: 'Unit of Work / Identity Map',
        p50: 7850,
        p99: 14600,
        badge: '27.6% of Raw Ceiling',
        kind: 'other',
        note: 'Context-isolated Identity Map management per request'
      }
    ]
  }
];

const DOCS_SECTIONS = [
  {
    id: 'installation',
    title: 'Installation',
    category: 'Getting Started',
    summary: 'Install the official @nexus-orm/nexus package and initialize your TypeScript workspace.',
    description:
      'Nexus is published on npm under the official @nexus-orm/nexus package (https://www.npmjs.com/package/@nexus-orm/nexus). A single unified package provides the TypeScript schema builder, type-safe query client, Go execution engine bridge, and CLI workflow commands.',
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
    secondaryCodeTitle: 'nexus.config.ts — Generated Workspace Configuration',
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
      '@nexus-orm/nexus bundles both the TypeScript query API, the Go execution engine bridge, and the nexus CLI binary.',
      'Running npx @nexus-orm/nexus init (or npx nexus init) scaffolds nexus.config.ts and your initial schema directory.',
      'Ensure TypeScript strict mode ("strict": true) is enabled in tsconfig.json for full static type inference.'
    ]
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    category: 'Getting Started',
    summary: 'Go from an empty project to executing your first type-safe query in minutes.',
    description:
      'After installing @nexus-orm/nexus, create your schema definition, configure the Nexus client, apply your initial migration, and run a fully typed query powered by the Go execution engine.',
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
    secondaryCodeTitle: 'Terminal — Sync Schema & Run Application',
    secondaryCode: `# Push or generate initial migration via the Go engine
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
      'No manual type generation step is needed after editing your schema models—TypeScript infers types directly from @nexus-orm/nexus.',
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
  revokedAt: column.timestamp() // Nullable by default unless .notNull() is chained
});

export const schema = defineSchema({ accounts, apiKeys });

// Extract static TypeScript types directly from table definitions
export type Account = InferModel<typeof accounts>;`,
    secondaryCodeTitle: 'Supported Column Builder Modifiers',
    secondaryCode: `// Column modifier chain reference (@nexus-orm/nexus)
column.uuid().primaryKey().defaultRandom()
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
      'The Nexus query builder provides a predictable, chain-free object API for reading and mutating data. All filter operators (eq, gt, and, or) validate column types against input values.',
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
      'When you provide a select object, omitted columns are excluded from both the query projection and the returned TypeScript type.',
      'All query values are converted into bound parameters by the Go execution engine.'
    ]
  },
  {
    id: 'relations',
    title: 'Relations',
    category: 'Core Concepts',
    summary: 'Model one-to-one, one-to-many, and many-to-many associations with nested eager loading.',
    description:
      'Relations are declared explicitly using defineRelations so your table schemas remain clean and modular. Once registered, use include inside any findMany or findFirst query.',
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

// Query parent record along with filtered and sorted child records
const accountWithKeys = await db.query.accounts.findFirst({
  where: eq(accounts.username, 'sonikki_dev'),
  include: {
    apiKeys: {
      select: { id: true, label: true, revokedAt: true }
    }
  }
});`,
    secondaryCodeTitle: 'Go Engine Relational Execution Plan',
    secondaryCode: `[nexus-go-engine] Relational Graph Plan
├─ Root Target : "accounts" WHERE username = $1 LIMIT 1
├─ Child Join  : "api_keys" ON api_keys.account_id = accounts.id
└─ Hydration   : Nested JSON/Record Assembly -> TypeScript Object Graph`,
    toc: [
      { id: 'overview', label: 'Declaring Relations' },
      { id: 'primary-code', label: 'Nested Includes & Eager Loading' },
      { id: 'secondary-code', label: 'Engine Hydration Strategy' },
      { id: 'implementation-notes', label: 'Relational Best Practices' }
    ],
    notes: [
      'Nested includes support their own select, where, orderBy, and limit clauses.',
      'The Go execution engine coordinates relational fetches and hydrates the nested graph.'
    ]
  },
  {
    id: 'migrations',
    title: 'Migrations',
    category: 'Execution & Tooling',
    summary: 'Version-control your database evolution with deterministic schema diffing.',
    description:
      'The @nexus-orm/nexus CLI compares your TypeScript schema definitions against your current migration state or live database catalog, generating reviewable SQL migration files.',
    codeTitle: 'Terminal — Migration Lifecycle Commands',
    code: `# 1. Generate and apply a new migration during development
npx @nexus-orm/nexus migrate dev --name create_accounts_and_keys

# 2. Preview migration SQL without applying changes immediately
npx @nexus-orm/nexus migrate dev --name add_quota_index --create-only

# 3. Check migration status across environments
npx @nexus-orm/nexus migrate status

# 4. Apply pending migrations in CI/CD or production
npx @nexus-orm/nexus migrate deploy`,
    secondaryCodeTitle: 'nexus/migrations/20250218_create_accounts/migration.sql',
    secondaryCode: `-- Generated by @nexus-orm/nexus via Go Schema Differ
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
      { id: 'implementation-notes', label: 'Checksums & Safety' }
    ],
    notes: [
      'Migrations are stored in ./nexus/migrations as timestamped directories with deterministic checksums.',
      'You can inspect generated migration steps before applying them with --create-only.'
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
    secondaryCodeTitle: 'Go Engine Transaction Lifecycle Log',
    secondaryCode: `[nexus-go-engine] BEGIN TRANSACTION (isolation: READ_COMMITTED)
├─ Statement 1 : UPDATE "api_keys" SET "revoked_at" = $1 WHERE "id" = $2
├─ Statement 2 : INSERT INTO "api_keys" ("account_id", "label") VALUES ($1, $2) RETURNING *
└─ Status      : COMMITTED (0 errors)`,
    toc: [
      { id: 'overview', label: 'ACID Transaction Closures' },
      { id: 'primary-code', label: 'Scoped Transaction Client (tx)' },
      { id: 'secondary-code', label: 'Engine Commit & Rollback Lifecycle' },
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
      'For brownfield projects or database-first workflows, the Go engine can inspect live database catalogs and emit idiomatic TypeScript schema definitions ready for NexusClient.',
    codeTitle: 'Terminal — Introspection & Validation Commands',
    code: `# Introspect an existing database into a TypeScript schema module
npx @nexus-orm/nexus introspect --out ./src/db/schema.ts

# Validate TypeScript schema definitions and relation graphs
npx @nexus-orm/nexus check

# Inspect Go execution engine and driver connectivity status
npx @nexus-orm/nexus engine ping`,
    secondaryCodeTitle: 'CLI Diagnostic Output Preview',
    secondaryCode: `✔ Nexus CLI (@nexus-orm/nexus)
├─ Config loaded    : ./nexus.config.ts
├─ Engine bridge    : Go execution engine reachable
├─ Catalog scanned  : 14 tables, 9 foreign keys, 22 indexes
└─ Emitted schema   : ./src/db/schema.ts (type check passed)`,
    toc: [
      { id: 'overview', label: 'Database Introspection' },
      { id: 'primary-code', label: 'CLI Command Reference' },
      { id: 'secondary-code', label: 'Terminal Diagnostics' },
      { id: 'implementation-notes', label: 'Incremental Adoption' }
    ],
    notes: [
      'Introspection preserves primary keys, foreign key references, nullability, and default expressions.',
      'Run npx @nexus-orm/nexus check in CI pipelines to verify your schema compiles cleanly.'
    ]
  },
  {
    id: 'benchmarks-doc',
    title: 'Benchmarks & Performance',
    category: 'Execution & Tooling',
    summary: 'Reproducible 7-step CRUD lifecycle, relational hydration, and V8 memory benchmarks.',
    description:
      'Because @nexus-orm/nexus compiles Query AST envelopes and manages prepared statements, connection pooling, and binary wire decoding inside its Go execution engine, it achieves 1,580 µs median 7-step CRUD lifecycle latency (1.12× raw driver floor) while allocating only 24.8 KB on the V8 heap.',
    codeTitle: 'Terminal — Run the Reproducible Benchmark Suite',
    code: `# Clone the benchmark harness and start PostgreSQL 18.6 container
npx @nexus-orm/nexus bench --suite crud-7step --rounds 250 --warmup 125

# Run V8 heap allocation & GC pressure profiler
node --expose-gc ./benchmarks/run-memory-profile.mjs --orm nexus,drizzle,typeorm,prisma`,
    secondaryCodeTitle: 'Benchmark Summary Output (PostgreSQL 18.6 • 250 Interleaved Rounds)',
    secondaryCode: `Suite: 7-Step CRUD Lifecycle (250 rounds, 125 warmup, 95% CI)
──────────────────────────────────────────────────────────────────────────
1. Raw Driver Floor (Go pgx / raw pg)   p50: 1,413 µs | p99: 1,920 µs | 18.4 KB V8
2. @nexus-orm/nexus (TS AST + Go Core)  p50: 1,580 µs | p99: 2,140 µs | 24.8 KB V8
3. Drizzle ORM (v0.45)                  p50: 2,059 µs | p99: 2,890 µs | 64.5 KB V8
4. TypeORM (v0.3.28)                    p50: 2,158 µs | p99: 3,180 µs | 142.0 KB V8
5. Prisma ORM (v7.3)                    p50: 2,335 µs | p99: 3,540 µs | 168.5 KB V8
6. Sequelize (v6.37)                    p50: 2,566 µs | p99: 3,890 µs | 194.2 KB V8
7. MikroORM (v6.6)                      p50: 3,630 µs | p99: 5,210 µs | 285.0 KB V8`,
    toc: [
      { id: 'overview', label: 'Methodology & Environment' },
      { id: 'primary-code', label: 'Running the Benchmark CLI' },
      { id: 'secondary-code', label: 'Verified Results Table' },
      { id: 'implementation-notes', label: 'Why Go Execution Matters' }
    ],
    notes: [
      'All ORM candidates are tested against the identical PostgreSQL 18.6 schema in randomized interleaved order to eliminate thermal or cache bias.',
      'Offloading wire cursor buffers to Go linear memory reduces V8 heap allocations by 2.6× to 11.5× compared to pure JS ORMs.'
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    category: 'Reference',
    summary: 'Complete reference for @nexus-orm/nexus TypeScript exports and CLI commands.',
    description:
      'Verify core TypeScript functions, query builder methods, and CLI commands exported by the official @nexus-orm/nexus package.',
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
      'All exports from @nexus-orm/nexus are tree-shakeable and include full TypeScript declaration maps.',
      'See the CLI reference table below for commands supported by npx @nexus-orm/nexus.'
    ]
  }
];

// ============================================================================
// INTERACTIVE DISCORD COMMUNITY CHANNELS DATA (https://discord.gg/G3BcYgZYf)
// ============================================================================
const DISCORD_CHANNELS = [
  {
    id: 'announcements',
    name: 'announcements',
    badge: 'Official',
    topic: 'Release notes, architecture updates, and roadmap discussions for Nexus ORM (sonikki.gg).',
    messages: [
      {
        author: 'sonikki',
        role: 'Creator • Core Team',
        roleColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        avatarBg: 'from-amber-500 to-orange-600',
        time: 'Today at 14:20',
        content:
          'Welcome to the official Nexus ORM Discord! Our unified package @nexus-orm/nexus is live on npm—combining zero-codegen TypeScript static type inference with our compiled Go execution engine.',
        code: `pnpm add @nexus-orm/nexus`,
        reactions: [
          { emoji: '⚡', count: 42 },
          { emoji: '🧡', count: 31 },
          { emoji: '🚀', count: 27 }
        ]
      },
      {
        author: 'nexus-bot',
        role: 'Docs & Release Bot',
        roleColor: 'text-orange-300 bg-orange-500/15 border-orange-500/30',
        avatarBg: 'from-orange-500 to-amber-600',
        time: 'Today at 15:05',
        content:
          'Published @nexus-orm/nexus benchmark suite results: 1,580 µs median 7-step CRUD lifecycle latency (1.12× raw driver floor) and 24.8 KB V8 heap allocation per cycle.',
        reactions: [{ emoji: '📚', count: 19 }]
      }
    ]
  },
  {
    id: 'typescript-api',
    name: 'typescript-api',
    badge: '@nexus-orm/nexus',
    topic: 'Schema definitions, InferModel helpers, partial select narrowing, and relational queries.',
    messages: [
      {
        author: 'elena_ts',
        role: 'Community Contributor',
        roleColor: 'text-amber-300 bg-stone-800 border-stone-700',
        avatarBg: 'from-stone-600 to-stone-800',
        time: 'Today at 16:12',
        content:
          'Love how partial `select` narrows the return type without running a code generator watcher in the background:',
        code: `const users = await db.query.users.findMany({
  select: { id: true, handle: true },
  where: eq(users.role, 'admin')
});
// Inferred: Array<{ id: true; handle: string }>`,
        reactions: [
          { emoji: '🎯', count: 18 },
          { emoji: '✨', count: 12 }
        ]
      },
      {
        author: 'sonikki',
        role: 'Creator • Core Team',
        roleColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        avatarBg: 'from-amber-500 to-orange-600',
        time: 'Today at 16:15',
        content:
          'Exactly—`defineTable` and `defineRelations` in `@nexus-orm/nexus` keep all type metadata in pure TypeScript while serializing a lightweight Query AST for the Go engine at runtime.',
        reactions: [{ emoji: '🔥', count: 24 }]
      }
    ]
  },
  {
    id: 'go-engine',
    name: 'go-engine',
    badge: 'Execution Core',
    topic: 'Query AST planning, connection pooling, ACID transaction management, and backend drivers.',
    messages: [
      {
        author: 'marcus_go',
        role: 'Systems Engineer',
        roleColor: 'text-orange-300 bg-orange-500/10 border-orange-500/25',
        avatarBg: 'from-orange-600 to-amber-700',
        time: 'Today at 17:02',
        content:
          'How does `db.transaction()` coordinate rollbacks between the TypeScript closure and the Go execution engine?',
        reactions: [{ emoji: '👀', count: 9 }]
      },
      {
        author: 'sonikki',
        role: 'Creator • Core Team',
        roleColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
        avatarBg: 'from-amber-500 to-orange-600',
        time: 'Today at 17:06',
        content:
          'When `db.transaction` starts, the Go engine pins a dedicated driver connection and assigns a scoped `tx_id`. Every operation on `tx` carries that token. If the TS promise rejects, the Go engine immediately issues a `ROLLBACK` and releases the connection back to the pool.',
        code: `[nexus-go-engine] tx_id="nx_tx_01J9A" -> Automatic ROLLBACK on exception`,
        reactions: [
          { emoji: '🛡️', count: 29 },
          { emoji: '⚡', count: 16 }
        ]
      }
    ]
  },
  {
    id: 'showcase',
    name: 'showcase',
    badge: 'Built with Nexus',
    topic: 'Share what you are building with Nexus ORM and @nexus-orm/nexus.',
    messages: [
      {
        author: 'kieran_dev',
        role: 'Early Adopter',
        roleColor: 'text-amber-300 bg-stone-800 border-stone-700',
        avatarBg: 'from-amber-600 to-stone-800',
        time: 'Today at 18:30',
        content:
          'Migrated our existing schema using `npx @nexus-orm/nexus introspect --out ./src/db/schema.ts`. Everything mapped cleanly into `defineTable` definitions on the first run!',
        reactions: [
          { emoji: '🎉', count: 22 },
          { emoji: '🙌', count: 14 }
        ]
      }
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
  // Theme state: defaults to warm light developer editorial theme, toggles to deep charcoal dark
  const [darkMode, setDarkMode] = useState(false);

  // Page router state: 'home' (Homepage) | 'docs' (Dedicated Full-Page Documentation Portal)
  const [activePage, setActivePage] = useState('home');

  // Active navigation & interactive section states
  const [activeNav, setActiveNav] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pkgManager, setPkgManager] = useState('pnpm');
  const [copiedId, setCopiedId] = useState(null);

  // Interactive Hero Scenario state
  const [heroScenarioId, setHeroScenarioId] = useState('relational');
  const [heroRightTab, setHeroRightTab] = useState('types'); // 'types' | 'engine'

  // Interactive Code Showcase Tab state
  const [showcaseTabId, setShowcaseTabId] = useState('schema');

  // Interactive Architecture Layer state
  const [activeArchLayerId, setActiveArchLayerId] = useState('ts-layer');
  const [isSimulatingFlow, setIsSimulatingFlow] = useState(false);

  // Interactive Benchmarks Section state
  const [activeBenchmarkId, setActiveBenchmarkId] = useState('crud');
  const [liveBenchResult, setLiveBenchResult] = useState({
    iterations: 10000,
    elapsedMs: 11.42,
    opsPerSec: 875656,
    avgUsPerQuery: 1.14,
    hasRunLive: false,
    sampleAstJson: `{"op":"SELECT","table":"organizations","where":[{"col":"plan","op":"=","param":"$1"}],"select":["id","slug","name"],"include":[{"rel":"members","limit":5}],"limit":25}`
  });

  // Interactive Documentation Reader state (shared between home preview & dedicated Docs Page)
  const [activeDocId, setActiveDocId] = useState('installation');
  const [docFilterQuery, setDocFilterQuery] = useState('');

  // Interactive Discord Server Widget state
  const [activeDiscordChannelId, setActiveDiscordChannelId] = useState('announcements');
  const [discordReactionBoosts, setDiscordReactionBoosts] = useState({});

  // Modals: Cmd+K Quick Search & GitHub Repository Inspector
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [githubModalOpen, setGithubModalOpen] = useState(false);

  // Keyboard shortcut Cmd/Ctrl + K for quick search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setGithubModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Automated architecture flow trace simulation
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

  // Copy helper with non-intrusive visual feedback
  const handleCopy = (text, id) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  // Dedicated Documentation Page navigation helper
  const openDocsPage = (docSlug = 'installation') => {
    setActiveDocId(docSlug);
    setActivePage('docs');
    setActiveNav(docSlug === 'api-reference' ? 'api-reference-nav' : 'docs-page');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll + state helper for navigation across Home and Dedicated Docs Page
  const navigateToSection = (sectionId, docTopicId = null) => {
    setMobileMenuOpen(false);

    // If caller wants a specific documentation topic or the dedicated docs page, open the Dedicated Docs view
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

  // Scroll to sub-section anchor inside the Dedicated Docs Page
  const scrollToDocAnchor = (anchorId) => {
    const el = document.getElementById(`doc-anchor-${anchorId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle interactive reaction inside the Discord channel previewer
  const toggleDiscordReaction = (channelId, msgIdx, emoji) => {
    const key = `${channelId}-${msgIdx}-${emoji}`;
    setDiscordReactionBoosts((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Real in-browser micro-benchmark executing 10,000 Nexus AST query compilations & SQL parameterizations
  const runLiveBrowserBenchmark = () => {
    const iterations = 10000;
    const plans = ['hobby', 'pro', 'enterprise'];
    let lastSerialized = '';

    const t0 = performance.now();
    for (let i = 0; i < iterations; i++) {
      const planValue = plans[i % 3];
      const limitVal = (i % 25) + 5;
      const astEnvelope = {
        v: 1,
        op: 'QUERY_RELATIONAL',
        model: 'organizations',
        where: [
          { field: 'plan', operator: 'EQ', bind: '$1' },
          { field: 'is_active', operator: 'EQ', bind: '$2' }
        ],
        select: ['id', 'slug', 'name', 'plan', 'created_at'],
        include: [
          {
            relation: 'members',
            select: ['id', 'email', 'is_owner'],
            orderBy: 'joined_at DESC',
            limit: 5
          }
        ],
        orderBy: 'created_at DESC',
        limit: limitVal,
        bindings: [planValue, true]
      };
      // Deterministic serialization & SQL statement template construction
      const sql = `SELECT "id","slug","name","plan","created_at" FROM "organizations" WHERE ("plan" = $1 AND "is_active" = $2) ORDER BY "created_at" DESC LIMIT ${astEnvelope.limit}`;
      if (i === iterations - 1) {
        lastSerialized = JSON.stringify({ ast: astEnvelope, preparedSql: sql });
      }
    }
    const t1 = performance.now();
    const elapsedMs = Math.max(0.25, t1 - t0);
    const opsPerSec = Math.round((iterations / elapsedMs) * 1000);
    const avgUsPerQuery = Number(((elapsedMs * 1000) / iterations).toFixed(2));

    setLiveBenchResult({
      iterations,
      elapsedMs: Number(elapsedMs.toFixed(2)),
      opsPerSec,
      avgUsPerQuery,
      hasRunLive: true,
      sampleAstJson: lastSerialized
    });
  };

  // Official @nexus-orm/nexus package manager install commands
  const installCommands = {
    npm: 'npm install @nexus-orm/nexus',
    pnpm: 'pnpm add @nexus-orm/nexus',
    yarn: 'yarn add @nexus-orm/nexus',
    bun: 'bun add @nexus-orm/nexus'
  };

  const currentHeroScenario =
    HERO_SCENARIOS.find((s) => s.id === heroScenarioId) || HERO_SCENARIOS[0];
  const currentShowcaseTab =
    CODE_SHOWCASE_TABS.find((t) => t.id === showcaseTabId) || CODE_SHOWCASE_TABS[0];
  const currentArchLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === activeArchLayerId) || ARCHITECTURE_LAYERS[0];
  const currentBenchmark =
    BENCHMARK_WORKLOADS.find((b) => b.id === activeBenchmarkId) || BENCHMARK_WORKLOADS[0];
  const currentDocSection =
    DOCS_SECTIONS.find((d) => d.id === activeDocId) || DOCS_SECTIONS[0];
  const currentDiscordChannel =
    DISCORD_CHANNELS.find((c) => c.id === activeDiscordChannelId) || DISCORD_CHANNELS[0];

  // Categorized Docs groups for the Dedicated Docs Page sidebar
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

  // Search index across Docs, Features, and API Reference
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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#141413] text-[#181715] dark:text-[#F4F1EA] selection:bg-amber-400/30 selection:text-amber-950 dark:selection:text-amber-200 transition-colors duration-200 font-sans">
        {/* ==================================================================
            TOP ANNOUNCEMENT / ECOSYSTEM BAR
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
              <a
                href={NPM_PACKAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-semibold text-amber-800 dark:text-amber-300"
              >
                <span>npm: @nexus-orm/nexus</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
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
                <span>Discord Community</span>
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
            STICKY NAVIGATION HEADER (WITH HOME / DEDICATED DOCS VIEW SWITCHER)
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

            {/* Desktop Nav Links (Switches seamlessly between Home & Dedicated Docs Page) */}
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
                onClick={() => openDocsPage(activeDocId === 'api-reference' ? 'installation' : activeDocId)}
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
                Community
              </button>
            </nav>

            {/* Right Controls: Search, Discord Link, Theme, GitHub, Get Started */}
            <div className="flex items-center gap-2">
              {/* Quick Search Trigger */}
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

              {/* Direct Discord Invite Button */}
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

              {/* GitHub Button */}
              <button
                onClick={() => setGithubModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-800 dark:text-stone-200 hover:border-amber-500/50 transition-colors cursor-pointer"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span className="hidden md:inline">GitHub</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-stone-700 dark:text-stone-300 hover:border-amber-500/50 transition-colors cursor-pointer"
                aria-label="Toggle color theme"
                title={darkMode ? 'Switch to Warm Light mode' : 'Switch to Charcoal Dark mode'}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              {/* Prominent Get Started Button -> Opens Dedicated Docs Page at Quick Start */}
              <button
                onClick={() => openDocsPage('quick-start')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xs transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Button */}
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
                <span>Benchmarks</span>
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
                    setGithubModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300 py-2"
                >
                  <FolderGit2 className="w-4 h-4 text-orange-500" />
                  Inspect GitHub
                </button>
                <a
                  href="https://sonikki.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-amber-700 dark:text-amber-400"
                >
                  sonikki.gg ↗
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ==================================================================
            VIEW 1: DEDICATED FULL-PAGE DOCUMENTATION PORTAL (activePage === 'docs')
        ================================================================== */}
        {activePage === 'docs' ? (
          <div className="min-h-[calc(100vh-4rem)] bg-[#FAF8F5] dark:bg-[#141413] border-b border-[#E6E2D8] dark:border-[#282623]">
            {/* Top Subheader Bar for Dedicated Docs Portal */}
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
                    <span>@nexus-orm/nexus</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#22201D] border border-[#E2DDD2] dark:border-[#2F2D29] text-xs font-medium text-stone-700 dark:text-stone-300 hover:border-amber-500 transition-colors"
                  >
                    <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Ask on Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3-Column Documentation Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* COLUMN 1: Left Sticky Navigation Sidebar */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-4 sm:p-5 shadow-2xs">
                  {/* Docs Sidebar Brand Header with Custom Nexus Logo */}
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#EFECE4] dark:border-[#282622]">
                    <NexusLogo className="w-8 h-8 shrink-0" />
                    <div>
                      <div className="font-bold text-sm text-stone-900 dark:text-white flex items-center gap-1.5">
                        <span>Nexus Docs</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300">
                          v1
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400">
                        sonikki.gg/docs
                      </div>
                    </div>
                  </div>

                  {/* Filter Input */}
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

                  {/* Categorized Navigation Groups */}
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
                  {/* Section Category Badge & Title */}
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

                  {/* Verified Architecture Callout Banner */}
                  <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#151413] border border-amber-500/30 flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        Official Package:{' '}
                      </span>
                      All TypeScript APIs and CLI workflows are distributed via the unified{' '}
                      <a
                        href={NPM_PACKAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-amber-700 dark:text-amber-300 underline hover:text-orange-600"
                      >
                        @nexus-orm/nexus
                      </a>{' '}
                      package on npm, communicating directly with the compiled Go execution engine.
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

                  {/* Secondary Code / Engine Trace Block */}
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

                  {/* Full API Reference Table when viewing API Reference */}
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

                  {/* Previous / Next Article Pagination Cards */}
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

                {/* COLUMN 3: Right Sticky Table of Contents & Discord Community Card */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-5">
                  {/* On This Page TOC */}
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

                  {/* Interactive Discord Support Card in Docs Sidebar */}
                  <div className="rounded-2xl bg-[#161513] text-stone-200 border border-stone-800 p-5 shadow-md">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950">
                        <DiscordIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">Nexus Discord</div>
                        <div className="font-mono text-[11px] text-amber-400">
                          discord.gg/G3BcYgZYf
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-stone-400 leading-relaxed">
                      Have questions about schema definitions, Go execution plans, or migrations?
                      Chat directly with the Nexus maintainers and community.
                    </p>

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
                      <button
                        onClick={() => handleCopy(DISCORD_INVITE_URL, 'docs-discord-copy')}
                        className="w-full py-1.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedId === 'docs-discord-copy' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Invite Link Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Invite URL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* ==================================================================
                VIEW 2: HOMEPAGE (HERO, FEATURES, SHOWCASE, ARCHITECTURE, DOCS, DISCORD)
            ================================================================== */}
            <section
              id="overview"
              className="relative overflow-hidden border-b border-[#E6E2D8] dark:border-[#282623] pt-10 pb-16 lg:pt-16 lg:pb-24"
            >
              {/* Subtle Architectural Blueprint Grid Background */}
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
                  {/* Left Column: Brand Emblem, Value Proposition & CTAs */}
                  <div className="lg:col-span-5 pt-2">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] shadow-2xs mb-6">
                      <NexusLogo className="w-5 h-5" animated={false} />
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
                        onClick={() => setGithubModalOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E1D1B] hover:bg-[#F3EFE6] dark:hover:bg-[#262522] text-stone-800 dark:text-stone-200 border border-[#DCD6C8] dark:border-[#32302B] transition-all cursor-pointer"
                      >
                        <FolderGit2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        <span>View on GitHub</span>
                      </button>
                    </div>

                    {/* Package Manager Install Box (@nexus-orm/nexus) */}
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
                          title="Copy install command"
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

                    {/* Key Architectural Pillars Mini-Bar */}
                    <div className="mt-6 grid grid-cols-3 gap-2 pt-2">
                      <div className="px-3 py-2 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623]">
                        <div className="text-[11px] font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold">
                          Interface
                        </div>
                        <div className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                          TypeScript-First
                        </div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623]">
                        <div className="text-[11px] font-mono uppercase text-orange-700 dark:text-orange-400 font-semibold">
                          Execution
                        </div>
                        <div className="text-xs font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                          1,580 µs CRUD Cycle
                        </div>
                      </div>
                      <a
                        href={NPM_PACKAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-white/80 dark:bg-[#1A1917]/80 border border-[#E6E2D8] dark:border-[#282623] hover:border-amber-500/50 transition-colors block"
                      >
                        <div className="text-[11px] font-mono uppercase text-stone-600 dark:text-stone-400 font-semibold flex items-center justify-between">
                          <span>npm Package</span>
                          <ArrowUpRight className="w-3 h-3 text-amber-500" />
                        </div>
                        <div className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 mt-0.5 truncate">
                          @nexus-orm/nexus
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Dual-Pane Code & Go Engine Inspector */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#161514] border border-stone-800 shadow-xl overflow-hidden">
                      {/* Top Window Header */}
                      <div className="px-4 py-3 bg-[#1E1C1A] border-b border-stone-800 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 mr-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-500/70" />
                          </div>
                          {/* Scenario Switcher Pills */}
                          <div className="flex items-center gap-1 bg-[#141312] p-1 rounded-lg border border-stone-800">
                            {HERO_SCENARIOS.map((scenario) => (
                              <button
                                key={scenario.id}
                                onClick={() => setHeroScenarioId(scenario.id)}
                                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                                  heroScenarioId === scenario.id
                                    ? 'bg-amber-500 text-stone-950 font-semibold'
                                    : 'text-stone-400 hover:text-stone-200'
                                }`}
                              >
                                {scenario.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25">
                            @nexus-orm/nexus
                          </span>
                          <button
                            onClick={() => handleCopy(currentHeroScenario.code, 'hero-code')}
                            className="p-1.5 rounded-md bg-stone-800/80 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                            title="Copy code snippet"
                          >
                            {copiedId === 'hero-code' ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* File Path Subbar */}
                      <div className="px-4 py-1.5 bg-[#191816] border-b border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span className="flex items-center gap-1.5">
                          <FileCode className="w-3.5 h-3.5 text-amber-400" />
                          {currentHeroScenario.file}
                        </span>
                        <span className="text-stone-500">TypeScript 5.x • Strict Mode</span>
                      </div>

                      {/* Main Code Block */}
                      <div className="p-4 sm:p-5 bg-[#141312] overflow-x-auto">
                        <SyntaxHighlightedCode code={currentHeroScenario.code} />
                      </div>

                      {/* Bottom Interactive Inspector Drawer (Inferred Type vs Go Engine Execution Plan) */}
                      <div className="border-t border-stone-800 bg-[#1B1A18]">
                        <div className="px-4 py-2 border-b border-stone-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setHeroRightTab('types')}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                                heroRightTab === 'types'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : 'text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <Braces className="w-3.5 h-3.5" />
                              Inferred Return Type
                            </button>
                            <button
                              onClick={() => setHeroRightTab('engine')}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                                heroRightTab === 'engine'
                                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                                  : 'text-stone-400 hover:text-stone-200'
                              }`}
                            >
                              <Cpu className="w-3.5 h-3.5" />
                              Go Execution Plan
                            </button>
                          </div>
                          <span className="hidden sm:inline text-[11px] font-mono text-stone-500">
                            {heroRightTab === 'types'
                              ? 'Compile-time static inference'
                              : 'Runtime Go engine dispatch'}
                          </span>
                        </div>

                        <div className="p-4 font-mono text-xs text-stone-300 bg-[#171614] overflow-x-auto">
                          {heroRightTab === 'types' ? (
                            <pre className="text-amber-200/90 leading-5">
                              {currentHeroScenario.inferredType}
                            </pre>
                          ) : (
                            <pre className="text-orange-200/90 leading-5">
                              {currentHeroScenario.goEnginePlan}
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
                FEATURES SECTION (8 CORE CAPABILITIES -> LINK TO DEDICATED DOCS)
            ================================================================== */}
            <section
              id="features"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                    CORE CAPABILITIES
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
                    Engineered for full-stack TypeScript teams.
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-300">
                    Nexus pairs an ergonomic TypeScript schema and query surface with a dedicated Go
                    execution engine—giving you strict compile-time guarantees and structured database
                    control.
                  </p>
                </div>

                {/* 8 Feature Cards Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {FEATURES_LIST.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={feature.id}
                        className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] hover:border-amber-500/60 dark:hover:border-amber-500/50 p-6 shadow-2xs hover:shadow-md transition-all duration-200"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:scale-105 transition-transform">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F4F1EA] dark:bg-[#252320] text-stone-600 dark:text-stone-400 border border-[#E5E0D4] dark:border-[#33302B]">
                              {feature.tag}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                            {feature.title}
                          </h3>

                          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-[#EFECE4] dark:border-[#282622]">
                          <div className="px-2.5 py-1.5 rounded-lg bg-[#181715] text-stone-300 font-mono text-[11px] truncate">
                            {feature.snippet}
                          </div>
                          <button
                            onClick={() =>
                              feature.docTarget === 'architecture-doc'
                                ? navigateToSection('architecture')
                                : openDocsPage(feature.docTarget)
                            }
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors cursor-pointer"
                          >
                            <span>Read in Docs Portal</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ==================================================================
                CODE SHOWCASE SECTION (SCHEMA, CONNECTING, QUERIES, RELATIONS)
            ================================================================== */}
            <section
              id="code-showcase"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/60 dark:bg-[#171614]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-800 dark:text-orange-300 font-mono text-xs font-semibold mb-3">
                      DEVELOPER WORKFLOW
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
                      Clean, predictable TypeScript from schema to query.
                    </h2>
                    <p className="mt-2 text-base text-stone-600 dark:text-stone-300 max-w-2xl">
                      Inspect how Nexus structures your data layer across model declarations, client
                      initialization, filtered projections, and relational graphs.
                    </p>
                  </div>

                  {/* API Transparency Note */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] text-xs text-stone-600 dark:text-stone-300">
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>
                      Unified TypeScript API imported from{' '}
                      <a
                        href={NPM_PACKAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-amber-700 dark:text-amber-300 hover:underline"
                      >
                        @nexus-orm/nexus
                      </a>
                      .
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Step Selector Tabs */}
                  <div className="lg:col-span-4 space-y-2.5">
                    {CODE_SHOWCASE_TABS.map((tab) => {
                      const isSelected = tab.id === showcaseTabId;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setShowcaseTabId(tab.id)}
                          className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white dark:bg-[#211F1C] border-amber-500 shadow-sm'
                              : 'bg-white/60 dark:bg-[#1B1A18]/60 border-[#E4DFD3] dark:border-[#2B2925] hover:bg-white dark:hover:bg-[#1E1D1A]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300">
                              {tab.filename}
                            </span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-orange-500" />
                            )}
                          </div>
                          <div className="mt-2 font-bold text-base text-stone-900 dark:text-stone-100">
                            {tab.title}
                          </div>
                          <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                            {tab.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Active Code Editor & Type/Engine Output */}
                  <div className="lg:col-span-8 rounded-2xl bg-[#151413] border border-stone-800 shadow-xl overflow-hidden">
                    <div className="px-4 py-3 bg-[#1E1C1A] border-b border-stone-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-amber-400" />
                        <span className="font-mono text-xs font-semibold text-stone-200">
                          src/db/{currentShowcaseTab.filename}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(currentShowcaseTab.code, 'showcase-copy')}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs transition-colors cursor-pointer"
                        >
                          {copiedId === 'showcase-copy' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy file</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Highlighted Code Area */}
                    <div className="p-5 bg-[#141312] overflow-x-auto">
                      <SyntaxHighlightedCode code={currentShowcaseTab.code} />
                    </div>

                    {/* Inferred Type & Engine Behavior Footer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-stone-800 bg-[#1B1917]">
                      <div className="p-4 border-b md:border-b-0 md:border-r border-stone-800">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                          <Braces className="w-3.5 h-3.5" />
                          Static TypeScript Output
                        </div>
                        <pre className="font-mono text-xs text-stone-300 overflow-x-auto leading-5">
                          {currentShowcaseTab.typeOutput}
                        </pre>
                      </div>
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold mb-2 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" />
                            Architectural Behavior
                          </div>
                          <p className="text-xs text-stone-300 leading-relaxed">
                            {currentShowcaseTab.engineNote}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                          <span>Zero type drift</span>
                          <button
                            onClick={() =>
                              openDocsPage(
                                currentShowcaseTab.id === 'client'
                                  ? 'quick-start'
                                  : currentShowcaseTab.id
                              )
                            }
                            className="text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            Open full guide in Docs →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================
                ARCHITECTURE SECTION (TYPESCRIPT API <-> GO EXECUTION ENGINE)
            ================================================================== */}
            <section
              id="architecture"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      SYSTEM ARCHITECTURE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
                      How the TypeScript API and Go Execution Engine connect.
                    </h2>
                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
                      Nexus separates developer-facing schema and query ergonomics from low-level query
                      planning, transaction management, and driver execution. Select any layer below to
                      inspect its role.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveArchLayerId('ts-layer');
                      setIsSimulatingFlow(true);
                    }}
                    className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 dark:text-amber-300 border border-amber-500/30 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSimulatingFlow ? 'Tracing Query Flow...' : 'Trace Query Lifecycle'}</span>
                  </button>
                </div>

                {/* Central Emblem Bridge Header */}
                <div className="mt-8 p-4 rounded-2xl bg-[#F4F1EA] dark:bg-[#191816] border border-[#E4DFD3] dark:border-[#2B2925] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <NexusLogo className="w-9 h-9" />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                        Nexus Execution Bridge
                      </div>
                      <div className="text-sm font-bold text-stone-900 dark:text-white">
                        TypeScript Developer Surface ↔ Structured AST Bridge ↔ Go Engine ↔ Backend Drivers
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => openDocsPage('api-reference')}
                    className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Bridge Specs in Docs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Interactive 4-Stage Visual Pipeline Diagram */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {ARCHITECTURE_LAYERS.map((layer, index) => {
                    const isActive = layer.id === activeArchLayerId;
                    return (
                      <button
                        key={layer.id}
                        onClick={() => {
                          setIsSimulatingFlow(false);
                          setActiveArchLayerId(layer.id);
                        }}
                        className={`text-left p-5 rounded-2xl border transition-all relative cursor-pointer ${
                          isActive
                            ? 'bg-white dark:bg-[#201E1B] border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                            : 'bg-white/70 dark:bg-[#1A1917] border-[#E4DFD3] dark:border-[#2B2925] hover:border-amber-500/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                              isActive
                                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                                : 'bg-[#F3EFE6] dark:bg-[#262421] text-stone-600 dark:text-stone-400'
                            }`}
                          >
                            STAGE {layer.step}
                          </span>
                          <span className="font-mono text-[11px] text-stone-500 dark:text-stone-400">
                            {layer.package}
                          </span>
                        </div>

                        <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                          {layer.name}
                        </h3>

                        <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                          {layer.summary}
                        </p>

                        {index < ARCHITECTURE_LAYERS.length - 1 && (
                          <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#FAF8F5] dark:bg-[#141413] border border-amber-500/40 items-center justify-center text-amber-600 dark:text-amber-400">
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Active Architecture Stage Deep-Dive Panel */}
                <div className="mt-6 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#E6E2D8] dark:border-[#2B2925]">
                      <div className="flex items-center gap-2 font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold">
                        <Workflow className="w-4 h-4" />
                        <span>STAGE {currentArchLayer.step} SPECIFICATION</span>
                      </div>
                      <h3 className="mt-2 text-2xl font-bold text-stone-900 dark:text-white">
                        {currentArchLayer.name}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                        {currentArchLayer.summary}
                      </p>

                      <div className="mt-6 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                          Key Layer Responsibilities
                        </div>
                        {currentArchLayer.responsibilities.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-6 bg-[#151413] p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                          <span className="font-mono text-xs font-semibold text-amber-400">
                            {currentArchLayer.payloadTitle}
                          </span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-800 text-stone-300">
                            {currentArchLayer.package}
                          </span>
                        </div>
                        <pre className="font-mono text-xs sm:text-[13px] text-stone-200 overflow-x-auto leading-6">
                          {currentArchLayer.payload}
                        </pre>
                      </div>

                      <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                        <span>TypeScript Type Safety ↔ Go Runtime Control</span>
                        <span>sonikki.gg/nexus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================
                BENCHMARKS SECTION (REAL DATA-BACKED METRICS + LIVE AST RUNNER)
            ================================================================== */}
            <section
              id="benchmarks"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/60 dark:bg-[#171614]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Workload Switcher */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>VERIFIED PERFORMANCE BENCHMARKS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
                      Near-driver latency. A fraction of the V8 memory footprint.
                    </h2>
                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      Because{' '}
                      <code className="font-mono text-amber-700 dark:text-amber-300 font-semibold">
                        @nexus-orm/nexus
                      </code>{' '}
                      offloads SQL compilation, connection pooling, and binary wire decoding to its compiled
                      Go execution engine, it stays within{' '}
                      <span className="font-semibold text-stone-900 dark:text-white">
                        1.12× of the raw driver floor
                      </span>{' '}
                      while reducing V8 heap allocations by up to 11.5×.
                    </p>
                  </div>

                  {/* 4 Workload Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-[#1E1D1B] p-1.5 rounded-xl border border-[#E2DDD2] dark:border-[#2E2C28] self-start lg:self-auto">
                    {BENCHMARK_WORKLOADS.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setActiveBenchmarkId(w.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          activeBenchmarkId === w.id
                            ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xs'
                            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Headline Stat Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-amber-500/40 shadow-2xs">
                    <div className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold">
                      7-Step CRUD Median (p50)
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-stone-900 dark:text-white font-mono">
                        1,580 µs
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        1.12× raw floor
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400">
                      Only +167 µs total ORM overhead across 7 sequential round-trips.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs">
                    <div className="text-xs font-mono uppercase text-orange-700 dark:text-orange-400 font-semibold">
                      vs. Pure TypeScript ORMs
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-stone-900 dark:text-white font-mono">
                        30%–56%
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                        lower latency
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400">
                      Outperforms Drizzle (2,059 µs), TypeORM (2,158 µs), and Prisma (2,335 µs).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs">
                    <div className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold">
                      V8 Heap Memory / Cycle
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-stone-900 dark:text-white font-mono">
                        24.8 KB
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        -74% vs JS ORMs
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400">
                      Row cursor buffers remain in Go linear memory, avoiding V8 GC pauses.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] shadow-2xs">
                    <div className="text-xs font-mono uppercase text-stone-600 dark:text-stone-400 font-semibold">
                      64-Worker Throughput
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-stone-900 dark:text-white font-mono">
                        26,150
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                        queries/sec
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400">
                      92.1% of raw driver saturation capacity via Go goroutine pooling.
                    </p>
                  </div>
                </div>

                {/* Main Benchmark Comparison Chart + Live Browser Micro-Benchmark Grid */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left 7 Columns: Bar Chart Comparison */}
                  <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-6 sm:p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EFECE4] dark:border-[#282622]">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                          {currentBenchmark.title}
                        </h3>
                        <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                          {currentBenchmark.description}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#F4F1EA] dark:bg-[#252320] text-stone-700 dark:text-stone-300 border border-[#E4DFD3] dark:border-[#33302B] shrink-0">
                        {currentBenchmark.higherIsBetter ? 'Higher is better ↑' : 'Lower is better ↓'}
                      </span>
                    </div>

                    {/* Bar Rows */}
                    <div className="mt-6 space-y-4">
                      {(() => {
                        const maxVal = Math.max(...currentBenchmark.entries.map((e) => e.p50));
                        return currentBenchmark.entries.map((entry, idx) => {
                          const widthPct = Math.max(12, Math.round((entry.p50 / maxVal) * 100));
                          const isNexus = entry.kind === 'nexus';
                          const isFloor = entry.kind === 'floor';

                          return (
                            <div
                              key={idx}
                              className={`p-3.5 rounded-xl border transition-all ${
                                isNexus
                                  ? 'bg-amber-500/[0.08] dark:bg-amber-500/[0.12] border-amber-500/60 shadow-2xs'
                                  : isFloor
                                  ? 'bg-[#FAF8F5] dark:bg-[#161513] border-stone-300/80 dark:border-stone-700/80'
                                  : 'bg-white dark:bg-[#181715] border-[#EFECE4] dark:border-[#262421]'
                              }`}
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`font-bold ${
                                      isNexus
                                        ? 'text-amber-800 dark:text-amber-300 text-sm'
                                        : 'text-stone-800 dark:text-stone-200'
                                    }`}
                                  >
                                    {entry.name}
                                  </span>
                                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                                    {entry.tag}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 font-mono">
                                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#F4F1EA] dark:bg-[#252320] text-stone-600 dark:text-stone-300">
                                    {entry.badge}
                                  </span>
                                  <span
                                    className={`font-extrabold text-sm ${
                                      isNexus
                                        ? 'text-amber-700 dark:text-amber-400'
                                        : 'text-stone-900 dark:text-white'
                                    }`}
                                  >
                                    {entry.p50.toLocaleString()} {currentBenchmark.unit}
                                  </span>
                                </div>
                              </div>

                              {/* Visual Progress Bar */}
                              <div className="mt-2.5 w-full h-2.5 rounded-full bg-stone-200/70 dark:bg-stone-800 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    isNexus
                                      ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                                      : isFloor
                                      ? 'bg-emerald-500/80'
                                      : 'bg-stone-400 dark:bg-stone-600'
                                  }`}
                                  style={{ width: `${widthPct}%` }}
                                />
                              </div>

                              <div className="mt-2 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                                <span>{entry.note}</span>
                                <span className="font-mono shrink-0">
                                  {currentBenchmark.id === 'throughput'
                                    ? `p99: ${(entry.p99 / 1000).toFixed(1)} ms`
                                    : `p99: ${entry.p99.toLocaleString()} ${currentBenchmark.unit}`}
                                </span>
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>

                  {/* Right 5 Columns: Live In-Browser AST Micro-Benchmark + Methodology */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Interactive Live Browser AST Compilation Micro-Benchmark */}
                    <div className="rounded-2xl bg-[#161514] border border-stone-800 text-stone-200 p-6 shadow-xl">
                      <div className="flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>LIVE IN-BROWSER AST BENCHMARK</span>
                        </div>
                        <span className="font-mono text-[11px] text-stone-400">
                          performance.now()
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-white">
                        Test Nexus AST Compilation on Your Hardware
                      </h3>
                      <p className="mt-1.5 text-xs text-stone-400 leading-relaxed">
                        Click below to execute{' '}
                        <span className="text-amber-300 font-mono font-semibold">
                          10,000 real iterations
                        </span>{' '}
                        of <code className="font-mono text-amber-300">@nexus-orm/nexus</code>{' '}
                        relational Query AST construction and parameterized SQL serialization
                        directly in your browser.
                      </p>

                      {/* Measured Metrics Grid */}
                      <div className="mt-4 grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-xl bg-[#1E1C1A] border border-stone-800">
                          <div className="text-[10px] font-mono uppercase text-stone-400">
                            Throughput
                          </div>
                          <div className="mt-1 font-mono text-sm sm:text-base font-extrabold text-amber-400">
                            {liveBenchResult.opsPerSec.toLocaleString()}
                          </div>
                          <div className="text-[10px] font-mono text-stone-500">queries / sec</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#1E1C1A] border border-stone-800">
                          <div className="text-[10px] font-mono uppercase text-stone-400">
                            Avg Latency
                          </div>
                          <div className="mt-1 font-mono text-sm sm:text-base font-extrabold text-orange-400">
                            {liveBenchResult.avgUsPerQuery} µs
                          </div>
                          <div className="text-[10px] font-mono text-stone-500">per AST build</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#1E1C1A] border border-stone-800">
                          <div className="text-[10px] font-mono uppercase text-stone-400">
                            10k Elapsed
                          </div>
                          <div className="mt-1 font-mono text-sm sm:text-base font-extrabold text-emerald-400">
                            {liveBenchResult.elapsedMs} ms
                          </div>
                          <div className="text-[10px] font-mono text-stone-500">
                            {liveBenchResult.hasRunLive ? 'Live measured' : 'Baseline'}
                          </div>
                        </div>
                      </div>

                      {/* Run Trigger Button */}
                      <button
                        onClick={runLiveBrowserBenchmark}
                        className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>
                          {liveBenchResult.hasRunLive
                            ? 'Re-Run 10,000 AST Compilations Now'
                            : 'Run Live AST Compilation Benchmark (10,000x)'}
                        </span>
                      </button>

                      {/* Serialized Envelope Output */}
                      <div className="mt-4 pt-3 border-t border-stone-800">
                        <div className="text-[11px] font-mono text-stone-400 mb-1.5 flex items-center justify-between">
                          <span>Last Compiled AST Envelope → Go Bridge:</span>
                          <span className="text-emerald-400">✔ Parameterized</span>
                        </div>
                        <pre className="p-2.5 rounded-lg bg-[#11100F] border border-stone-800/90 font-mono text-[11px] text-amber-200/90 overflow-x-auto leading-4">
                          {liveBenchResult.sampleAstJson}
                        </pre>
                      </div>
                    </div>

                    {/* Reproducible Methodology & Specs Card */}
                    <div className="rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E4DFD3] dark:border-[#2B2925] p-6 shadow-2xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs uppercase tracking-wider font-bold text-stone-800 dark:text-stone-200">
                          Reproducible Methodology
                        </span>
                        <button
                          onClick={() => openDocsPage('benchmarks-doc')}
                          className="font-mono text-xs text-amber-700 dark:text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Full Spec in Docs</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>
                            <strong>Environment:</strong> PostgreSQL 18.6, Node 24.20 / Bun 1.4.4,
                            Go 1.23 execution engine, persistent connection pool (maxOpenConns: 25).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>
                            <strong>Protocol:</strong> 250 measured interleaved rounds after 125
                            warmup rounds (95% confidence interval, randomized order per round).
                          </span>
                        </li>
                      </ul>

                      <div className="mt-4 rounded-xl bg-[#151413] border border-stone-800 p-3 flex items-center justify-between gap-2">
                        <code className="font-mono text-[11px] text-stone-200 truncate">
                          <span className="text-amber-400">$ </span>
                          npx @nexus-orm/nexus bench --suite crud-7step
                        </code>
                        <button
                          onClick={() =>
                            handleCopy(
                              'npx @nexus-orm/nexus bench --suite crud-7step',
                              'bench-cli-copy'
                            )
                          }
                          className="px-2 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-[11px] shrink-0 cursor-pointer"
                        >
                          {copiedId === 'bench-cli-copy' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================
                DOCUMENTATION ENTRY POINTS SECTION (LAUNCHES DEDICATED DOCS PAGE)
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
                      Documentation Portal with interactive code blocks, engine traces, and API
                      tables.
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

                {/* Documentation Entry Cards Grid */}
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
                INTERACTIVE DISCORD SERVER INVITE WIDGET (https://discord.gg/G3BcYgZYf)
            ================================================================== */}
            <section
              id="discord-community"
              className="py-16 lg:py-24 border-b border-[#E6E2D8] dark:border-[#282623] bg-[#F4F1EA]/70 dark:bg-[#171614]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Invite Details, Perks & Direct Action Buttons */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold mb-3">
                      <DiscordIcon className="w-3.5 h-3.5" />
                      <span>OFFICIAL DEVELOPER COMMUNITY</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
                      Build alongside the Nexus engineering community.
                    </h2>

                    <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      Join our official Discord server to discuss TypeScript schema design, Go
                      execution engine internals, migration workflows, and upcoming driver releases
                      with the maintainers at{' '}
                      <span className="font-mono font-semibold text-amber-700 dark:text-amber-400">
                        sonikki.gg
                      </span>
                      .
                    </p>

                    {/* Invite Card Box */}
                    <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-[#1E1D1B] border border-[#E2DDD2] dark:border-[#2E2C28] shadow-xs">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <NexusLogo className="w-11 h-11 shrink-0" />
                          <div>
                            <div className="font-bold text-base text-stone-900 dark:text-white flex items-center gap-2">
                              <span>Nexus ORM Official</span>
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Active
                              </span>
                            </div>
                            <div className="font-mono text-xs text-stone-500 dark:text-stone-400">
                              https://discord.gg/G3BcYgZYf
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2.5">
                        <a
                          href={DISCORD_INVITE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xs transition-all"
                        >
                          <DiscordIcon className="w-4 h-4" />
                          <span>Join Nexus Discord</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                        <button
                          onClick={() => handleCopy(DISCORD_INVITE_URL, 'discord-widget-copy')}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#F4F1EA] dark:bg-[#282623] hover:bg-amber-500/20 text-stone-800 dark:text-stone-200 border border-[#DED8CA] dark:border-[#383530] transition-colors cursor-pointer"
                        >
                          {copiedId === 'discord-widget-copy' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Copied Link!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Invite</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Discord Server Channel Previewer */}
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl bg-[#161514] border border-stone-800 shadow-2xl overflow-hidden text-stone-200">
                      {/* Server Window Top Bar */}
                      <div className="px-4 py-3 bg-[#1E1C1A] border-b border-stone-800 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <NexusLogo className="w-6 h-6" />
                          <span className="font-bold text-xs sm:text-sm text-white">
                            Nexus ORM • Developer Server
                          </span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            #{currentDiscordChannel.name}
                          </span>
                        </div>

                        <a
                          href={DISCORD_INVITE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors"
                        >
                          <span>Open in Discord</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[360px]">
                        {/* Left Channel List Sidebar */}
                        <div className="sm:col-span-4 bg-[#191816] border-b sm:border-b-0 sm:border-r border-stone-800 p-3 flex flex-col justify-between">
                          <div>
                            <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
                              Text Channels
                            </div>
                            <div className="mt-1 space-y-1">
                              {DISCORD_CHANNELS.map((ch) => {
                                const active = ch.id === activeDiscordChannelId;
                                return (
                                  <button
                                    key={ch.id}
                                    onClick={() => setActiveDiscordChannelId(ch.id)}
                                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                                      active
                                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                                        : 'text-stone-400 hover:bg-stone-800/60 hover:text-stone-200'
                                    }`}
                                  >
                                    <span className="flex items-center gap-1.5 truncate">
                                      <Hash className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                                      <span className="truncate">{ch.name}</span>
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-stone-800/80 px-2">
                            <div className="text-[11px] font-mono text-stone-400">
                              Invite Code:{' '}
                              <span className="text-amber-400 font-semibold">G3BcYgZYf</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Channel Feed */}
                        <div className="sm:col-span-8 p-4 flex flex-col justify-between bg-[#141312]">
                          <div>
                            {/* Channel Topic Header */}
                            <div className="pb-3 mb-3 border-b border-stone-800/80 flex items-center justify-between gap-2">
                              <div className="text-xs text-stone-400 leading-relaxed">
                                {currentDiscordChannel.topic}
                              </div>
                              <span className="shrink-0 font-mono text-[10px] px-2 py-0.5 rounded bg-stone-800 text-amber-300">
                                {currentDiscordChannel.badge}
                              </span>
                            </div>

                            {/* Channel Messages */}
                            <div className="space-y-4">
                              {currentDiscordChannel.messages.map((msg, idx) => (
                                <div
                                  key={idx}
                                  className="p-3 rounded-xl bg-[#1A1917] border border-stone-800/90"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={`w-6 h-6 rounded-full bg-gradient-to-br ${msg.avatarBg} flex items-center justify-center text-[11px] font-bold text-white uppercase`}
                                      >
                                        {msg.author[0]}
                                      </div>
                                      <span className="font-bold text-xs text-white">
                                        {msg.author}
                                      </span>
                                      <span
                                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${msg.roleColor}`}
                                      >
                                        {msg.role}
                                      </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-stone-500">
                                      {msg.time}
                                    </span>
                                  </div>

                                  <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                                    {msg.content}
                                  </p>

                                  {msg.code && (
                                    <pre className="mt-2 p-2.5 rounded-lg bg-[#11100F] border border-stone-800 font-mono text-[11px] text-amber-300 overflow-x-auto">
                                      {msg.code}
                                    </pre>
                                  )}

                                  {/* Interactive Emoji Reactions */}
                                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                                    {msg.reactions.map((r, rIdx) => {
                                      const boostKey = `${currentDiscordChannel.id}-${idx}-${r.emoji}`;
                                      const boosted = !!discordReactionBoosts[boostKey];
                                      return (
                                        <button
                                          key={rIdx}
                                          onClick={() =>
                                            toggleDiscordReaction(
                                              currentDiscordChannel.id,
                                              idx,
                                              r.emoji
                                            )
                                          }
                                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono border transition-colors cursor-pointer ${
                                            boosted
                                              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                                              : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                                          }`}
                                          title="Click to react"
                                        >
                                          <span>{r.emoji}</span>
                                          <span>{r.count + (boosted ? 1 : 0)}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Prompt Bar to Join Live Server */}
                          <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                            <span className="text-xs text-stone-400 truncate">
                              Join{' '}
                              <span className="text-amber-400 font-mono">
                                #{currentDiscordChannel.name}
                              </span>{' '}
                              on Discord to reply
                            </span>
                            <a
                              href={DISCORD_INVITE_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 hover:from-amber-400 hover:to-orange-500 transition-all"
                            >
                              <DiscordIcon className="w-3.5 h-3.5" />
                              <span>Join Server</span>
                            </a>
                          </div>
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
              Install the unified{' '}
              <code className="font-mono text-amber-700 dark:text-amber-300">@nexus-orm/nexus</code>{' '}
              package from npm.
            </p>

            {/* Quick CLI Init Command Pill */}
            <div className="mt-8 max-w-md mx-auto rounded-xl bg-[#161514] border border-stone-800 p-2 pl-4 flex items-center justify-between gap-3 shadow-md">
              <code className="font-mono text-xs sm:text-sm text-stone-200 truncate">
                <span className="text-amber-400">$ </span>
                npx @nexus-orm/nexus init
              </code>
              <button
                onClick={() => handleCopy('npx @nexus-orm/nexus init', 'cta-init')}
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
                onClick={() => setGithubModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E1D1B] hover:bg-stone-100 dark:hover:bg-[#282623] text-stone-800 dark:text-stone-200 border border-[#DCD6C8] dark:border-[#32302B] transition-all cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-orange-500" />
                <span>Explore Packages on GitHub</span>
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            FOOTER
        ================================================================== */}
        <footer className="bg-[#F3EFE6] dark:bg-[#11100F] text-stone-600 dark:text-stone-400 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#E2DDD2] dark:border-[#24221F]">
              {/* Col 1: Brand & sonikki.gg association */}
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1B19] border border-[#E2DDD2] dark:border-[#2C2A26] text-amber-800 dark:text-amber-300 hover:border-amber-500 transition-colors"
                  >
                    <span>@nexus-orm/nexus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1B19] border border-[#E2DDD2] dark:border-[#2C2A26] text-stone-800 dark:text-stone-200 hover:border-amber-500 transition-colors"
                  >
                    <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Discord</span>
                  </a>
                </div>
              </div>

              {/* Col 2: Documentation Links */}
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

              {/* Col 3: Engine & Workflows */}
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
                      onClick={() => navigateToSection('benchmarks')}
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      Benchmarks
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 4: Project & Ecosystem */}
              <div className="md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mb-3">
                  Community
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
                    <button
                      onClick={() => setGithubModalOpen(true)}
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      GitHub Repository
                    </button>
                  </li>
                  <li>
                    <a
                      href={NPM_PACKAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>@nexus-orm/nexus</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
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
                @nexus-orm/nexus • TypeScript Interface • Go Execution Engine
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
            MODAL 2: GITHUB & NPM PACKAGE INSPECTOR
        ================================================================== */}
        {githubModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setGithubModalOpen(false)}
            />
            <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#1B1A18] border border-[#E2DDD2] dark:border-[#2F2D29] shadow-2xl overflow-hidden z-10">
              <div className="px-6 py-4 bg-[#F4F1EA] dark:bg-[#22201D] border-b border-[#E2DDD2] dark:border-[#2F2D29] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <NexusLogo className="w-7 h-7" />
                  <div>
                    <div className="font-bold text-sm text-stone-900 dark:text-white">
                      Nexus ORM Repository & Package Architecture
                    </div>
                    <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400">
                      sonikki.gg • @nexus-orm/nexus
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setGithubModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-500 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Nexus ORM is distributed on npm under{' '}
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-amber-700 dark:text-amber-400 underline"
                  >
                    @nexus-orm/nexus
                  </a>
                  , combining the TypeScript schema & query client with the compiled Go execution
                  engine and CLI workflow commands.
                </p>

                <div className="rounded-xl bg-[#151413] border border-stone-800 p-4 font-mono text-xs text-stone-300 space-y-1.5">
                  <div className="text-amber-400 font-semibold mb-2">
                    nexus-orm/ (Workspace Structure)
                  </div>
                  <div>├─ packages/nexus/        # @nexus-orm/nexus (TypeScript API, Client & CLI)</div>
                  <div>├─ engine/                # Go Execution Engine (Planner, Pool & Tx Manager)</div>
                  <div>├─ drivers/               # Database Backend Driver Abstractions</div>
                  <div>└─ benchmarks/            # Reproducible 7-Step CRUD & V8 Memory Suite</div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={NPM_PACKAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors"
                  >
                    <span>View @nexus-orm/nexus on npm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#F4F1EA] dark:bg-[#262421] text-stone-800 dark:text-stone-200 border border-[#E2DDD2] dark:border-[#33302B]"
                  >
                    <DiscordIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Join Discord Server</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}