/* ─────────────────────────────────────────────────────────────────────
   Campaign issue → standalone email HTML.

   The single producer of the shipped markup. Two callers:

     • email-templates/build.mjs — writes email-templates/html/*.html
     • CampaignSection.tsx       — the "Copy HTML" buttons

   Because both go through here, the file on disk and the string on the
   clipboard are always the same document, and neither can drift from the
   copy in issues.ts.

   Pure strings only — no React, no bundler asset imports — so it runs
   under plain Node as well as in the browser.
───────────────────────────────────────────────────────────────────── */

import { COLORS, SERIF, SANS, LINKS, LOGO_ABS, MERGE } from "../email/tokens";
import type { Issue, Figure } from "./issues";

const C = COLORS.light;          /* the campaign is locked to light Inkwell */
const LOGO = LOGO_ABS.light;

const esc = (s: string) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const sp = (h: number) =>
  `<div style="height:${h}px;line-height:${h}px;font-size:0;">&nbsp;</div>`;

/* ── Blocks ───────────────────────────────────────────────────────── */

function progress(week: number, total: number) {
  const cells = Array.from({ length: total }, (_, i) => {
    const fill = i < week ? C.accent : C.ruleStrong;
    const br = i < total - 1 ? `border-right:2px solid ${C.body};` : "";
    return `<td width="12.5%" height="3" style="width:12.5%;height:3px;line-height:3px;font-size:0;background:${fill};${br}">&nbsp;</td>`;
  }).join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;"><tr>${cells}</tr></table>`;
}

function masthead(issue: Issue, total: number) {
  return `
      <tr>
        <td height="3" style="height:3px;line-height:3px;font-size:0;background:${C.accent};">&nbsp;</td>
      </tr>
      <tr>
        <td class="cu-pad" style="padding:24px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
            <tr>
              <td valign="middle">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td valign="middle" style="padding-right:11px;">
                      <img src="${LOGO}" width="28" height="28" alt="Capital Unique" style="display:block;border:0;outline:none;text-decoration:none;" />
                    </td>
                    <td valign="middle" style="font-family:${SERIF};font-size:17px;font-weight:600;color:${C.text};white-space:nowrap;">capital unique</td>
                  </tr>
                </table>
              </td>
              <td valign="middle" align="right" style="text-align:right;font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${C.textQuiet};white-space:nowrap;">
                Issue ${String(issue.week).padStart(2, "0")} of ${String(total).padStart(2, "0")}
              </td>
            </tr>
          </table>
          ${sp(18)}
          ${progress(issue.week, total)}
          ${sp(22)}
        </td>
      </tr>
      <tr>
        <td class="cu-pad" style="padding:0 32px 26px;border-bottom:1px solid ${C.rule};">
          <div style="font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${C.accent};">${esc(issue.eyebrow)}</div>
          ${sp(12)}
          <div class="cu-h1" style="font-family:${SERIF};font-size:27px;font-weight:600;line-height:1.22;letter-spacing:-0.012em;color:${C.text};">${esc(issue.headline)}</div>
          ${sp(14)}
          <div style="font-family:${SANS};font-size:12px;letter-spacing:0.04em;color:${C.textQuiet};">John Codrington</div>
        </td>
      </tr>`;
}

const paras = (list: string[], size = 15) =>
  list
    .map(
      (t, i) =>
        `${i > 0 ? sp(14) : ""}<div style="font-family:${SANS};font-size:${size}px;line-height:1.68;color:${C.textSoft};">${esc(t)}</div>`
    )
    .join("");

function figureBlock(f: Figure) {
  return `
      <tr>
        <td class="cu-pad" style="padding:6px 32px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:${C.surface};border-collapse:collapse;">
            <tr>
              <td style="padding:20px 22px;">
                <div style="width:28px;height:2px;line-height:2px;font-size:0;background:${C.accent};">&nbsp;</div>
                ${sp(14)}
                <div style="font-family:${SERIF};font-size:26px;font-weight:600;line-height:1.1;letter-spacing:-0.015em;color:${C.text};">${esc(f.value)}</div>
                ${sp(8)}
                <div style="font-family:${SANS};font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${C.textSoft};line-height:1.45;">${esc(f.label)}</div>
                ${sp(10)}
                <div style="font-family:${SANS};font-size:11px;line-height:1.55;color:${C.textQuiet};">${esc(f.note)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
}

function button(label: string) {
  return `
      <tr>
        <td class="cu-pad" align="center" style="padding:0 32px 30px;text-align:center;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;border-collapse:separate;">
            <tr>
              <td align="center" bgcolor="${C.btnBg}" style="background:${C.btnBg};border-radius:6px;padding:14px 30px;text-align:center;mso-padding-alt:14px 30px;">
                <a href="${LINKS.contact}" target="_blank" style="font-family:${SANS};font-size:15px;font-weight:600;color:${C.btnText};text-decoration:none;display:inline-block;letter-spacing:0.01em;">${esc(label)}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
}

function bodyBlocks(issue: Issue) {
  let h = "";
  h += `<tr><td class="cu-pad" style="padding:26px 32px 20px;">${paras(issue.observation, 16)}</td></tr>`;
  h += `<tr><td class="cu-pad" style="padding:0 32px 20px;">${paras(issue.position)}</td></tr>`;
  h += `<tr><td class="cu-pad" style="padding:0 32px 20px;">${paras(issue.reasoning)}</td></tr>`;
  if (issue.figure) h += figureBlock(issue.figure);

  h += `
      <tr>
        <td class="cu-pad" style="padding:0 32px 22px;">
          <div style="height:1px;line-height:1px;font-size:0;background:${C.rule};">&nbsp;</div>
          ${sp(20)}
          <div style="font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${C.textQuiet};">Where this breaks down</div>
          ${sp(12)}
          ${paras(issue.qualification)}
        </td>
      </tr>`;

  h += `<tr><td class="cu-pad" style="padding:0 32px 26px;">${issue.close
    .map((t, i) => `${i > 0 ? sp(14) : ""}<div style="font-family:${SERIF};font-size:18px;line-height:1.55;color:${C.text};">${esc(t)}</div>`)
    .join("")}</td></tr>`;

  if (issue.ask) h += button(issue.ask);
  return h;
}

