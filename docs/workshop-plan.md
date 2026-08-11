# Workshop plan

## Session promise

In 45 minutes, participants will move from one small, recurring frustration to
a scoped **tiny tool brief**. They will see that brief become a working local
prototype, then either start their own prototype or improve their brief enough
to use later.

The session is successful even if a participant writes no code. The durable
skill is learning to choose a suitable problem, describe the smallest useful
version, and test what AI helps them create.

The presenter demo should make the non-programmer's role visible: they supply
the purpose, examples, constraints, choices, and tests. AI can supply syntax,
but it cannot decide what is useful or take responsibility for the result.

## Recommended workshop spine

Use one loop throughout the session:

> Notice friction → define the smallest useful change → build or simulate it →
> test it → decide whether to keep, change, or stop.

This is easier to remember than a catalogue of AI products and remains useful
as those products change.

## Learning outcomes

By the end, participants should be able to:

1. identify a recurring frustration small enough for a first prototype;
2. describe its input, useful output, constraints, and a concrete example;
3. ask an AI assistant for an appropriately simple implementation;
4. test the result with a normal case, an edge case, and a failure case; and
5. recognise privacy, reliability, permission, and maintenance boundaries.

## The 45-minute run sheet

| Time | Segment | What happens | Participant outcome |
| --- | --- | --- | --- |
| 0:00–0:04 | Cold open: my browser, my rules | Open a new tab and reveal the finished personal dashboard: greeting, weather, three tasks, and useful links. Contrast it with the default page. Ask, “What would you want this page to do for you?” | Curiosity and an immediately personal example. |
| 0:04–0:08 | The non-programmer's new role | Explain that AI can supply syntax; the participant supplies intent, boundaries, examples, judgement, and tests. The finished tool does not need AI inside it. | Permission to participate without pretending code no longer matters. |
| 0:08–0:12 | From webpage to extension | Show the dashboard's four small files, then two other tiny-tool examples. Explain that the dashboard works first as a local webpage and gains new-tab behaviour from a small Firefox extension wrapper. | The result feels understandable rather than magical or impossibly technical. |
| 0:12–0:18 | Find friction and write a brief | Prompt: “What should a page you see every day remember, show, or help you do?” Also allow any repeated personal frustration. Participants complete the core fields of the tiny tool brief. | Everyone has a candidate dashboard module or other tiny tool. |
| 0:18–0:20 | Pair-and-shrink | Partners explain their idea in 30 seconds. The listener asks, “What could version one leave out?” | Reduced scope and a clearer success condition. |
| 0:20–0:30 | Live build: brief to new tab | Start from the dashboard brief. Show or generate the local page, load the prepared Firefox extension checkpoint, test task persistence, and ask AI for one audience-chosen personal change. | A visible path from plain language to a browser experience, including testing and iteration. |
| 0:30–0:36 | Two-lane participant sprint | Lane A refines and stress-tests the brief. Lane B asks AI to prototype one dashboard tile or other tiny tool as a local webpage. Participants may work in pairs. | A stronger brief or a visible prototype; neither requires extension installation. |
| 0:36–0:40 | Test, do not merely admire | Partners try a normal case, edge case, and “should refuse/fail safely” case. Record one change or one reason not to proceed. | First-hand experience that generated output is a draft. |
| 0:40–0:43 | Honest boundaries | Use weather to show the local/network boundary, inspect the extension's permissions, and disclose Firefox's temporary-installation/signing distinction. | Participants see that permissions, data flows, and deployment are part of building. |
| 0:43–0:45 | Commit and close | Participants write the next 15-minute action: try one example, remove one feature, or abandon it for a stated reason. Share the resource link/QR code. Invite one final question. | A specific next step and permission to stop. |

Treat questions as welcome throughout, but park long or highly technical ones
for after the session. A separate open Q&A block would consume too much of the
hands-on time.

## Opening and closing language

### Suggested opening

> This is not a workshop about building the next big app. It is about the
> little irritations no product team will ever prioritise for you. Today you
> will choose one of yours and make it smaller, clearer, and possibly fixable.

Immediately demonstrate the finished live-demo tool. Do not begin with
definitions, model names, or a biography.

### Suggested closing

> The goal is not to generate more software. It is to gain the power to change
> the small systems around you—and the judgement to know when you should not.

Ask participants to circle one next action on their brief before showing the
final resource link.

## Demo strategy

### Recommended hero demo: My New Tab

Build a personal dashboard that replaces Firefox's new-tab page. The completed
version can include:

