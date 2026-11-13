/* Public installer downloads, including updates and repeat downloads. */
(async () => {
  const counter = document.getElementById('download-count');
  if (!counter) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  const assets = new Set();
  let total = 0;

  try {
    // Never show a partial total if pagination or an API request fails.
    for (let page = 1; page <= 20; page++) {
      const response = await fetch(
        `https://api.github.com/repos/Bhuteshwaraya/buildbox/releases?per_page=100&page=${page}`,
        { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer' }
      );
      if (!response.ok) throw new Error('Release count unavailable');
      const releases = await response.json();
      if (!Array.isArray(releases)) throw new Error('Invalid release response');

      for (const release of releases) {
        if (typeof release.draft !== 'boolean') throw new Error('Invalid release');
        if (release.draft) continue;
        if (!Array.isArray(release.assets)) throw new Error('Invalid assets');
        for (const asset of release.assets) {
          if (!/^BuildBox-.+-windows-x64\.exe$/i.test(asset.name)) continue;
          if (!Number.isSafeInteger(asset.id) || !Number.isSafeInteger(asset.download_count)
              || asset.download_count < 0) throw new Error('Invalid download count');
          if (assets.has(asset.id)) continue;
          assets.add(asset.id);
          total += asset.download_count;
          if (!Number.isSafeInteger(total)) throw new Error('Invalid total');
        }
      }

      if (releases.length < 100) {
        counter.textContent = `${total.toLocaleString()} ${total === 1 ? 'download' : 'downloads'}`;
        counter.title = 'Public Windows installer downloads on GitHub, including updates and repeat downloads.';
        return;
      }
    }
    throw new Error('Release list incomplete');
  } catch {
    counter.textContent = 'Downloads unavailable';
    counter.title = 'The GitHub download total could not be loaded.';
  } finally {
    clearTimeout(timeout);
  }
})();
