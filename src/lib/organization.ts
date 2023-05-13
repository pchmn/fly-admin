import Client from '../client'

interface OrganizationResponse {
  id: string
  slug: string
  name: string
  type: 'PERSONAL' | 'SHARED'
  viewerRole: 'admin' | 'member'
}

interface GetOrganizationOutput {
  organization: OrganizationResponse
}

const getOrganizationQuery = `query($slug: String!) {
  organization(slug: $slug) {
    id
    slug
    name
    type
    viewerRole
  }
}`

export class Organization {
  private client: Client

  constructor(client: Client) {
    this.client = client
  }

  async getOrganization(slug: string): Promise<GetOrganizationOutput> {
    return this.client.gqlPostOrThrow({
      query: getOrganizationQuery,
      variables: { slug },
    })
  }
}
