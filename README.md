# `@pchmn/fly-admin`

> This is a fork of https://github.com/supabase/fly-admin

A Typescript client for managing Fly infrastructure.

## Install

```bash
npm i --save @pchmn/fly-admin
```

## Usage

```ts
import { createClient } from '@pchmn/fly-admin'

const fly = createClient('FLY_API_TOKEN')

async function deployApp() {
  const machine = await fly.Machine.createMachine({
    app_name: 'myAppId',
    image: 'supabase/postgres',
  })
}
```

## API

**Apps**

- `fly.App.listApps()`
- `fly.App.getApp()`
- `fly.App.createApp()`
- `fly.App.deleteApp()`

**Machines**

- `fly.Machine.listMachines()`
- `fly.Machine.getMachine()`
- `fly.Machine.createMachine()`
- `fly.Machine.updateMachine()`
- `fly.Machine.startMachine()`
- `fly.Machine.stopMachine()`
- `fly.Machine.deleteMachine()`
- `fly.Machine.restartMachine()`
- `fly.Machine.signalMachine()`
- `fly.Machine.waitMachine()`
- `fly.Machine.cordonMachine()`
- `fly.Machine.uncordonMachine()`
- `fly.Machine.listEvents()`
- `fly.Machine.listVersions()`
- `fly.Machine.listProcesses()`
- `fly.Machine.getLease()`
- `fly.Machine.acquireLease()`
- `fly.Machine.releaseLease()`

**Networks**

- `fly.Network.allocateIpAddress()`
- `fly.Network.releaseIpAddress()`

**Organizations**

- `fly.Organization.getOrganization()`

**Secrets**

- `fly.Secret.setSecrets()`
- `fly.Secret.unsetSecrets()`

**Volumes**

- `fly.Volume.listVolumes()`
- `fly.Volume.getVolume()`
- `fly.Volume.createVolume()`
- `fly.Volume.deleteVolume()`
- `fly.Volume.extendVolume()`
- `fly.Volume.listSnapshots()`

**Release**

- `fly.Release.createRelease()`
- `fly.Release.updateRelease()`

**TODO**

- [ ] `fly.Machine.execMachine()`
- [x] `fly.Machine.releaseLease()`
- [ ] `fly.Machine.getMetadata()`
- [ ] `fly.Machine.updateMetadata()`
- [ ] `fly.Machine.deleteMetadata()`

## License

MIT
