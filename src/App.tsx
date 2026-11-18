import { Fragment, useEffect, useState } from "react";
import {
  Award,
  ChevronDown,
  ChevronRight,
  Code2,
  Contact,
  Download,
  FileText,
  Globe,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  PROFILE_VARIANTS,
  SHARED_PROFILE,
  type ActionLinkItem,
  type QuickContactItem,
} from "@/data/profile";
import { resolveProfileVariant } from "@/lib/variant";
import { downloadVCard } from "@/lib/vcard";
import { cn } from "@/lib/utils";

function LinkedInMark() {
  return (
    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ActionIcon({ id }: { id: ActionLinkItem["id"] }) {
  if (id === "linkedin") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200/70 bg-white text-[#0A66C2] shadow-subtle transition-colors group-hover:bg-slate-100 sm:h-8 sm:w-8">
        <LinkedInMark />
      </span>
    );
  }

  const iconProps = { className: "h-4 w-4 sm:h-[18px] sm:w-[18px]", strokeWidth: 1.9 };
  const icon =
    id === "resume" ? (
      <FileText {...iconProps} />
    ) : (
      <Code2 {...iconProps} />
    );

  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200/70 bg-white text-slate-700 shadow-subtle transition-colors group-hover:bg-slate-100 group-hover:text-slate-900 sm:h-8 sm:w-8">
      {icon}
    </span>
  );
}

function QuickContactIcon({ id }: { id: QuickContactItem["id"] }) {
  const props = { className: "h-4 w-4", strokeWidth: 1.9 };
  switch (id) {
    case "github":
      return <GitHubMark />;
    case "whatsapp":
      return <MessageCircle {...props} />;
    case "email":
      return <Mail {...props} />;
    case "website":
      return <Globe {...props} />;
  }
}

