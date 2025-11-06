"use client";

import { useState } from "react";
import { generatePipelinePlan } from "@/lib/generator";
import { StageCard } from "@/components/StageCard";
import { MoodPalette } from "@/components/MoodPalette";

const presetPrompt =
  "Midnight rain-soaked alley in neo-noir Mumbai, lone vigilante ignites arcane fire sigils while drones weave overhead.";

export default function HomePage() {
  const [sceneInput, setSceneInput] = useState(presetPrompt);
  const [plan, setPlan] = useState(() => generatePipelinePlan(presetPrompt));
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsGenerating(true);
    const nextPlan = generatePipelinePlan(sceneInput);
    setPlan(nextPlan);
    setTimeout(() => setIsGenerating(false), 300);
  };

  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,127,80,0.12),_transparent_55%)]" />
      <header className="space-y-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">
            VFX Director // Pipeline Supervisor
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Cinematic VFX Pipeline Architect
          </h1>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Marathi cinematic कल्पना + English तांत्रिक स्पष्टता एकत्र करणारा
            modular supervisor. Scene वर्णन टाका आणि संपूर्ण pipeline breakdown
            instant मिळवा.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 backdrop-blur"
        >
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Scene Blueprint
          </label>
          <textarea
            className="min-h-[140px] rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white shadow-inner transition focus:border-accent-500/70 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
            value={sceneInput}
            onChange={(event) => setSceneInput(event.target.value)}
            placeholder="Describe the scene here..."
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-accent-500/30 transition hover:scale-105 hover:shadow-xl active:scale-95"
            disabled={isGenerating}
          >
            {isGenerating ? "Synthesizing..." : "Generate Pipeline"}
          </button>
        </form>
      </header>

      {plan && (
        <section className="space-y-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Scene Overview
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-accent-500">
              {plan.sceneTitle}
            </h2>
            <p className="text-sm text-white/60">{plan.durationHint}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              Mood Palette
            </h3>
            <MoodPalette colors={plan.moodPalette} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <StageCard block={plan.stages.environment} />
            <StageCard block={plan.stages.particles} />
            <StageCard block={plan.stages.lighting} />
            <StageCard block={plan.stages.camera} />
            <StageCard block={plan.stages.characters} />
            <StageCard block={plan.stages.compositing} />
            <StageCard block={plan.stages.rendering} />
            <StageCard block={plan.stages.delivery} />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-accent-500">
              Render & Export Tech Spec
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Render Settings
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Resolution: {plan.renderSettings.resolution}</li>
                  <li>Frame Rate: {plan.renderSettings.frameRate}</li>
                  <li>Aspect Ratio: {plan.renderSettings.aspectRatio}</li>
                  <li>Samples: {plan.renderSettings.samples}</li>
                  <li>Renderer: {plan.renderSettings.renderer}</li>
                  <li>Color Space: {plan.renderSettings.colorSpace}</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Export Guidance
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Format: {plan.exportGuidance.format}</li>
                  <li>Codec: {plan.exportGuidance.codec}</li>
                  <li>Color Depth: {plan.exportGuidance.colorBitDepth}</li>
                  <li>Audio: {plan.exportGuidance.audio}</li>
                  <li>Delivery Notes: {plan.exportGuidance.deliveryNotes}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
