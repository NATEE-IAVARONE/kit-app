import type { Manifest } from '../kitServer';

export interface ToolManifest extends Manifest {
  presentation: ToolManifestPresentation;
  cardSizes?: number[];
}

export interface ToolManifestPresentation {
  type: ToolManifestAnimationType;
  frames: number;
}

export type ToolManifestAnimationType = 'adobeAnimate' | 'gif';