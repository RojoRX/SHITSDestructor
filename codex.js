const CDP = require('chrome-remote-interface');
const fs = require('fs');

(async function() {
  const client = await CDP();
  const { Network, Page, Runtime } = client;

  for (let i = 0; i < 50; i++) {
    console.log('==> Clearing cache and cookies... 🧹');
    await Network.clearBrowserCache();
    await Network.clearBrowserCookies();
    console.log('==> Cache and cookies cleared successfully. ✔️');

    console.log('==> Initiating hacking sequence... ⚠️');
    await Page.navigate({url: 'https://stereohitsradio.com/chart/stereo-top-bol/'});

    console.log('==> Waiting for page to load... ⏳');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('==> Page loaded successfully. ✔️');

    console.log('==> Reloading page... 🔁');
    await Page.reload();
    console.log('==> Page reloaded successfully. ✔️');

    console.log('==> Waiting for page to load again... ⏳');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('==> Page loaded successfully again. ✔️');

    console.log('==> Hacking the page and clicking on element... 🚨');
    try {
      await Runtime.evaluate({
        expression: `document.querySelector('#chartvoting10 a.proradio-chartvote-link.not-collapse.qt-up').click();`
      });
      console.log(`==> Element clicked successfully. ✔️`);
    } catch (error) {
      console.error(`==> Error clicking on element: ${error}`);
    }

    console.log(`==> Hacking sequence completed successfully. ✅`);
  }

  await client.close();
  console.log(`==> Connection closed successfully. 🚪`);
})();