function footer(issue: Issue) {
  const nav = [
    ["Guides", LINKS.guides],
    ["Free tools", LINKS.freeTools],
    ["Calculators", LINKS.calculators],
    ["Contact", LINKS.contact],
  ]
    .map(
      ([l, href], i) =>
        `${i > 0 ? `<span style="color:${C.ruleStrong};padding:0 8px;">·</span>` : ""}<a href="${href}" target="_blank" style="color:${C.accent};text-decoration:none;">${l}</a>`
    )
    .join("");

  const next = issue.next
    ? `
      <tr>
        <td class="cu-pad" style="padding:0 32px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:${C.surface};border-collapse:collapse;">
            <tr>
              <td style="padding:16px 20px;">
                <div style="font-family:${SANS};font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${C.accent};">Next in the series</div>
                ${sp(8)}
                <div style="font-family:${SANS};font-size:13px;line-height:1.55;color:${C.textSoft};">${esc(issue.next)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `${next}
      <tr>
        <td class="cu-pad" align="center" style="padding:28px 32px;text-align:center;border-top:1px solid ${C.rule};">
          <img src="${LOGO}" width="30" height="30" alt="Capital Unique" style="display:inline-block;border:0;outline:none;text-decoration:none;" />
          ${sp(13)}
          <div style="font-family:${SANS};font-size:13px;line-height:1.6;color:${C.textSoft};max-width:400px;margin:0 auto;">Capital, intelligently applied. Principal-led structuring for commercial, business-purpose and wholesale scenarios.</div>
          ${sp(16)}
          <div style="font-family:${SANS};font-size:12px;font-weight:600;color:${C.accent};">${nav}</div>
          ${sp(20)}
          <div style="height:1px;line-height:1px;font-size:0;background:${C.rule};">&nbsp;</div>
          ${sp(18)}
          <div style="font-family:${SANS};font-size:11px;line-height:1.7;color:${C.textQuiet};">
            Capital Unique · ABN 54 695 032 243 · ACN 695 032 243<br />
            Level 26, 1 Bligh Street, Sydney NSW 2000 · PO Box 984, Gosford NSW 2250<br />
            1300 889 789 · <a href="mailto:hello@capitalunique.com" style="color:${C.textQuiet};text-decoration:underline;">hello@capitalunique.com</a>
          </div>
          ${sp(14)}
          <div style="font-family:${SANS};font-size:10px;line-height:1.7;color:${C.textQuiet};">
            General information only — not personal financial, legal or tax advice.<br />
            Capital Unique does not hold an Australian Credit Licence or an Australian Financial Services Licence, and does not provide consumer credit. Work is limited to commercial, business-purpose and wholesale scenarios.<br />
            Past outcomes do not predict future results. Case references are illustrative, anonymised and rounded.
          </div>
          ${sp(14)}
          <div style="font-family:${SANS};font-size:11px;line-height:1.7;color:${C.textQuiet};">
            You are receiving this because you asked to hear from Capital Unique.<br />
            <a href="${MERGE.unsubscribe}" style="color:${C.textQuiet};text-decoration:underline;">Unsubscribe</a>
            <span style="padding:0 6px;">·</span>
            <a href="${MERGE.preferences}" style="color:${C.textQuiet};text-decoration:underline;">Update preferences</a>
            <span style="padding:0 6px;">·</span>
            <a href="${MERGE.browser}" style="color:${C.textQuiet};text-decoration:underline;">View in browser</a>
          </div>
          ${sp(12)}
          <div style="font-family:${SANS};font-size:11px;color:${C.textQuiet};">© Capital Unique. All rights reserved.</div>
        </td>
      </tr>`;
}

/* ── The document ─────────────────────────────────────────────────── */

export function renderIssueHtml(issue: Issue, total: number): string {
  return `<!DOCTYPE html>
<html lang="en-AU" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" />
<!-- Declared light-only so Gmail and Outlook.com do not force-invert an
     already-light design. -->
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${esc(issue.subject)}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<style type="text/css">
  body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
  table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
  img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:none;text-decoration:none;}
  body{margin:0;padding:0;width:100%!important;}
  a{color:${C.accent};}
  /* Outlook ignores webfonts and falls back to Georgia / Helvetica,
     which is what most subscribers will actually see. */
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Public+Sans:wght@400;600&display=swap');
  @media only screen and (max-width:620px){
    .cu-wrap{width:100%!important;}
    .cu-pad{padding-left:20px!important;padding-right:20px!important;}
    .cu-h1{font-size:23px!important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.outer};">
<!-- Inbox preview line. Padded so the client does not pull masthead text
     in behind it. -->
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${C.outer};">
  ${esc(issue.preheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:${C.outer};border-collapse:collapse;">
  <tr>
    <td align="center" style="padding:24px 12px;">
      <table role="presentation" class="cu-wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:${C.body};border-collapse:collapse;">
${masthead(issue, total)}
${bodyBlocks(issue)}
${footer(issue)}
      </table>
    </td>
  </tr>
</table>
</body>
</html>
`;
}

/* Filename used both on disk and in the copy-confirmation toast. */
export function issueFilename(issue: Issue): string {
  const slug = issue.subject.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `week-${String(issue.week).padStart(2, "0")}-${slug}.html`;
}
