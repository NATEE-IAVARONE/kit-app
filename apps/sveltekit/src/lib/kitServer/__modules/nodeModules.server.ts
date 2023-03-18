import { readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { omit, compact } from 'lodash-es';
import type { Manifest, ModuleManager } from './modules.model';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

export class NodeModulesManager implements ModuleManager {

  private cached_modulesDir?: string;
  private cached_modulesNames?: string[];
  private cached_manifests?: Manifest[];
  private propsToOmit = ['license', 'scripts', 'main'] as const;
  private require?: any;

  constructor() {
    
  }

  private pathToPackageJSON(dirname: string): string {
    return `@kit-tools/${dirname}/package.json`;
  }

  getModulesDirnames(): string[] {
    this.cached_modulesNames ??= getDirectories(this.getModulesDirPath());

    return this.cached_modulesNames;
  }

  async getManifests(): Promise<Manifest[]> {
    this.cached_manifests ??= compact(await Promise.all(this.getModulesDirnames().map(this.getManifest.bind(this))));

    return this.cached_manifests;
  }

  async getManifest(dirname: string): Promise<Manifest | undefined> {
    const manifest = omit(this.require(this.pathToPackageJSON(dirname)), this.propsToOmit) as Manifest;

    return manifest;
  }

  private getModulesDirPath(): string {
    if (!this.cached_modulesDir) {
      this.require = createRequire(import.meta.url);
      const appHeaderIndexJsPath: string = this.require.resolve('@kit-tools/app-header');
      this.cached_modulesDir = appHeaderIndexJsPath.substring(0, appHeaderIndexJsPath.indexOf('app-header'));
    }

    return this.cached_modulesDir;
  }
}