export function App() {
  const [variantKey] = useState(() => resolveProfileVariant());
  const [isInternExpanded, setIsInternExpanded] = useState(false);
  const profile = PROFILE_VARIANTS[variantKey];

  useEffect(() => {
    document.title = profile.pageTitle;
  }, [profile.pageTitle]);

  return (
    <div className="flex min-h-dvh w-full flex-col bg-white sm:items-center sm:justify-center sm:bg-slate-50 sm:p-4 md:p-6">
      <main
        className="flex min-h-dvh w-full flex-col gap-3 bg-white p-3.5 sm:min-h-0 sm:max-w-md sm:rounded-3xl sm:border sm:border-slate-200 sm:p-4 sm:shadow-sm md:grid md:max-w-3xl md:grid-cols-[290px_1fr] md:items-stretch md:gap-5 md:p-5"
        data-purpose="profile-card"
      >
        {/* Left Column on Desktop / Top Section on Mobile */}
        <div className="flex flex-col gap-2.5 md:justify-between">
          {/* Top Institutional Bar Pill */}
          <div className="flex shrink-0 items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 shadow-subtle">
            {SHARED_PROFILE.institutions.map((logo, index) => (
              <Fragment key={logo.name}>
                {index > 0 && <span className="h-4 w-px bg-slate-200" />}
                <div className={cn("flex h-7 items-center justify-center", logo.widthClass)}>
                  <img
                    alt={logo.name}
                    className="max-h-6 max-w-full object-contain mix-blend-multiply"
                    src={logo.src}
                  />
                </div>
              </Fragment>
            ))}
          </div>

          {/* Top Hero Banner with Image, Status & Location */}
          <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm sm:h-40 md:h-48">
            <img
              alt={SHARED_PROFILE.name}
              className="h-full w-full origin-top scale-125 object-contain object-center"
              src={SHARED_PROFILE.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent" />

            <Badge
              variant="status"
              className="absolute bottom-2.5 left-3 gap-1.5 text-[10px]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              <span>{SHARED_PROFILE.availabilityText}</span>
            </Badge>

            <span className="absolute right-3 bottom-2.5 inline-flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/65 px-2 py-0.5 text-[10px] font-medium text-white/95 backdrop-blur-sm">
              <MapPin className="h-2.5 w-2.5 text-sky-300" />
              <span>{profile.locationLine}</span>
            </span>
          </div>

          {/* Left-Aligned Profile Details */}
          <section
            className="flex shrink-0 flex-col text-left"
            data-purpose="profile-details"
          >
            <div className="flex items-center justify-between gap-2 px-1.5">
              <h1 className="font-heading text-[18px] leading-tight font-bold tracking-tight text-slate-900 sm:text-[19px]">
                {SHARED_PROFILE.name}
              </h1>
            </div>
            <p className="mt-0.5 px-1.5 text-[12px] font-medium text-slate-700 sm:text-[12.5px]">
              {profile.role}
            </p>
            <p className="mt-1 px-1.5 text-[11px] leading-snug font-normal text-slate-500 sm:text-[11.5px]">
              {profile.bio}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {profile.skills.map((skill) => (
                <Badge key={skill.label} variant="default">
                  {skill.label}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column on Desktop / Bottom Section on Mobile */}
        <div className="flex flex-1 flex-col gap-2.5">
          {/* 3-Column Proof Strip */}
          <section
            className="grid shrink-0 grid-cols-2 divide-x divide-slate-200/70 rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 shadow-subtle"
            data-purpose="proof-metrics"
          >
            {profile.metrics.map((metric, index) => (
              <div
                key={metric.value}
                className="flex flex-col items-start justify-center px-3 py-2 text-left"
              >
                <div className="flex items-center gap-1">
                  {index === 0 ? (
                    <Layers className="h-3 w-3 shrink-0 text-sky-600" />
                  ) : index === 1 ? (
                    <Award className="h-3 w-3 shrink-0 text-indigo-600" />
                  ) : (
                    <Star className="h-3 w-3 shrink-0 fill-amber-400 text-amber-500" />
                  )}
                  <span className="font-heading text-[11.5px] leading-tight font-bold text-slate-900">
                    {metric.value.replace(" ★", "")}
                  </span>
                </div>
                <span className="mt-0.5 text-[9.5px] leading-none text-slate-500">
                  {metric.label}
                </span>
              </div>
            ))}
          </section>

          {/* Compact Expandable Current Experience Row (shadcn Collapsible) */}
          <Collapsible
            open={isInternExpanded}
            onOpenChange={setIsInternExpanded}
            className="shrink-0 rounded-xl border border-sky-200/70 bg-sky-50/50 transition-colors hover:bg-sky-50"
            data-purpose="current-role"
          >
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl px-3 py-2 text-left"
              >
                <span className="text-[11px] font-semibold text-slate-800">
                  {profile.currentRole.title}
                </span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200",
                    isInternExpanded && "rotate-180 text-sky-600"
                  )}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="px-3 pb-2 text-[10.5px] leading-snug text-slate-600">
                {profile.currentRole.summary}
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Action Links List */}
          <div
            className="flex flex-col gap-1.5"
            data-purpose="action-links"
          >
            {profile.links.map((item) =>
              item.downloadName ? (
                <div
                  key={item.id}
                  className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 pr-2 shadow-subtle transition-colors hover:bg-slate-50"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-effect flex flex-1 items-center gap-2.5 rounded-l-xl px-3 py-2"
                  >
                    <ActionIcon id={item.id} />
                    <div className="flex flex-col text-left">
                      <span className="text-[12px] leading-snug font-semibold text-slate-800 sm:text-[12.5px]">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-normal text-slate-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </a>
                  <a
                    href={item.href}
                    download={item.downloadName}
                    aria-label={`Download ${item.title}`}
                    title="Download PDF"
                    className="tap-effect flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-500 shadow-subtle transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-effect group flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 px-3 py-2 shadow-subtle transition-colors hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2.5">
                    <ActionIcon id={item.id} />
                    <div className="flex flex-col text-left">
                      <span className="text-[12px] leading-snug font-semibold text-slate-800 sm:text-[12.5px]">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-normal text-slate-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-700" />
                </a>
              )
            )}
          </div>

          {/* Bottom Quick Contacts, vCard & Accreditation Footer */}
          <footer
            className="mt-auto flex shrink-0 flex-col gap-1.5 pt-1"
            data-purpose="card-footer"
          >
            <div className="grid grid-cols-4 gap-1.5">
              {SHARED_PROFILE.quickContacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                  className="tap-effect flex h-9 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/60 text-slate-600 shadow-subtle transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  <QuickContactIcon id={contact.id} />
                </a>
              ))}
            </div>
            <Button
              type="button"
              size="lg"
              className="tap-effect h-[44px] w-full text-[13px] sm:h-[46px]"
              onClick={() => downloadVCard(profile.vcard)}
            >
              <Contact className="h-[18px] w-[18px]" />
              <span>Save Contact (vCard)</span>
            </Button>
            <div className="pb-0.5 text-center">
              <p className="text-[9.5px] font-medium tracking-wide text-slate-400">
                {SHARED_PROFILE.accreditationFooter}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
