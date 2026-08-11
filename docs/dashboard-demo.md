# Dashboard hero demo

## The story

The demo is not “watch a programmer make an extension.” It is:

> I see this page many times a day. I described how I wanted it to serve me,
> AI helped produce the unfamiliar syntax, and I remained responsible for the
> choices, permissions, and tests.

Open with the finished dashboard before showing any files or prompts.

## Scope for the first version

The smallest dependable dashboard has:

- a friendly greeting, current date, and current time;
- three visible tasks, with add, complete, and delete actions;
- task data saved locally;
- three editable or clearly configured quick links;
- keyboard-accessible controls and visible focus states; and
- a readable empty state.

It does not have accounts, cloud sync, AI chat, notifications, calendars,
automatic location, drag-and-drop, themes, analytics, or a framework.

Keep the extension to four main files:

```text
my-new-tab/
├── manifest.json
├── dashboard.html
├── dashboard.css
└── dashboard.js
```

Optional icons can be added after the workshop. Their absence should not block
the prototype.

## Ten-minute live sequence

### 0:00–1:00 — Show the brief

Display the completed tiny tool brief. Point to the example input, expected
behaviour, “will not” list, and tests. Say that these are the parts a
non-programmer cannot delegate away.

### 1:00–3:00 — Ask for the smallest implementation

Paste the prepared build prompt. Explain three clauses while the AI works:

- ordinary browser files, not a framework;
- local storage and minimum permissions; and
- no unrequested features.

If the output is not ready promptly, open the prepared checkpoint. Waiting is
not the lesson.

### 3:00–5:00 — Make the unfamiliar structure legible

Show the four filenames, not a scrolling wall of code. Explain them in plain
language:

- the manifest tells Firefox what the folder is allowed to do;
- HTML is what is on the page;
- CSS is how it looks; and
- JavaScript is how it behaves and remembers tasks.

Open `manifest.json` long enough to show the new-tab override and requested
permissions. Do not teach JSON syntax.

### 5:00–6:30 — Load the prepared extension

In Firefox, open `about:debugging`, choose **This Firefox**, select **Load
Temporary Add-on**, and select `manifest.json`. Explain that this is a testing
route, not permanent installation.

Keep the extension preloaded in a second browser profile as a fallback.

### 6:30–8:00 — Test behaviour

Add a task, open another new tab, and confirm it remains. Try adding a blank
task and confirm it is rejected without breaking the page. These tests came
from the brief, not from knowing JavaScript.

### 8:00–9:30 — Let the room customise it

Offer two or three contained choices and take a quick vote:

- show a “today's intention” prompt;
- highlight the top task; or
- add a countdown to a chosen date.

Ask AI for only that change. Use the prepared changed version if necessary.
Reload the extension and repeat the relevant test.

### 9:30–10:00 — Name the method

Recap: brief, smallest build, inspect permissions, test, one change, stop. The
audience did not need to understand every line to make consequential decisions
about the tool.

## Prepared build prompt

```text
Help me create a small Firefox extension for personal use. It replaces the new
tab page with a personal dashboard.

Version one must show a greeting, current date and time, a to-do list with add,
complete, and delete actions, and three quick links. Tasks must persist locally
when I open another new tab. Blank tasks must not be added.

Use a Firefox Manifest V3 WebExtension with plain HTML, CSS, and JavaScript.
Use no framework, build step, packages, external libraries, remote scripts,
analytics, accounts, API keys, or network requests. Request only permissions
that are required. Keep JavaScript in a separate file so it works with the
extension content security policy. Make controls keyboard accessible and make
focus visible.

First restate the scope and list the files you will create. Then create the
complete files. Explain each file in one plain-language sentence. Finally give
manual instructions for temporarily loading it in Firefox and these tests:
normal use, a blank task, and persistence in a second new tab. Do not add
features I did not request.
```

## Prepared test cases

1. **Normal:** Add “Send project update”, mark it complete, and open another
   new tab. It remains present and complete.
2. **Edge:** Submit an empty task and a task containing only spaces. Neither is
   added and the dashboard continues to work.
3. **Persistence:** Add two tasks, reload the extension, and open a new tab.
   Both tasks remain until explicitly deleted.
4. **Permission check:** Version 1 asks for no access to browsing history,
   tabs, all websites, geolocation, clipboard, downloads, or notifications.
5. **Safe connected failure:** With the network offline, the weather tile says
   it is unavailable while tasks, links, date, and time still work.

## Weather as the honest-reflection moment

Reveal a prepared weather tile after the local version works. Ask the room:

> What changed besides the screen?

Draw out these answers:

- a chosen location now leaves the extension;
- a third-party service is involved;
- a new host permission may be needed;
- the result can be stale or wrong;
- attribution or usage terms may apply; and
- offline behaviour now matters.

Avoid requesting automatic geolocation in the workshop version. Let the user
choose a city or coarse location, store it locally, and show which service is
queried. Open-Meteo is a possible demonstration service because its public
non-commercial API does not require an API key, but its current licence, usage
limits, attribution requirements, and API documentation must be checked during
implementation.

## Deployment ladder

Be precise about what participants can take away:

- **Immediate:** save and open the dashboard as a local webpage.
- **Convenient:** bookmark it or, where settings and organisational policy
  permit, set it as a homepage.
- **Prototype:** load the folder temporarily as a Firefox extension.
- **Persistent extension:** package it and submit it for Mozilla signing,
  publicly listed or unlisted/self-distributed.

Temporary installation lasts only until Firefox is restarted. Standard Firefox
release builds do not persist unsigned extensions. This is a deployment rule,
not a failure of the participant or their prompt.

## Presenter fallback states

Keep these folders locally and label them clearly:

1. `01-local-dashboard`
2. `02-firefox-extension`
3. `03-with-weather`
4. `04-audience-change`
5. `99-finished`

Also keep screenshots or a short recording of loading the extension, adding a
task, opening a new tab, and showing the weather failure state.

## Official implementation references

- [Firefox `chrome_url_overrides`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [Firefox extension permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [Firefox local extension storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local)
- [Temporary extension installation](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Firefox add-on signing](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox)
- [Signing and distribution overview](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [Open-Meteo API documentation](https://open-meteo.com/en/docs)
