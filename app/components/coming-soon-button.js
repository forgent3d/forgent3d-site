"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 生成器的「打开生成器」按钮。线上还没接通,先不跳转:点一下把文案换成「正在开发」,
 * 几秒后自己复原。等 app 那边就绪,把 `href` 接回去、删掉 onClick 即可。
 */
export default function ComingSoonButton({ className, label, pendingLabel, ...rest }) {
  const [pending, setPending] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      className={className}
      aria-live="polite"
      onClick={() => {
        setPending(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setPending(false), 2400);
      }}
      {...rest}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
