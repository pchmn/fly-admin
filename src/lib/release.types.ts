export interface FlyDefinition {
  app?: string
  primary_region?: string
  build?: BuildConfig
  deploy?: DeployConfig
  env?: Record<string, string>
  vm?: VmConfig[]
  kill_signal?: string
  kill_timeout?: string
  swap_size_mb?: number
  processes?: Record<string, string>
  services?: ServiceConfig[]
  http_service?: HttpServiceConfig
  checks?: Record<string, HealthCheck>
  mounts?: MountConfig[]
  metrics?: MetricsConfig
  statics?: StaticConfig[]
  experimental?: ExperimentalConfig
  consul?: ConsulConfig
  dns?: Record<string, string>
  runtime?: 'python' | 'nodejs' | 'go' | 'ruby' | 'rust' | 'deno' | 'dotnet'
}

interface BuildConfig {
  image?: string
  dockerfile?: string
  buildpacks?: string[]
  builder?: string
  buildargs?: Record<string, string>
  ignorefile?: string
}

interface DeployConfig {
  release_command?: string
  strategy?: 'immediate' | 'rolling' | 'canary' | 'bluegreen'
}

interface VmConfig {
  size?: string
  cpu_kind?: 'shared' | 'performance'
  cpus?: number
  memory?: string
  memory_mb?: number
  gpu_kind?: string
  gpus?: number
}

interface ServiceConfig {
  internal_port: number
  protocol: 'tcp' | 'udp' | 'tls'
  ports?: PortConfig[]
  auto_stop_machines?: boolean
  auto_start_machines?: boolean
  min_machines_running?: number
  concurrency?: ConcurrencyConfig
  tcp_checks?: TcpCheckConfig[]
  http_checks?: HttpCheckConfig[]
}

interface PortConfig {
  port: number
  handlers?: string[]
  force_https?: boolean
}

interface ConcurrencyConfig {
  type: 'connections' | 'requests'
  soft_limit: number
  hard_limit: number
}

interface TcpCheckConfig {
  interval: string
  timeout: string
  grace_period?: string
}

interface HttpCheckConfig {
  interval: string
  timeout: string
  grace_period?: string
  method: string
  path: string
  protocol: 'http' | 'https'
  tls_skip_verify?: boolean
  headers?: Record<string, string>
}

interface HttpServiceConfig {
  internal_port: number
  force_https?: boolean
  auto_stop_machines?: boolean
  auto_start_machines?: boolean
  min_machines_running?: number
  processes?: string[]
  concurrency?: ConcurrencyConfig
  tls_options?: TlsOptions
  headers?: Record<string, string | string[]>
  checks?: HttpCheckConfig[]
}

interface TlsOptions {
  alpn?: string[]
  default_self_signed?: boolean
}

interface HealthCheck {
  port: number
  type: 'http' | 'tcp'
  interval: string
  timeout: string
  grace_period?: string
  method?: string
  path?: string
  protocol?: 'http' | 'https'
  tls_skip_verify?: boolean
}

interface MountConfig {
  source: string
  destination: string
  initial_size?: string
}

interface MetricsConfig {
  port: number
  path: string
}

interface StaticConfig {
  guest_path: string
  url_prefix: string
}

interface ExperimentalConfig {
  enable_consul?: boolean
  enable_vm_network_isolation?: boolean
  private_network?: boolean
  trace_gc?: boolean
  cmd?: string[]
  entrypoint?: string[]
  exec?: string[]
}

interface ConsulConfig {
  url?: string
  datacenter?: string
}
