import Client from '../client'

export interface CreateVolumeInput {
  appId: string
  name: string
  region: string
  sizeGb: number
  encrypted?: boolean
  requireUniqueZone?: boolean
  snapshotId?: string
}

export interface VolumeResponse {
  id: string
  name: string
  app: {
    name: string
  }
  region: string
  sizeGb: number
  encrypted: boolean
  createdAt: string
  host: {
    id: string
  }
}

export interface CreateVolumeOutput {
  createVolume: {
    app: {
      name: string
    }
    volume: VolumeResponse
  }
}

const createVolumeQuery = `mutation($input: CreateVolumeInput!) {
  createVolume(input: $input) {
    app {
      name
    }
    volume {
      id
      name
      app{
        name
      }
      region
      sizeGb
      encrypted
      createdAt
      host {
        id
      }
    }
  }
}`

export interface DeleteVolumeInput {
  volumeId: string
}

export interface DeleteVolumeOutput {
  deleteVolume: {
    app: {
      name: string
    }
  }
}

const deleteVolumeQuery = `mutation($input: DeleteVolumeInput!) {
  deleteVolume(input: $input) {
    app {
      name
    }
  }
}`

// Ref: https://github.com/superfly/flyctl/blob/master/api/resource_volumes.go#L155
export interface ForkVolumeInput {
  appId: string
  sourceVolId: string
  name?: string
  machinesOnly?: boolean
  lockId?: string
}

export interface ForkVolumeOutput {
  forkVolume: {
    app: {
      name: string
    }
    volume: VolumeResponse
  }
}

const forkVolumeQuery = `mutation($input: ForkVolumeInput!) {
  forkVolume(input: $input) {
    app {
      name
    }
    volume {
      id
      name
      app{
        name
      }
      region
      sizeGb
      encrypted
      createdAt
      host {
        id
      }
    }
  }
}`

export class Volume {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  // Ref: https://github.com/superfly/flyctl/blob/master/api/resource_volumes.go#L52
  async createVolume(input: CreateVolumeInput): Promise<CreateVolumeOutput> {
    return await this.client.gqlPostOrThrow({
      query: createVolumeQuery,
      variables: { input },
    })
  }

  async deleteVolume(input: DeleteVolumeInput): Promise<DeleteVolumeOutput> {
    return await this.client.gqlPostOrThrow({
      query: deleteVolumeQuery,
      variables: { input },
    })
  }

  async forkVolume(input: ForkVolumeInput): Promise<ForkVolumeOutput> {
    return this.client.gqlPostOrThrow({
      query: forkVolumeQuery,
      variables: { input },
    })
  }
}
