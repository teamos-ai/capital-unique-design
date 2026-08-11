import React from "react";
import {
  EMAIL, SERIF, SANS, Palette, LINKS,
  Spacer, Eyebrow, Button, Hairline, Gap, Para,
} from "./email/kit";
import { ISSUES, TOPIC_MAP, Issue } from "./campaign/issues";

/* ─────────────────────────────────────────────────────────────────────
   EIGHT-WEEK CAMPAIGN — Light · Inkwell

   Locked to the light build. The dark build stays available in the
   Newsletter pattern, but a campaign should not change its skin
   mid-series.

   GoHighLevel accepts a custom HTML/CSS block, which buys two things a
   drag-and-drop builder cannot do: a series progress indicator in the
   masthead, and a "next in the series" hand-off in the footer. Both are
   built from table cells and solid hex fills, so they survive Outlook.
───────────────────────────────────────────────────────────────────── */

const P: Palette = EMAIL.light;
const TOTAL = ISSUES.length;

/* No dates anywhere. The playbook wants a visible date on the perpetual
   newsletter, but a finite campaign whose send schedule is still moving
   is better off carrying the issue number alone — a stale date on a
   resend is worse than no date at all. Issue N of 8 does the same
   orienting work without pinning the send. */

/* ── Campaign masthead ────────────────────────────────────────────── */

