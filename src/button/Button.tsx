import "./css/button.scss";

import React from "react";

export interface ButtonProps {
  /**
   * 按钮的内容
   */
  label?: string;
  /**
   * 设置按钮类型
   */
  type?: "default" | "primary" | "dashed" | "text" | "link";
  /**
   * 设置按钮大小
   */
  size?: "large" | "medium" | "small";
  /**
   * 设置危险按钮
   */
  danger?: boolean;
  /**
   * 设置按钮失效状态
   */
  disabled?: boolean;
  /**
   * 幽灵属性，使按钮背景透明
   */
  ghost?: boolean;
  /**
   * 设置按钮载入状态
   */
  loading?: boolean;
  /**
   * 点击按钮时的回调
   */
  onClick?: () => void;
}
/**
 * 按钮用于开始一个即时操作
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const typeMap: Record<string, string> = {
    default: "hw-button-default",
    primary: "hw-button-primary",
    dashed: "hw-button-dashed",
    text: "hw-button-text",
    link: "hw-button-link",
  };

  const sizeMap: Record<string, string> = {
    large: "hw-button-large",
    medium: "hw-button-medium",
    small: "hw-button-small",
  };

  const booleanMap: Record<string, string> = {
    danger: "hw-button-dangerous",
    disabled: "hw-button-disabled",
    ghost: "hw-button-background-ghost",
    loading: "hw-button-loading",
  };

  const { type, size, ...p } = props;
  let className: string = "hw-button";
  // 设置按钮类型
  let classType = typeMap["default"];
  if (type && Object.prototype.hasOwnProperty.call(typeMap, type)) {
    classType = typeMap[type];
  }
  className = `${className} ${classType}`;

  // 设置按钮大小
  let classSize = "";
  if (size && Object.prototype.hasOwnProperty.call(sizeMap, size)) {
    classSize = sizeMap[size];
  }
  className = `${className} ${classSize}`;

  // 设置布尔状态
  for (const booleanKey of Object.keys(booleanMap)) {
    if (
      Object.prototype.hasOwnProperty.call(p, booleanKey) &&
      p[booleanKey as keyof typeof p]
    ) {
      className += ` ${booleanMap[booleanKey]}`;
    }
  }

  const { loading, label } = p;
  // 设置执行中状态
  const loadingSpan = (
    <span className="hw-button-loading-animation">
      <svg
        viewBox="0 0 1024 1024"
        className="hw-button-loading-svg"
        focusable="false"
        data-icon="loading"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
  );

  return (
    <button type="button" className={className} onClick={p.onClick} {...p}>
      {loading && loadingSpan}
      <span>{label || ""}</span>
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  size: "medium",
  danger: false,
  disabled: false,
  ghost: false,
  loading: false,
};
