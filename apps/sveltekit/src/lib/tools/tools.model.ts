import type { Manifest } from '../modules/modules.model';

export interface ToolManifest extends Manifest {
  presentation: ToolManifestPresentation;
  cardSizes?: number[];
}

export interface ToolManifestPresentation {
  animation: ToolManifestAnimation;
}

export interface ToolManifestAnimation {
  dynamic: boolean;
  frames: number;
}
