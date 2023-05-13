import Client from './client'
import * as App from './lib/app'

function createClient(API_TOKEN: string): Client {
  return new Client(API_TOKEN)
}

export { createClient, App }
