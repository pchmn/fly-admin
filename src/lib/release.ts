import Client from '../client'
import { FlyDefinition } from './release.types'

interface ReleaseResponse {
  release: {
    id: string
    version: string
  }
}

interface CreateReleaseInput {
  appId: string
  image: string
  platformVersion: 'nomad' | 'machines'
  strategy:
    | 'IMMEDIATE'
    | 'CANARY'
    | 'SIMPLE'
    | 'ROLLING'
    | 'ROLLING_ONE'
    | 'BLUE_GREEN'
  definition: FlyDefinition
}

interface CreateReleaseOutput {
  createRelease: ReleaseResponse
}

const createReleaseMutation = `mutation($input: CreateReleaseInput!) {
  createRelease(input: $input) {
    release {
      id
      version
    }
  }
}`

interface UpdateReleaseInput {
  releaseId: string
  status: 'running' | 'complete'
}

const updateReleaseMutation = `mutation($input: UpdateReleaseInput!) {
  updateRelease(input: $input) {
    release {
      id
      version
    }
  }
}`

interface UpdateReleaseOutput {
  updateRelease: ReleaseResponse
}

export class Release {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  async createRelease(input: CreateReleaseInput): Promise<CreateReleaseOutput> {
    return await this.client.gqlPostOrThrow({
      query: createReleaseMutation,
      variables: { input },
    })
  }

  async updateRelease(input: UpdateReleaseInput): Promise<UpdateReleaseOutput> {
    return await this.client.gqlPostOrThrow({
      query: updateReleaseMutation,
      variables: { input },
    })
  }
}
