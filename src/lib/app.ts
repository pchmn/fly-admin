import Client from '../client'

export interface CreateAppInput {
  organizationId: string
  name?: string
  preferredRegion?: string
  network?: string
}

export interface CreateAppOutput {
  createApp: {
    app: {
      id: string
      name: string
      organization: {
        slug: string
      }
      config: {
        definition: {
          kill_timeout: number
          kill_signal: string
          processes: any[]
          experimental: {
            auto_rollback: boolean
          }
          services: any[]
          env: Record<string, string>
        }
      }
      regions: {
        name: string
        code: string
      }[]
    }
  }
}

const createAppQuery = `mutation($input: CreateAppInput!) {
  createApp(input: $input) {
    app {
      id
      name
      organization {
        slug
      }
      config {
        definition
      }
      regions {
        name
        code
      }
    }
  }
}`

export type DeleteAppInput = string

export interface DeleteAppOutput {
  deleteApp: {
    organization: {
      id: string
    }
  }
}

const deleteAppQuery = `mutation($appId: ID!) {
  deleteApp(appId: $appId) {
    organization {
      id
    }
  }
}`

export class App {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  async deleteApp(appId: DeleteAppInput): Promise<DeleteAppOutput> {
    return await this.client.gqlPostOrThrow({
      query: deleteAppQuery,
      variables: { appId },
    })
  }

  // Ref: https://github.com/superfly/flyctl/blob/master/api/resource_apps.go#L329
  async createApp(input: CreateAppInput): Promise<CreateAppOutput> {
    return await this.client.gqlPostOrThrow({
      query: createAppQuery,
      variables: { input },
    })
  }
}
