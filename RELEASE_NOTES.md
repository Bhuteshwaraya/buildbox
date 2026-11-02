# BuildBox 0.1.0-preview.1

First public Windows preview · 2 November 2026

BuildBox is a local Ardeos combat simulator for FELLOWSHIP. This first release bundles the builder, supported simulation paths and Learning tools into a per-user Windows installation.

## Included in this batch

- Character choices, relic selection and locks, scalable talent cards, gems, and explicit Enchant counts and ranges.
- Separate fight and simulation settings, existing-rotation testing and rotation search, work estimates, and adjustable computer usage controls.
- Build reports, low/typical/high replays, timelines, damage and buff views for supported simulations.
- Help mouse-wheel scrolling, default borderless fullscreen and a saved windowed option.
- Exit handling that waits briefly for a close acknowledgement and rejects late activity messages. Reordered-message and lifecycle checks pass in isolation; native closure is still part of first-release acceptance.
- Local Windows setup with bundled runtimes, separate saved work, backups, repair handling and optional private problem reporting.

## Install and update

**Windows 11 on an Intel/AMD 64-bit PC and Google Chrome are required.** Download `BuildBox-0.1.0-preview.1-windows-x64.exe` below, review the setup agreement and install for your account. Open BuildBox from the Start menu; a desktop shortcut is optional. No global Python/Node or other developer tools are needed.

**This preview is unsigned.** Windows may show an unknown-publisher warning or block the installer. If blocked, stop; do not disable Windows protections. Download only from this repository's releases or [the official page](https://bhuteshwaraya.github.io/buildbox/).

Updates are manual: close BuildBox, read the next release's notes, download its installer and run it normally. Saved work is kept separately and backed up during updates. Uninstall keeps saves and backups. Automatic update installation is not enabled. Keep your own backup of important work.

## Known limits

- An early preview with limited hardware testing, not a broadly certified Windows release. Other operating systems and ARM devices are not qualified.
- The latest package passes isolated installer-rule, file-integrity, recovery and lifecycle checks. Its complete public download/install/start/close journey still needs its first live acceptance test.
- GPU assistance is optional and limited to supported work. CPU limits control worker concurrency, not an exact whole-PC percentage.
- Simulation results depend on supported mechanics and declared assumptions. They do not prove game accuracy or a global best build. A mechanics update may make old evidence unsuitable for a new comparison.
- The website is the download/update entry point. Simulations run in the installed local app.

## Privacy

Builds and results stay local. Small private problem reports are off until you choose to send them; review the controls and disclosure in Help. They exclude builds, saves, account details and local file paths. No installation analytics are added in this preview. GitHub's hosting/download processing and optional Ko-fi donations are separate.

No new fights or mechanics changes were introduced for this packaging batch. Development history, personal profiles and private records are not distributed.

[Optional support on Ko-fi](https://ko-fi.com/bhuteshwaraya) · [Third-party notices](https://bhuteshwaraya.github.io/buildbox/THIRD-PARTY-NOTICES.txt)
