export type StageKey =
  | "environment"
  | "particles"
  | "lighting"
  | "camera"
  | "characters"
  | "compositing"
  | "rendering"
  | "delivery";

export interface StageBlock {
  title: string;
  summary: string;
  details: {
    label: string;
    value: string;
  }[];
}

export interface PipelinePlan {
  sceneTitle: string;
  moodPalette: string[];
  durationHint: string;
  stages: Record<StageKey, StageBlock>;
  renderSettings: {
    resolution: string;
    frameRate: string;
    aspectRatio: string;
    samples: string;
    renderer: string;
    colorSpace: string;
  };
  exportGuidance: {
    format: string;
    codec: string;
    colorBitDepth: string;
    audio: string;
    deliveryNotes: string;
  };
}
