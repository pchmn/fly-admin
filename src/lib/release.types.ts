interface Experimental {
  cmd?: string[]
  entrypoint?: string[]
  exec?: string[]
  auto_rollback?: boolean
  enable_consul?: boolean
  enable_etcd?: boolean
  lazy_load_images?: boolean
  attached?: {
    secrets?: {
      export?: Record<string, string>
    }
  }
}

interface Build {
  builder?: string
  args?: Record<string, string>
  buildpacks?: string[]
  image?: string
  settings?: Record<string, any>
  builtin?: string
  dockerfile?: string
  ignorefile?: string
  'build-target'?: string
}

interface Deploy {
  release_command?: string
  release_command_timeout?: string
  strategy?: string
  max_unavailable?: number
  wait_timeout?: string
}

interface Mount {
  source?: string
  destination?: string
  initial_size?: string
  snapshot_retention?: number
  auto_extend_size_threshold?: number
  auto_extend_size_increment?: string
  auto_extend_size_limit?: string
  processes?: string[]
}

interface Concurrency {
  type?: string
  hard_limit?: number
  soft_limit?: number
}

interface TLSOptions {
  alpn?: string[]
  versions?: string[]
  default_self_signed?: boolean
}

interface HTTPOptions {
  compress?: boolean
  response?: {
    headers?: Record<string, any>
    pristine?: boolean
  }
  h2_backend?: boolean
  idle_timeout?: number
  headers_read_timeout?: number
}

interface Check {
  interval?: string
  timeout?: string
  grace_period?: string
  method?: string
  path?: string
  protocol?: string
  tls_skip_verify?: boolean
  tls_server_name?: string
  headers?: Record<string, string>
}

interface MachineCheck {
  command?: string[]
  image?: string
  entrypoint?: string[]
  kill_signal?: string
  kill_timeout?: string
}

interface HTTPService {
  internal_port?: number
  force_https?: boolean
  auto_stop_machines?: 'off' | 'stop' | 'suspend'
  auto_start_machines?: boolean
  min_machines_running?: number
  processes?: string[]
  concurrency?: Concurrency
  tls_options?: TLSOptions
  http_options?: HTTPOptions
  checks?: Check[]
  machine_checks?: MachineCheck[]
}

interface Port {
  port?: number
  start_port?: number
  end_port?: number
  handlers?: string[]
  force_https?: boolean
  tls_options?: TLSOptions
  http_options?: HTTPOptions
  proxy_proto_options?: {
    version?: string
  }
}

interface Service {
  protocol?: string
  internal_port?: number
  auto_stop_machines?: 'off' | 'stop' | 'suspend'
  auto_start_machines?: boolean
  min_machines_running?: number
  ports?: Port[]
  concurrency?: Concurrency
  tcp_checks?: Omit<
    Check,
    | 'method'
    | 'path'
    | 'protocol'
    | 'tls_skip_verify'
    | 'tls_server_name'
    | 'headers'
  >[]
  http_checks?: Check[]
  machine_checks?: MachineCheck[]
  processes?: string[]
}

interface File {
  guest_path?: string
  local_path?: string
  secret_name?: string
  raw_value?: string
  processes?: string[]
}

interface Restart {
  policy?: 'always' | 'never' | 'on-failure'
  retries?: number
  processes?: string[]
}

interface VM {
  size?: string
  memory?: string
  cpu_kind?: string
  cpus?: number
  memory_mb?: number
  gpus?: number
  gpu_kind?: string
  host_dedication_id?: string
  kernel_args?: string[]
  processes?: string[]
}

interface Static {
  guest_path?: string
  url_prefix?: string
  tigris_bucket?: string
  index_document?: string
}

interface Metric {
  port?: number
  path?: string
  processes?: string[]
}

export interface FlyConfig {
  app?: string
  primary_region?: string
  kill_signal?: string
  kill_timeout?: string
  swap_size_mb?: number
  console_command?: string

  experimental?: Experimental
  build?: Build
  deploy?: Deploy
  env?: Record<string, string>
  processes?: Record<string, string>
  mounts?: Mount[]
  http_service?: HTTPService
  services?: Service[]
  checks?: Record<
    string,
    Check & { port?: number; type?: string; processes?: string[] }
  >
  files?: File[]
  host_dedication_id?: string
  machine_checks?: MachineCheck[]
  restart?: Restart[]
  vm?: VM[]
  statics?: Static[]
  metrics?: Metric[]
}
