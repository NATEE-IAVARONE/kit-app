export interface Manifest {
  id: string;
  name: string;
  title: string;
  version: string;
  author: string;
}

export abstract class ModuleManager {
  abstract getManifest(id: string): Promise<Manifest | undefined>;
  abstract getManifests(): Promise<Manifest[]>;
}