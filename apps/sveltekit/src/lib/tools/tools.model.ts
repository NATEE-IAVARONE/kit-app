import type { Manifest } from '../modules/modules.model';

export interface ToolManifest extends Manifest {
  cardSizes?: number[];
}