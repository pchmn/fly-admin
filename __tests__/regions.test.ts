import nock from 'nock'
import { describe, it, expect } from '@jest/globals'
import { FLY_API_GRAPHQL } from '../src/client'
import { createClient } from '../src/main'

const fly = createClient(process.env.FLY_API_TOKEN || 'test-token')

describe('regions', () => {
  it('get regions', async () => {
    const mockResponse = {
      data: {
        platform: {
          requestRegion: 'sin',
          regions: [
            {
              name: 'Amsterdam, Netherlands',
              code: 'ams',
              latitude: 52.374342,
              longitude: 4.895439,
              gatewayAvailable: true,
              requiresPaidPlan: false,
            },
            // Add more mock regions as needed
          ],
        },
      },
    }

    nock(FLY_API_GRAPHQL).post('/graphql').reply(200, mockResponse)

    const data = await fly.Regions.getRegions()
    console.dir(data, { depth: 5 })

    // Optionally, add assertions to verify the response
    expect(data).toBeDefined()
    expect(data.platform).toBeDefined()
    expect(data.platform.regions).toBeInstanceOf(Array)
    // Add more assertions as needed
  })
})