function SeriesProgress({ p, week }: { p: Palette; week: number }) {
  return (
    <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          {Array.from({ length: TOTAL }, (_, i) => (
            <td
              key={i}
              style={{
                width: `${100 / TOTAL}%`,
                height: "3px",
                lineHeight: "3px",
                fontSize: 0,
                background: i < week ? p.accent : p.ruleStrong,
                borderRight: i < TOTAL - 1 ? `2px solid ${p.body}` : "none",
              }}
            >
              &nbsp;
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function CampaignMasthead({ p, issue }: { p: Palette; issue: Issue }) {
  return (
    <>
      <tr>
        <td style={{ height: "3px", lineHeight: "3px", fontSize: 0, background: p.accent }}>&nbsp;</td>
      </tr>
      <tr>
        <td style={{ padding: "24px 32px 0" }}>
          <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "middle" }}>
                  <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                        <td style={{ verticalAlign: "middle", paddingRight: "11px" }}>
                          <img src={p.logoSrc} width={28} height={28} alt="Capital Unique" style={{ display: "block", border: 0 }} />
                        </td>
                        <td style={{ verticalAlign: "middle", fontFamily: SERIF, fontSize: "17px", fontWeight: 600, color: p.text, whiteSpace: "nowrap" }}>
                          capital unique
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ verticalAlign: "middle", textAlign: "right", fontFamily: SANS, fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: p.textQuiet, whiteSpace: "nowrap" }}>
                  Issue {String(issue.week).padStart(2, "0")} of {String(TOTAL).padStart(2, "0")}
                </td>
              </tr>
            </tbody>
          </table>
          <Spacer h={18} />
          <SeriesProgress p={p} week={issue.week} />
          <Spacer h={22} />
        </td>
      </tr>
      <tr>
        <td style={{ padding: "0 32px 26px", borderBottom: `1px solid ${p.rule}` }}>
          <Eyebrow p={p}>{issue.eyebrow}</Eyebrow>
          <Spacer h={12} />
          <div style={{ fontFamily: SERIF, fontSize: "27px", fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.012em", color: p.text }}>
            {issue.headline}
          </div>
          <Spacer h={14} />
          <div style={{ fontFamily: SANS, fontSize: "12px", letterSpacing: "0.04em", color: p.textQuiet }}>
            John Codrington
          </div>
        </td>
      </tr>
    </>
  );
}

/* ── Body ─────────────────────────────────────────────────────────── */

function FigureBlock({ p, figure }: { p: Palette; figure: NonNullable<Issue["figure"]> }) {
  return (
    <tr>
      <td style={{ padding: "6px 32px 24px" }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", background: p.surface, borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "20px 22px" }}>
                <div style={{ width: "28px", height: "2px", background: p.accent }} />
                <Spacer h={14} />
                <div style={{ fontFamily: SERIF, fontSize: "26px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.015em", color: p.text }}>
                  {figure.value}
                </div>
                <Spacer h={8} />
                <div style={{ fontFamily: SANS, fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: p.textSoft, lineHeight: 1.45 }}>
                  {figure.label}
                </div>
                <Spacer h={10} />
                {/* Attribution sits inside the same block as the number —
                    required by the compliance guardrails, not optional. */}
                <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.55, color: p.textQuiet }}>
                  {figure.note}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

function Section({ p, paras, pad = "0 32px 20px" }: { p: Palette; paras: string[]; pad?: string }) {
  return (
    <tr>
      <td style={{ padding: pad }}>
        {paras.map((t, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Spacer h={14} />}
            <Para p={p}>{t}</Para>
          </React.Fragment>
        ))}
      </td>
    </tr>
  );
}

function IssueBody({ p, issue }: { p: Palette; issue: Issue }) {
  return (
    <>
      <tr><td style={{ padding: "26px 32px 20px" }}><Para p={p} size={16}>{issue.observation[0]}</Para></td></tr>
      <Section p={p} paras={issue.position} />
      <Section p={p} paras={issue.reasoning} />
      {issue.figure && <FigureBlock p={p} figure={issue.figure} />}

      {/* The qualification — set apart, because it is the section that
          proves the argument was thought about rather than performed. */}
      <tr>
        <td style={{ padding: "0 32px 22px" }}>
          <div style={{ height: "1px", lineHeight: "1px", fontSize: 0, background: p.rule }}>&nbsp;</div>
          <Spacer h={20} />
          <div style={{ fontFamily: SANS, fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: p.textQuiet }}>
            Where this breaks down
          </div>
          <Spacer h={12} />
          {issue.qualification.map((t, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Spacer h={14} />}
              <Para p={p}>{t}</Para>
            </React.Fragment>
          ))}
        </td>
      </tr>

      <tr>
        <td style={{ padding: "0 32px 26px" }}>
          {issue.close.map((t, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Spacer h={14} />}
              <div style={{ fontFamily: SERIF, fontSize: "18px", lineHeight: 1.55, color: p.text }}>{t}</div>
            </React.Fragment>
          ))}
        </td>
      </tr>

      {issue.ask && <Button p={p} label={issue.ask} pad="0 32px 30px" />}
    </>
  );
}

/* ── Campaign footer ──────────────────────────────────────────────── */

function CampaignFooter({ p, issue }: { p: Palette; issue: Issue }) {
  return (
    <>
      {issue.next && (
        <tr>
          <td style={{ padding: "0 32px 28px" }}>
            <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", background: p.surface, borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 20px" }}>
                    <div style={{ fontFamily: SANS, fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: p.accent }}>
                      Next in the series
                    </div>
                    <Spacer h={8} />
                    <div style={{ fontFamily: SANS, fontSize: "13px", lineHeight: 1.55, color: p.textSoft }}>
                      {issue.next}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}

      <tr>
        <td style={{ padding: "28px 32px", textAlign: "center", borderTop: `1px solid ${p.rule}` }}>
          <img src={p.logoSrc} width={30} height={30} alt="Capital Unique" style={{ display: "inline-block", border: 0 }} />
          <Spacer h={13} />
          <div style={{ fontFamily: SANS, fontSize: "13px", lineHeight: 1.6, color: p.textSoft, maxWidth: "400px", margin: "0 auto" }}>
            Capital, intelligently applied. Principal-led structuring for commercial,
            business-purpose and wholesale scenarios.
          </div>
          <Spacer h={16} />
          <div style={{ fontFamily: SANS, fontSize: "12px", fontWeight: 600, color: p.link }}>
            {[
              { l: "Guides",      href: LINKS.guides },
              { l: "Free tools",  href: LINKS.freeTools },
              { l: "Calculators", href: LINKS.calculators },
              { l: "Contact",     href: LINKS.contact },
            ].map(({ l, href }, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: p.ruleStrong, padding: "0 8px" }}>·</span>}
                <a href={href} style={{ color: p.link, textDecoration: "none" }}>{l}</a>
              </React.Fragment>
            ))}
          </div>
          <Spacer h={20} />
          <div style={{ height: "1px", lineHeight: "1px", fontSize: 0, background: p.rule }}>&nbsp;</div>
          <Spacer h={18} />

          <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.7, color: p.textQuiet }}>
            Capital Unique · ABN 54 695 032 243 · ACN 695 032 243<br />
            Level 26, 1 Bligh Street, Sydney NSW 2000 · PO Box 984, Gosford NSW 2250<br />
            1300 889 789 · hello@capitalunique.com
          </div>
          <Spacer h={14} />

          {/* The three standing compliance lines. One per asset is the
              rule; a proof-led series carries the outcomes line too. */}
          <div style={{ fontFamily: SANS, fontSize: "10px", lineHeight: 1.7, color: p.textQuiet }}>
            General information only — not personal financial, legal or tax advice.<br />
            Capital Unique does not hold an Australian Credit Licence or an Australian
            Financial Services Licence, and does not provide consumer credit. Work is
            limited to commercial, business-purpose and wholesale scenarios.<br />
            Past outcomes do not predict future results. Case references are illustrative,
            anonymised and rounded.
          </div>
          <Spacer h={14} />

          <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.7, color: p.textQuiet }}>
            You are receiving this because you asked to hear from Capital Unique.<br />
            <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Unsubscribe</a>
            <span style={{ padding: "0 6px" }}>·</span>
            <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Update preferences</a>
            <span style={{ padding: "0 6px" }}>·</span>
            <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>View in browser</a>
          </div>
          <Spacer h={12} />
          <div style={{ fontFamily: SANS, fontSize: "11px", color: p.textQuiet }}>
            © 2026 Capital Unique. All rights reserved.
          </div>
        </td>
      </tr>
    </>
  );
}