- a greeting, date, and time;
- a short to-do list that is saved locally;
- a few personal quick links;
- current weather for a location the user has chosen; and
- one distinctive module from real life, such as a teaching-week indicator,
  project reminder, hobby countdown, or daily intention.

This is an effective non-programmer demo because the change is visual,
personal, and encountered every day. The participant can make meaningful
product decisions without understanding every line of JavaScript.

The build should use two deliberate versions.

#### Version 1: local and dependable

Create a normal local webpage with the greeting, tasks, and links. Keep it to
plain HTML, CSS, and JavaScript, with no framework, build tools, account, or
network connection. This is the first success state and remains useful even if
the extension step fails.

The Firefox wrapper should contain only a small `manifest.json` plus the same
dashboard files. The manifest uses `chrome_url_overrides` to make the bundled
HTML file the new-tab page and requests `storage` only if the dashboard uses
`browser.storage.local`.

#### Version 2: connected, with a visible trade-off

Add weather as a prepared enhancement rather than the first live generation.
Prefer a manually chosen location over requesting precise browser geolocation.
Use a weather service that does not require displaying an API key during the
demo, show attribution where required, request access only to the necessary
host, and make the dashboard continue working when the service is unavailable.

Weather creates the teachable boundary: version 1 stays on the device; version
2 sends a location to another service and now depends on the network and that
service's continued availability.

#### Honest installation note

Firefox can temporarily load an extension from `about:debugging`, which is
appropriate for the live prototype. That temporary extension is removed when
Firefox restarts. Standard Firefox release builds require extensions to be
signed by Mozilla for persistent installation, including self-distributed
extensions.

Do not hide this constraint or lead every participant through developer tools.
Present a practical ladder:

1. use the generated dashboard immediately as a local page;
2. bookmark it or, where browser settings and organisational policy permit,
   set it as a homepage;
3. test the new-tab extension temporarily;
4. only then decide whether learning the signing/distribution step is worth it.

This is an excellent example of an important lesson: generating code can be
easy while deploying and maintaining software still has real friction.

See [Dashboard demo design](dashboard-demo.md) for the detailed live sequence,
scope, prompts, and tests.

### Third gallery example

Show a personally authentic tool from teaching, project work, or a hobby—for
example, a meeting-pack builder that turns a few structured fields into a
consistent agenda and action list. A real, imperfect tool carries more weight
than a polished generic showcase.

For every gallery example, use the same four labels:

1. friction;
2. input;
3. useful output; and
4. boundary or failure.

### Live-demo contract

The live build should demonstrate judgement, not typing speed or model luck.

- Begin from the same completed tiny tool brief participants have.
- Keep a tested starter and finished version on the laptop.
- Have the initial prompt ready to paste, but explain its important clauses.
- Ask first for a local dashboard using plain HTML, CSS, and JavaScript, with
  no dependencies, server, tracking, or network calls.
- Keep prepared local-page, extension, connected-weather, and finished states.
- Generate or modify only one state live. Reveal the next prepared checkpoint
  if generation, copying, or extension loading takes too long.
- Test with prepared synthetic data rather than personal, student, HR, health,
  or organisational data.
- Test that tasks persist when another new tab is opened. Include one deliberate
  edge case and one audience-chosen revision.
- Stop when the stated tests pass. Resist polishing the interface.

The story is not “the AI got it right first time.” The stronger story is “the
brief let us notice what was wrong, ask for one change, and know when to stop.”

## Two participation lanes

Do not split the room into “technical” and “non-technical” people. Present two
equally legitimate ways to use the six-minute sprint.

### Lane A: clarify it

Participants ask an AI assistant to:

- restate their problem and assumptions;
- suggest what version one can omit;
- propose a normal, edge, and safe-failure test; and
- identify data or actions that should remain out of scope.

The output is an improved brief, not code.

### Lane B: try it

Participants ask for the smallest runnable form their approved AI tool can
produce. The default is a single local HTML file with no network access or
external dependencies. They run one synthetic example if their tool and device
make that practical. A dashboard participant should prototype one tile, not an
entire productivity suite. Converting it into an extension is a later step.

People can pair up, switch lanes, or stop at a brief. This prevents account,
device, policy, or confidence differences from becoming failure.

## Boundary check

Use a simple traffic-light model rather than an exhaustive ethics lecture.

### Green: good workshop candidates

- synthetic, public, or low-sensitivity data;
- local and reversible changes;
- output that the user can quickly inspect;
- no automatic sending, purchasing, grading, deleting, or publishing;
- failure is annoying rather than harmful.

