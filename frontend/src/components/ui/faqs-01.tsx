import { ArrowRight, MessageCircle, Sparkles, Mail } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export interface FaqItem {
  q: string;
  a: string;
}

export interface Faqs01Props {
  defaultValue?: string;
  supportEmail?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  items?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    q: "What is CodeStreak and how does it accelerate my DSA prep?",
    a: "CodeStreak is a dedicated daily DSA learning planner, consistency tracker, and interview prep workspace. It combines structured curriculum milestones, daily problem sprints, a spaced repetition revision queue, and interactive activity heatmaps to help you build unbreakable coding habits.",
  },
  {
    q: "How does the Spaced Repetition Revision Queue work?",
    a: "Whenever you solve a tricky problem or needed hints, you can mark it for revision. CodeStreak queues it into an automated spaced review cycle (Day 1, Day 3, Day 7, Day 14) so you retain complex data structures and algorithmic patterns before your interviews.",
  },
  {
    q: "Can I customize my daily targets and roadmap syllabus?",
    a: "Yes. You can switch between the intensive 4-Week Sprint track and the deep-dive 6-Week Master curriculum, customize daily estimated problem solve times, and schedule custom tasks with one click.",
  },
  {
    q: "How is my daily consistency streak tracked?",
    a: "Your streak increases every day you complete your planned tasks or log solved LeetCode problems. The live Activity Heatmap visualizes your momentum, problem difficulty breakdown (Easy, Medium, Hard), and consistency patterns over time.",
  },
  {
    q: "How does Mobile OTP login work?",
    a: "CodeStreak uses passwordless, instant authentication. Simply enter your 10-digit mobile number, receive a 6-digit OTP, and your data automatically synchronizes across all your devices with end-to-end session security.",
  },
  {
    q: "How can I get direct mentorship or technical assistance?",
    a: "You can write to us via email or chat with our team on WhatsApp using the buttons below. We respond within four business hours to help you with your preparation roadmap.",
  },
];

export default function Faqs01({
  defaultValue,
  supportEmail = "support@codestreak.dev",
  whatsappNumber = "+1234567890",
  whatsappMessage = "Hello CodeStreak team! I have a question about my DSA roadmap and prep.",
  items = defaultFaqs,
}: Faqs01Props) {
  const mailtoHref = `mailto:${supportEmail}?subject=Inquiry%20from%20CodeStreak%20User`;
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-background py-16 sm:py-24 text-foreground">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm shadow-black/5">
            <Sparkles className="size-3 text-amber-500" />
            FAQ
          </span>
          <h2
            className="text-balance font-semibold tracking-tight text-foreground"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Frequently asked questions
          </h2>
          <p className="max-w-xl text-balance text-muted-foreground text-sm sm:text-base">
            Quick answers to the questions we get the most. Can&apos;t find
            yours? Write to{" "}
            <a
              href={mailtoHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {supportEmail}
            </a>
            .
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 divide-y divide-border border-y border-border"
          defaultValue={defaultValue}
        >
          {items.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact with Mail and WhatsApp */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border bg-muted/30 p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background">
              <MessageCircle className="size-4" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-medium text-foreground">
                Still have a question?
              </p>
              <p className="text-xs text-muted-foreground">
                We reply within four business hours.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Contact with Mail */}
            <a
              href={mailtoHref}
              className="inline-flex"
            >
              <Button size="sm" variant="outline" className="rounded-full gap-1.5 border-border hover:bg-muted text-foreground">
                <Mail className="size-3.5" />
                <span>Mail Us</span>
              </Button>
            </a>

            {/* Contact with WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="sm" className="rounded-full gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white">
                <svg
                  className="size-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
                <ArrowRight className="size-3" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
