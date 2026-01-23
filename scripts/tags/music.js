/* 
 * hexo theme meow
 * tag plugins: music player
 */

'use strict'

const music = (args, content) => {
  const id = args.length > 0 ? args[0].toString() : "0"
  let playerId = "music-player-" + id;
  const type = args.length > 1 ? args[1] : "";
  const { config: themeCfg } = hexo.theme;
  let scriptContent;

  // if (type == "local" || (!type && !themeCfg.music.meting.api)) {
  //   let musicList = hexo.render.renderSync({ text: content, engine: 'yaml' });
  //   scriptContent = `
  //     document.addEventListener("DOMContentLoaded", () => {
  //       if (!${musicList.length}) return;
  //       const ap_${id} = new APlayer({
  //         container: document.getElementById('${playerId}'),
  //         autoplay: ${themeCfg.music.autoplay},
  //         theme: '${themeCfg.color.light.theme_color || themeCfg.color.dark.theme_color || "#FFB347"}',
  //         loop: '${themeCfg.music.loop}',
  //         order: '${themeCfg.music.order}',
  //         volume: ${themeCfg.music.volume},
  //         lrcType: ${themeCfg.music.lyric ? 3 : 0},
  //         audio: ${JSON.stringify(musicList)}
  //       });
  //     });
  //   `;
  // } else {
  //   let metingParams = hexo.render.renderSync({ text: content, engine: 'yaml' });
  //   let meting_api = `${themeCfg.music.meting.api}?server=${metingParams.server}&type=${metingParams.type}&id=${metingParams.id}&r=${Math.random()}`;
  //   scriptContent = `
  //     document.addEventListener("DOMContentLoaded", () => {
  //       fetch('${meting_api}')
  //         .then(res => res.json())
  //         .then(result => {
  //           if (!result.length) return;
  //           const ap_${id} = new APlayer({
  //             container: document.getElementById('${playerId}'),
  //             autoplay: ${themeCfg.music.autoplay},
  //             theme: '${themeCfg.color.light.theme_color || themeCfg.color.dark.theme_color || "#FFB347"}',
  //             loop: '${themeCfg.music.loop}',
  //             order: '${themeCfg.music.order}',
  //             volume: ${themeCfg.music.volume},
  //             lrcType: ${themeCfg.music.lyric ? 3 : 0},
  //             audio: result
  //           });
  //         });
  //     });
  //   `;
  // }

  if (type == "local" || (!type && !themeCfg.music.meting.api)) {
    let musicList = hexo.render.renderSync({ text: content, engine: 'yaml' });
    scriptContent = `
      const apFn_${id} = () => {
        if (!${musicList.length}) return;
        const ap_${id} = new APlayer({
          container: document.getElementById('${playerId}'),
          autoplay: ${themeCfg.music.autoplay},
          theme: '${themeCfg.color.light.theme_color || themeCfg.color.dark.theme_color || "#FFB347"}',
          loop: '${themeCfg.music.loop}',
          order: '${themeCfg.music.order}',
          volume: ${themeCfg.music.volume},
          lrcType: ${themeCfg.music.lyric ? 3 : 0},
          audio: ${JSON.stringify(musicList)}
        });
      };
      window.apFnList ? window.apFnList.push(apFn_${id}) : window.apFnList = [apFn_${id}];
      document.addEventListener("DOMContentLoaded", apFn_${id})
    `;
  } else {
    let metingParams = hexo.render.renderSync({ text: content, engine: 'yaml' });
    let meting_api = `${themeCfg.music.meting.api}?server=${metingParams.server}&type=${metingParams.type}&id=${metingParams.id}&r=${Math.random()}`;
    scriptContent = `
      const apFn_${id} = () => {
        fetch('${meting_api}')
          .then(res => res.json())
          .then(result => {
            if (!result.length) return;
            const ap_${id} = new APlayer({
              container: document.getElementById('${playerId}'),
              autoplay: ${themeCfg.music.autoplay},
              theme: '${themeCfg.color.light.theme_color || themeCfg.color.dark.theme_color || "#FFB347"}',
              loop: '${themeCfg.music.loop}',
              order: '${themeCfg.music.order}',
              volume: ${themeCfg.music.volume},
              lrcType: ${themeCfg.music.lyric ? 3 : 0},
              audio: result
            });
          });
      };
      window.apFnList ? window.apFnList.push(apFn_${id}) : window.apFnList = [apFn_${id}];
      document.addEventListener("DOMContentLoaded", apFn_${id});
    `;
  }

  return `<div class="music-tag"><div id="${playerId}"></div><script>${scriptContent}</script></div>`;
};

hexo.extend.tag.register('music', music, { ends: true });