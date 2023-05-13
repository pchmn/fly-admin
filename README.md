# `fly-admin`

A Typescript client for managing Fly infrastructure.


## Usage

```ts
import { createClient, Machine } from '@kiwicopple/fly-admin'

const fly = createClient('FLY_API_TOKEN')

// Inside an async function:
const machines: MachineResponse[] = await fly.Machine.listMachines('myAppId')
```


## API

**Apps**

* `fly.App.createApp()`
* `fly.App.deleteApp()`

**Machines**

* `fly.Machine.listMachines()`
* `fly.Machine.createMachine()`
* `fly.Machine.startMachine()`
* `fly.Machine.stopMachine()`
* `fly.Machine.restartMachine()`
* `fly.Machine.deleteMachine()`

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