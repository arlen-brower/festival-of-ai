# My tiny tool brief

You do not need to write code to complete this brief. Use synthetic or
non-sensitive examples during the workshop.

## 1. Notice the friction

What did you copy, paste, reformat, look up, calculate, rename, or repeatedly
click more than twice last week?

> I repeatedly...

## 2. Describe one small job

**This tool is for:** me / another person: _________________________________

**When this happens:**

> 

**I will give it this input:**

> 

**It will give me this useful output:**

> 

## 3. Make version one tiny

**Version one must:**

> 

**Version one will not:**

> 

**I will know it is useful when:**

> 

## 4. Give one concrete example

Use made-up, public, or low-sensitivity data.

**Example input:**

> 

**Expected output:**

> 

## 5. Check the boundaries

- What data would leave my device, and where would it go?
- How will I notice a wrong result?
- Can it change, delete, publish, purchase, submit, or send anything?
- Who besides me could be affected?
- What should it refuse to do?

**One important boundary:**

> 

## 6. Test before polishing

**Normal case — the everyday example:**

> 

**Edge case — blank, duplicated, unusually long, or oddly formatted input:**

> 

**Safe-failure case — what should it reject, leave unchanged, or ask me to
confirm?**

> 

## 7. Choose the next 15-minute action

- [ ] Remove one feature from the brief.
- [ ] Ask an AI assistant to challenge the brief.
- [ ] Try the normal example in a prototype.
- [ ] Investigate a privacy, permission, or policy question first.
- [ ] Use an existing feature instead of building this.
- [ ] Stop: this is not useful or safe enough to pursue.

## Optional prompt: refine the brief (Lane A)

```text
Act as a cautious prototyping partner. I am designing a tiny personal tool,
not a commercial product. Read my brief below.

1. Restate the job in one sentence.
2. Identify assumptions or vague words that would make the result hard to test.
3. Suggest what version one can omit.
4. Propose one normal test, one edge-case test, and one safe-failure test using
   synthetic data.
5. Flag privacy, permission, reliability, or maintenance concerns.
6. Recommend the simplest suitable form: an existing feature, reusable prompt,
   spreadsheet formula, template, single local webpage, script, or extension.
Do not write code yet. Ask at most one essential question.

MY BRIEF
[Paste the brief here. Do not include sensitive or confidential information.]
```

## Optional prompt: try a local prototype (Lane B)

```text
Help me build the smallest useful version of the brief below for personal use.
Create one self-contained HTML file using plain HTML, CSS, and JavaScript. It
must work locally when I open the file in a browser. Use no server, packages,
external libraries, analytics, network requests, accounts, or API keys. Keep
the interface accessible and simple.

Before the code, restate the input, output, and assumptions briefly. Then give
the complete file and simple save/open instructions. Include three manual test
cases: normal, edge, and safe failure. Do not add features that are not in the
brief. If this form is unsuitable or unsafe, explain why instead of forcing it.

MY BRIEF
[Paste the brief here. Use only synthetic or permitted data.]
```

If your idea is one part of a personal dashboard, ask for just that tile in the
first prototype—for example, three tasks, today's intention, a countdown, or a
small set of useful links. A normal local webpage is a successful first step;
it can be wrapped as a browser extension after its behaviour has been tested.

## Optional prompt: turn a tested dashboard into a Firefox prototype

```text
Turn my tested local dashboard into a minimal Firefox Manifest V3 extension
that replaces the new-tab page. Keep the existing behaviour and plain HTML,
CSS, and JavaScript. Use no framework, build tools, remote scripts, analytics,
or unrequested features. Request only permissions that are strictly necessary
and explain each permission in plain language.

Give the complete files and instructions for temporary installation through
about:debugging. Clearly explain that temporary installation ends when Firefox
restarts and that persistent installation in standard Firefox requires Mozilla
signing. Include a test that confirms saved information appears in a second
new tab.

MY TESTED DASHBOARD
[Paste or attach the permitted files here.]
```

## Pair check

Explain your idea in 30 seconds. Your partner asks:

> What could version one leave out?