### Amber: slow down and investigate

- personal or organisational information;
- API keys, cloud storage, or broad browser permissions;
- output used to inform decisions about other people;
- scraping or automating a service;
- a tool whose failure is hard to notice;
- a dependency on a page, model, or service that may change.

### Red: not a 45-minute prototype

- credentials or secrets pasted into an unapproved service;
- identifiable student, health, HR, client, or research data without an
  approved process;
- autonomous high-stakes decisions;
- automatic deletion, payment, submission, or external communication;
- legal, medical, financial, safety, or assessment outcomes that cannot be
  independently verified.

The key questions are:

1. What data leaves the device, and where does it go?
2. How will I notice a wrong result?
3. What can the tool change or send without another confirmation?
4. Who besides me could be affected?
5. What will break or need maintenance later?

## Facilitation guidance

- Give participants the digital brief before the session and a QR code on the
  first activity slide.
- Use a visible countdown for each activity.
- Read the friction-finding prompt aloud and leave examples on screen.
- Encourage pairs, especially where only one person has an appropriate device
  or AI account.
- Say explicitly that no one should paste work data into a tool unless their
  organisation permits it.
- During the sprint, circulate and help people reduce scope rather than invent
  more features.
- When someone proposes a large system, ask: “What is the smallest useful
  moment inside that system?”
- Ask one or two participants for a brief before/after, not a lengthy report
  back from every table.

## Common traps to avoid

- Building from a blank prompt while the room watches a spinner.
- Requiring participants to install an editor, runtime, browser extension, or
  package manager.
- Implying generated code is safe because it runs once.
- Letting the most technical questions redefine an all-audience workshop.
- Showing only polished successes; one contained failure teaches the method.
- Asking participants for ideas before giving concrete friction prompts.
- Treating “I decided not to build it” as an unsuccessful outcome.
- Ending with a large list of tools instead of one memorable loop and next
  action.

## Preparation checklist

### Content

- [ ] Select three authentic examples and express each as friction, input,
  output, and boundary.
- [ ] Finalise the personal dashboard brief and its normal, edge, persistence,
  permission, and offline-weather tests.
- [ ] Prepare one intentional flaw or missing requirement for the live
  iteration.
- [ ] Build the local-page, Firefox-extension, weather, audience-change, and
  finished dashboard checkpoints.
- [ ] Review every requested extension permission and the current weather API
  terms, limits, data flow, and attribution requirements.
- [ ] Make the traffic-light boundary slide.
- [ ] Decide on one final question and the 15-minute commitment prompt.

### Participant materials

- [ ] Publish the tiny tool brief as an accessible webpage and printable PDF.
- [ ] Add the Lane A and Lane B prompts to the handout.
- [ ] Add a short “save and open a local HTML file” guide.
- [ ] Add the optional Firefox prototype prompt and clearly label temporary
  versus persistent installation.
- [ ] Provide synthetic tasks, expected behaviour, and test cases.
- [ ] Put a short, memorable link alongside every QR code.

### Demo resilience

- [ ] Keep starter, generated, deliberately flawed, and finished versions
  locally.
- [ ] Test on the exact presenter laptop and browser.
- [ ] Use large fonts and increase browser zoom before the room fills.
- [ ] Record a short screen capture or screenshots of the successful path.
- [ ] Download or print the brief for an internet outage.
- [ ] Avoid live API keys and sign-in flows.
- [ ] Bring the appropriate display adapter and a local copy of all media.
- [ ] Rehearse a 30-minute compressed version in case the session starts late.

## Rehearsal targets

- The opening tool demonstration lands within the first 60 seconds.
- The example gallery finishes by minute 12.
- The live build takes no more than 10 minutes including one test and revision.
- Instructions for each participant activity take under 45 seconds.
- At least 12 minutes of the session consist of participants thinking, writing,
  discussing, testing, or building.
- The boundary discussion and closing are not sacrificed when an earlier
  segment runs long.

If time slips, shorten the example gallery and use the prepared demo result.
Do not take time from participant testing or the safety discussion.

## Decisions to make next

1. Choose the three authentic examples, especially the teaching/project/hobby
   dashboard module that will make the hero example feel genuinely personal.
2. Confirm the version-one dashboard scope and which prepared feature the
   audience will be allowed to choose live.
3. Decide which AI assistant will be used for the presenter demo, while keeping
   participant instructions product-neutral.
4. Build the five dashboard checkpoints and exercise the prepared tests.
5. Turn this run sheet into a minimal slide storyboard and facilitator notes.
