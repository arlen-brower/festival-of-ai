# Prepared demo checkpoints

These are deliberately boring, self-contained Firefox WebExtensions. They use
plain HTML, CSS, and JavaScript, require no build step, and do not load remote
scripts or packages.

| Folder | What it demonstrates | Deliberate state |
| --- | --- | --- |
| `00-opendyslexic` | A tiny extension can change how ordinary websites feel. | Complete trivial example. |
| `01-dashboard-first-pass` | A useful new-tab dashboard can be only four files. | **Contains one intentional bug:** blank tasks are accepted. |
| `02-dashboard-fixed` | A focused request can fix one observed failure. | Rejects empty and whitespace-only tasks. |
| `03-dashboard-with-intention` | One contained feature can be added without rebuilding everything. | Adds a locally saved “today's intention”. |

## Load a checkpoint in Firefox

1. Open `about:debugging`.
2. Choose **This Firefox**.
3. Choose **Load Temporary Add-on**.
4. Select the checkpoint's `manifest.json`.

Disable or remove the current dashboard checkpoint before loading another one;
only one extension should replace the new-tab page at a time. Temporary
extensions disappear when Firefox restarts.

## Suggested no-AI demo sequence

1. Load `00-opendyslexic`, then open its `sample-page.html` or any ordinary
   website. Point out that the manifest names where the CSS is allowed to run,
   while the CSS makes the actual change.
2. Load `01-dashboard-first-pass`. Add a normal task, then add a task made only
   of spaces. The blank row is the intentional failure.
3. Swap to `02-dashboard-fixed`. Repeat the whitespace test and show the error
   message. Add a normal task, open a second new tab, and confirm persistence.
4. Swap to `03-dashboard-with-intention`. Save an intention, open another new
   tab, and confirm that both the intention and tasks remain.

Each dashboard checkpoint has a different extension ID, so its local storage
is isolated from the other checkpoints. The quick links leave the dashboard
only when clicked; the dashboard itself makes no network requests.

## Source and licence notes

The bundled OpenDyslexic font is distributed under the SIL Open Font License
1.1. Its licence text is in `00-opendyslexic/OFL.txt`. The upstream project is
<https://github.com/antijingoist/opendyslexic>.

Firefox implementation references:

- <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts>
- <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides>
- <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local>
- <https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/>
