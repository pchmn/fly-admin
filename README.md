# `fly-admin`

A Typescript client for managing Fly infrastructure.


## Usage

```ts
import { createClient, Machine } from '@kiwicopple/fly-admin'

const fly = createClient('FLY_API_TOKEN')

// Inside an async function:
const machines: MachineResponse[] = await fly.Machines.listMachines('myAppId')
```


## API

**Apps**

* `fly.App.createApp()`
* `fly.App.deleteApp()`

**Machines**

* `fly.Machines.listMachines()`
* `fly.Machines.createMachine()`
* `fly.Machines.startMachine()`
* `fly.Machines.stopMachine()`
* `fly.Machines.restartMachine()`
* `fly.Machines.deleteMachine()`

**Networks**

* `fly.Network.allocateIpAddress()`
* `fly.Network.releaseIpAddress()`

**Organization**

* `fly.Organization.getOrganization()`

**Secrets**

* `fly.Secret.setSecrets()`
* `fly.Secret.unsetSecrets()`

**Volumes**

* `fly.Volume.createVolume()`
* `fly.Volume.deleteVolume()`
* `fly.Volume.forkVolume()`


## License

MIT