/* 
 * hexo theme meow
 * tag plugins: fiction (meta, summary, note)
 */

'use strict'

const fictionMeta = (args, content) => {
  let result = "";
  const metaContent = hexo.render.renderSync({ text: content, engine: 'yaml' });
  const { config: themeCfg } = hexo.theme;

  let info = "";
  let base = "";
  let element = "";
  let addition = "";

  let metaRating = Number(metaContent.rating);
  if (Number.isNaN(metaRating) || (!Number.isInteger(metaRating) || metaRating < 0 || metaRating > 3)) {
    console.warn(`Fiction Meta: rating(${metaRating}) invalid!`);
    metaRating = null;
  }
  if (metaRating != null) {
    addition += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.rating}</div><div class="fmeta-rating" frating="${metaRating}">${themeCfg.fiction.rating[metaRating]}</div></div>`;
  }

  if (metaContent.warning) {
    addition += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.warning}</div><div class="fmeta-warning">${metaContent.warning}</div></div>`;
  }

  let infoShapeFlag = addition.length > 0 ? "clip" : "";

  let metaType = metaContent.type ? metaContent.type : "Undefined";
  base += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.type}</div><div>${metaType}</div></div>`;

  if (metaContent.fandom) {
    base += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.fandom}</div><div>${metaContent.fandom}</div></div>`;
  }

  let metaStatus = metaContent.status;
  if (metaStatus && metaStatus != "Y" && metaStatus != "N") {
    console.warn(`Fiction Meta: status(${metaStatus}) invalid!`);
    metaStatus = null;
  }
  if (metaStatus) {
    base += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.status}</div><div>${themeCfg.fiction.status[metaStatus]}</div></div>`;
  }

  if (metaContent.relationship) {
    element += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.relationship}</div><div>${metaContent.relationship}</div></div>`;
  }

  if (metaContent.character) {
    element += `<div class="fmeta-item"><div class="fmeta-item-attr">${themeCfg.fiction.attribute.character}</div><div>${metaContent.character}</div></div>`;
  }

  info = `<div class="fmeta-info" ${infoShapeFlag}><div class="fmeta-info-title">${themeCfg.fiction.attribute.card_title}</div><div><div class="fmeta-base">${base}</div>`;
  if (element.length > 0) {
    info += `<div class="fmeta-element">${element}</div>`;
  }
  info += "</div></div>";
  result += info;

  if (addition.length > 0) {
    addition = `<div class="fmeta-addition"><div class="fmeta-addition-title">${themeCfg.fiction.attribute.addition_title}</div><div>${addition}</div></div>`;
    result += addition;
  }

  return `<div class="fiction-meta">${result}</div>`;
};

hexo.extend.tag.register('fmeta', fictionMeta, { ends: true });