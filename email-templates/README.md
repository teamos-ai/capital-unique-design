# Email templates — eight-week campaign

Eight standalone HTML emails, ready to paste into GoHighLevel's HTML editor.

```
email-templates/
  build.mjs        the generator
  html/            the output — paste these
    index.html     local contact sheet, open this to review all eight
    week-01-….html
    …
    week-08-….html
```

## Putting one into GoHighLevel

1. **Marketing → Emails → Templates → New → Blank / Code**, then choose the
   **Custom Code / HTML** element.
2. Open the `.html` file in a text editor, select all, and paste the **entire
   document** — including `<!DOCTYPE>` and `<head>`. Do not paste only the
   `<body>`; the responsive rules and the Outlook fixes live in the head.
3. Set the **subject line** and **preview text** from the table below. They are
   not in the file, because GHL sets both outside the template.
4. Send a test to yourself and to one Outlook address before scheduling.

## Subject lines and preview text

| # | Subject line | Preview text |
|---|---|---|
| 01 | what a decline actually tells you | The file did not fail. The structure did. |
| 02 | speed is not the constraint | Platforms are quick where credit is templated. |
| 03 | the facility that quietly expired | Nobody was watching the expiry date. It ran for months. |
| 04 | a headline rate is not a price | Two facilities, same rate, different cost entirely. |
| 05 | working capital and the wrong instrument | The overdraft extension was never the right tool. |
| 06 | cash out without breaking the senior | Equity release is a covenant question first. |
| 07 | what a credit team re-tests | The feasibility is not the problem. The assumptions are. |
| 08 | our scope, stated plainly | What to send us, and what not to. Mostly the second. |

Subject lines are deliberately lower case and free of numbers, questions and
urgency — the rules are in `08-outreach-and-campaigns/subject-line-bank.md` in
the knowledge base. A preheader is already embedded in each file as a hidden
div; setting GHL's preview-text field as well is belt and braces, and the two
should match.

## Two things to check before the first send

**The merge fields.** The footer uses `{{unsubscribe_link}}` and
`{{message.web_view_url}}`. Confirm both against the field picker in your own
sub-account — GHL's tags vary by version, and some accounts append their own
unsubscribe block, in which case delete that line rather than having two.

**The logo URL.** Both images point at
`raw.githubusercontent.com/teamos-ai/capital-unique-design/…`. That works, but
re-uploading the coin to GHL's media library and swapping the two `src`
attributes is the more durable choice for mail that stays in circulation.

## What is deliberate

- **No dates.** Nothing in the templates pins a send date, so an issue can be
  rescheduled or resent without going stale. The masthead carries `Issue 04 of
  08` and a progress bar instead.
- **Every CTA goes to `/contact`.** Button labels vary; the destination does not.
- **Only three of eight carry a button.** The newsletter playbook allows zero or
  one ask per issue and recommends zero — the audience is referral partners, and
  the goal is to reach their shortlist rather than to convert on the click.
  Every issue still routes to contact through the footer nav, the phone number
  and the email address. If you want a button on all eight, add an `ask` to the
  remaining issues in `issues.ts` and re-run the build.
- **Figures carry their attribution inside the same block as the number.** That
  is a compliance requirement, not a layout choice. Do not separate them.
- **The compliance block in the footer stays.** General-information line, the
  no-ACL/no-AFSL statement, and the past-outcomes line.

## Editing the copy

Do not edit the HTML. The copy lives in
`src/app/components/ds/campaign/issues.ts`, which is also what the design
system renders — so editing there keeps the previews and the templates in
step. Then:

```bash
node email-templates/build.mjs
```

The design-system preview is at **Patterns → Eight-week series**, and shows each
issue with its word count against the playbook's 400–700 band and the knowledge
base files every claim traces to.
