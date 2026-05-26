import vocabulary from "../data/vocabulary";

const getHiragana = (text: string) => {
  if (!text) return "";

  if (text.includes(",")) {
    const parts = text.split(",");

    let result = "";

    if (parts.length >= 5) {
      result = parts[1];
    } else {
      result = parts[0].replace(/\[\d\]/g, "");
    }

    return result
      .replace(/\s/g, "")
      .replace(/ー/g, "")
      .replace(/[・]/g, "")
      .trim();
  }

  const match = text.match(/（(.*?)）/);

  if (match) {
    return match[1]
      .split("/")[0]
      .replace(/\s/g, "")
      .replace(/ー/g, "")
      .replace(/[・]/g, "")
      .trim();
  }

  return text.replace(/\s/g, "").replace(/ー/g, "").replace(/[・]/g, "").trim();
};

export const shitoriWords = Object.values(vocabulary)
  .flat()
  .map((item: any) => getHiragana(item.word))
  .filter(Boolean)
  .filter((word) => /^[ぁ-ん]+$/.test(word));
