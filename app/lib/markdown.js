// 文章用的最小 Markdown:标题(##、###)、段落、无序 / 有序列表、围栏代码、引用、分隔线,行内的 `code`、**粗**、*斜*、
// [链接](url)。不走 dangerouslySetInnerHTML,直接拼 React 元素,所以文章里写不了 HTML —— 够用,也不用再加依赖。
// 表格、图片、脚注都不支持,要用再加。

import { createElement as h } from "react";

const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

function inline(text, keyPrefix) {
  const parts = text.split(INLINE).filter((part) => part !== "");
  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("`") && part.endsWith("`")) {
      return h("code", { key, className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground" }, part.slice(1, -1));
    }
    if (part.startsWith("**") && part.endsWith("**")) return h("strong", { key, className: "font-semibold text-foreground" }, part.slice(2, -2));
    if (part.startsWith("*") && part.endsWith("*")) return h("em", { key }, part.slice(1, -1));
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      const external = /^https?:\/\//.test(link[2]) && !link[2].startsWith("https://www.forgent3d.com");
      return h("a", { key, href: link[2], className: "text-brand underline underline-offset-2 transition-colors hover:text-brand/80", ...(external ? { target: "_blank", rel: "noreferrer" } : {}) }, link[1]);
    }
    return part;
  });
}

/** Markdown 文本 → React 元素数组。`slug` 只用来生成 key。 */
export function renderMarkdown(source, slug = "md") {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let block = 0;
  const key = () => `${slug}-${block++}`;
  const flushParagraph = (buffer) => {
    const text = buffer.join(" ").trim();
    if (text) out.push(h("p", { key: key(), className: "my-5 leading-8 text-muted-foreground" }, inline(text, key())));
  };
  let paragraph = [];
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      flushParagraph(paragraph);
      paragraph = [];
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      out.push(h("pre", { key: key(), className: "my-6 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm leading-6 text-foreground" }, h("code", null, code.join("\n"))));
      continue;
    }
    if (/^#{2,3} /.test(line)) {
      flushParagraph(paragraph);
      paragraph = [];
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#{2,3} /, "");
      out.push(h(level === 2 ? "h2" : "h3", { key: key(), className: level === 2 ? "mt-12 text-2xl font-semibold text-foreground" : "mt-8 text-lg font-semibold text-foreground" }, inline(text, key())));
      i++;
      continue;
    }
    if (/^(---|\*\*\*)\s*$/.test(line)) {
      flushParagraph(paragraph);
      paragraph = [];
      out.push(h("hr", { key: key(), className: "my-10 border-border/60" }));
      i++;
      continue;
    }
    if (/^> /.test(line)) {
      flushParagraph(paragraph);
      paragraph = [];
      const quote = [];
      while (i < lines.length && /^> ?/.test(lines[i])) quote.push(lines[i++].replace(/^> ?/, ""));
      out.push(h("blockquote", { key: key(), className: "my-6 border-l-2 border-brand/40 pl-4 italic leading-8 text-muted-foreground" }, inline(quote.join(" "), key())));
      continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      flushParagraph(paragraph);
      paragraph = [];
      const ordered = /^\d+\. /.test(line);
      const items = [];
      while (i < lines.length && (ordered ? /^\d+\. / : /^- /).test(lines[i])) {
        let item = lines[i++].replace(ordered ? /^\d+\. / : /^- /, "");
        // 缩进两格的续行归上一条
        while (i < lines.length && /^ {2,}\S/.test(lines[i]) && !/^ {2,}(- |\d+\. )/.test(lines[i])) item += " " + lines[i++].trim();
        items.push(item);
      }
      out.push(
        h(
          ordered ? "ol" : "ul",
          { key: key(), className: `my-5 space-y-2 pl-6 leading-8 text-muted-foreground ${ordered ? "list-decimal" : "list-disc"}` },
          items.map((item, index) => h("li", { key: `${slug}-li-${block}-${index}` }, inline(item, `${slug}-li-${block}-${index}`))),
        ),
      );
      continue;
    }
    if (line.trim() === "") {
      flushParagraph(paragraph);
      paragraph = [];
      i++;
      continue;
    }
    paragraph.push(line);
    i++;
  }
  flushParagraph(paragraph);
  return out;
}

/** 正文的纯文本(去掉标记),给摘要和 schema 的 articleBody 用。 */
export function markdownToText(source) {
  return source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#{1,6} /gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^> ?/gm, "")
    .replace(/^(- |\d+\. )/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}
