"use client";

import { Download, Lock } from "lucide-react";
import { motion } from "motion/react";
import { Photo } from "@/components/mockups/bits";
import { DashboardMockup } from "@/components/mockups/dashboard";
import { BookingMockup, ScheduleMockup } from "@/components/mockups/features";
import { BrowserFrame, PhoneFrame, TabletFrame } from "@/components/mockups/frames";
import { ease } from "@/components/ui/motion";
import { Container, Glow, MockupNote, SectionHeading } from "@/components/ui/primitives";
import { ScaleBox } from "@/components/ui/scale-box";

function rise(delay: number, y = 50) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 1, delay, ease },
  };
}

export function Devices() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-deep/70 to-night py-24 sm:py-32">
      <Glow className="left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 bg-accent/15" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Every device"
          title="Built for the way you actually work."
          body="Run the business from your desk, check the day's routes on a tablet, and let agents book and download from their phones."
        />

        <div className="mt-16 sm:mt-20">
          <ScaleBox width={1200} height={760}>
            <div className="relative h-full w-full">
              <motion.div {...rise(0)} className="absolute left-[110px] top-0 w-[900px]">
                <BrowserFrame>
                  <DashboardMockup />
                </BrowserFrame>
              </motion.div>

              <motion.div {...rise(0.15)} className="absolute bottom-0 left-0 w-[520px]">
                <TabletFrame>
                  <div className="h-[330px] overflow-hidden">
                    <ScheduleMockup />
                  </div>
                </TabletFrame>
              </motion.div>

              <motion.div {...rise(0.25)} className="absolute bottom-6 right-[210px] w-[230px]">
                <PhoneFrame>
                  <div className="h-[440px]">
                    <BookingMockup step="time" />
                  </div>
                </PhoneFrame>
              </motion.div>

              <motion.div {...rise(0.35)} className="absolute bottom-24 right-0 w-[230px]">
                <PhoneFrame>
                  <div className="h-[440px]">
                    <MobileGallery />
                  </div>
                </PhoneFrame>
              </motion.div>
            </div>
          </ScaleBox>
          <MockupNote className="mt-8" />
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          {[
            ["Desktop", "The full business: orders, schedule, clients, invoices and metrics."],
            ["Tablet & phone", "Photographers see today's shoots, routes and access notes on the go."],
            ["Your clients", "Agents book, pay and download from any device, no app to install."],
          ].map(([t, b]) => (
            <div key={t}>
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MobileGallery() {
  return (
    <div className="flex h-full flex-col bg-deep pt-8 text-left">
      <div className="px-4 pb-3">
        <p className="text-[13px] font-semibold">1200 Oak Ridge Lane</p>
        <p className="text-[10px] text-fg-muted">32 photos · video · 3D tour</p>
      </div>
      <div className="grid flex-1 grid-cols-2 content-start gap-1 px-1.5">
        <Photo variant={0} className="col-span-2 aspect-[16/10] rounded-md" />
        {[1, 2, 3, 5].map((v, i) => (
          <Photo key={i} variant={v} className="aspect-square rounded-md" />
        ))}
      </div>
      <div className="space-y-2 border-t border-border/70 bg-[#0a1a30] p-3">
        <div className="flex items-center justify-center gap-1.5 rounded-xl bg-accent py-2.5 text-[11px] font-medium text-white">
          <Lock className="size-3" /> Pay $425 to download
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-fg-muted">
          <Download className="size-3" /> Full size or MLS size
        </div>
      </div>
    </div>
  );
}
