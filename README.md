# `fly-admin`

A Typescript client for managing Fly infrastructure.


## Usage

```ts
import { createClient, Machine } from '@kiwicopple/fly-admin'

const Fly = createClient('FLY_API_TOKEN')

// Inside an async function:
const machines: MachineResponse[] = await listMachines('myAppId')
```

## License

MIT