/* ── Preview chrome ───────────────────────────────────────────────── */

function wordCount(issue: Issue) {
  const all = [...issue.observation, ...issue.position, ...issue.reasoning, ...issue.qualification, ...issue.close].join(" ");
  return all.trim().split(/\s+/).length;
}

function IssueFrame({ issue }: { issue: Issue }) {
  const words = wordCount(issue);
  const inRange = words >= 400 && words <= 700;
  return (
    <div className="rounded-xl border border-border overflow-hidden mb-8">
      <div className="px-3 py-2 bg-background border-b border-border flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-xs text-cu-brandy font-semibold">{issue.id}</span>
        <span className="font-mono text-xs text-muted-foreground opacity-40">·</span>
        <span className="font-mono text-xs text-foreground">{issue.subject}</span>
        <span className="ml-auto flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">{issue.pillar}</span>
          <span
            className={`font-mono text-xs px-1.5 py-0.5 rounded border ${
              inRange
                ? "text-muted-foreground border-border"
                : "text-cu-amber-dark dark:text-cu-amber-light border-cu-amber/40"
            }`}
            title="Newsletter playbook target: 400–700 words"
          >
            {words}w
          </span>
        </span>
      </div>

      <div className="px-3 py-2 bg-muted border-b border-border">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-foreground">Preheader:</span> {issue.preheader}
        </p>
      </div>

      <div style={{ background: P.outer, padding: "28px 20px" }}>
        <table
          role="presentation"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "600px", maxWidth: "100%", margin: "0 auto", background: P.body, borderCollapse: "collapse" }}
        >
          <tbody>
            <CampaignMasthead p={P} issue={issue} />
            <IssueBody p={P} issue={issue} />
            <CampaignFooter p={P} issue={issue} />
          </tbody>
        </table>
      </div>

      <div className="px-3 py-2 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          <span className="text-foreground">Sources:</span> {issue.sources.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}

export function CampaignSection() {
  return (
    <section id="campaign" aria-labelledby="campaign-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Campaigns</p>
        <h2 id="campaign-heading" className="text-foreground mb-3">Eight-week series</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Eight issues to referral partners — brokers, accountants and lawyers — carrying
          the seven topics from the client's existing flyer. Light Inkwell throughout.
          Each issue follows the newsletter playbook's five-part shape: observation,
          position, reasoning, qualification, close. Byline John Codrington, visible date,
          zero or one ask.
        </p>
      </div>

      {/* Audience */}
      <div className="rounded-xl border border-border bg-card p-5 md:p-6 mb-6 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-3">Who this is written to</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Referral partners, not borrowers. The database names this the primary outreach
          audience, and the one recorded case-study origin — an agricultural engagement
          introduced through the owners' legal advisers — is the evidence the channel works.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          They are advisors rather than buyers, so every issue is about a client's scenario
          rather than their own finance needs. They keep a mental shortlist of roughly three
          people per problem. <strong className="text-foreground">The goal of the series is
          to get onto that list</strong> — which is why six of the eight issues carry no ask
          at all.
        </p>
      </div>

      {/* Compliance rewrite — the substitutions, stated openly */}
      <div className="rounded-xl border border-cu-amber-dark/40 dark:border-cu-amber/30 bg-cu-amber/10 p-5 md:p-6 mb-8 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-amber-dark dark:text-cu-amber-light mb-3">
          Four of the flyer's headline phrases could not survive
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The topics all carry across. Several of the labels do not — they are prohibited by
          the database's compliance guardrails or banned-language file, both of which
          override any brief. The substitutions are listed here rather than made quietly.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-xs font-semibold text-foreground align-bottom">Flyer</th>
                <th className="py-2 pr-4 text-xs font-semibold text-foreground align-bottom">Became</th>
                <th className="py-2 text-xs font-semibold text-foreground align-bottom">Why</th>
              </tr>
            </thead>
            <tbody>
              {TOPIC_MAP.map((t, i) => (
                <tr key={i} className="border-b border-border last:border-0 align-top">
                  <td className="py-2.5 pr-4 text-xs text-muted-foreground">{t.flyer}</td>
                  <td className="py-2.5 pr-4 text-xs text-foreground whitespace-nowrap">{t.issue}</td>
                  <td className="py-2.5 text-xs text-muted-foreground leading-relaxed">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule */}
      <div className="mb-10">
        <h3 className="text-foreground mb-2">The schedule</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          Eight issues, in this order. No dates are baked into the templates — the send
          schedule stays yours to set in GoHighLevel, and a resent issue never carries a
          stale date. The playbook's standing cadence for the perpetual newsletter is
          monthly; a finite campaign runs hotter, but the list should drop back to monthly
          once the series ends.
        </p>
        <div className="rounded-xl border border-border overflow-hidden overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2.5 text-xs font-semibold text-foreground">Week</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-foreground">Subject line</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-foreground hidden md:table-cell">Carries</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-foreground hidden lg:table-cell">Pillar</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-foreground">Ask</th>
              </tr>
            </thead>
            <tbody>
              {ISSUES.map((s) => (
                <tr key={s.id} className="border-t border-border">
                  <td className="px-4 py-2.5 text-xs font-mono text-muted-foreground whitespace-nowrap">
                    Week {String(s.week).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-foreground">{s.subject}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground hidden md:table-cell">{s.topic}</td>
                  <td className="px-4 py-2.5 text-xs font-mono text-muted-foreground hidden lg:table-cell">{s.pillar}</td>
                  <td className="px-4 py-2.5 text-xs text-muted-foreground">{s.ask ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What the campaign header/footer add */}
      <div className="rounded-xl border border-border bg-card p-5 md:p-6 mb-10 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-3">
          What the custom-code block buys
        </p>
        <ul className="text-sm text-muted-foreground space-y-2" style={{ lineHeight: 1.6 }}>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">A series progress indicator.</strong> Eight segments in the masthead, filled to the current issue. A subscriber who joins at week five can see they have missed four, which a drag-and-drop builder cannot express.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">A "next in the series" hand-off.</strong> Sets the expectation for the following week and lifts the open rate on it. Absent from the final issue, deliberately.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">A set-apart qualification block.</strong> The playbook calls this the most persuasive section and the one competitors never write. It gets its own rule and label rather than being buried mid-body.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">A figure block with attribution locked to the number.</strong> Compliance requires "indicative" in the same visual block as any figure. Hard-coding it into the component means it cannot be edited away in the builder.</span></li>
        </ul>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          All four are built from table cells and solid hex fills — no flexbox, no border-radius
          dependency, no web fonts required. They survive Outlook.
        </p>
      </div>

      {/* The issues */}
      <div>
        <h3 className="text-foreground mb-2">The eight issues</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-6">
          Each at true 600px, with its subject line, preheader, word count against the
          playbook's 400–700 target, and the database files every claim traces to.
        </p>
        {ISSUES.map((issue) => (
          <IssueFrame key={issue.id} issue={issue} />
        ))}
      </div>
    </section>
  );
}
