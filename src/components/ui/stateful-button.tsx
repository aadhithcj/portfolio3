"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export type ButtonStatus = "idle" | "loading" | "success" | "error";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: ButtonStatus;
  onAction?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) =>
    | Promise<boolean | "success" | "error" | void>
    | boolean
    | "success"
    | "error"
    | void;
}

export const Button = ({
  className,
  children,
  icon,
  status,
  onAction,
  onClick,
  disabled,
  type = "button",
  ...buttonProps
}: ButtonProps) => {
  const [internalStatus, setInternalStatus] = useState<ButtonStatus>("idle");
  const currentStatus = status ?? internalStatus;

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentStatus === "loading") return;

    if (onAction || onClick) {
      if (!status) setInternalStatus("loading");
      try {
        let result: unknown = true;
        if (onAction) {
          result = await onAction(event);
        } else if (onClick) {
          result = await onClick(event);
        }

        if (!status) {
          if (result === false || result === "error") {
            setInternalStatus("error");
            setTimeout(() => setInternalStatus("idle"), 2400);
          } else {
            setInternalStatus("success");
            setTimeout(() => setInternalStatus("idle"), 2400);
          }
        }
      } catch {
        if (!status) {
          setInternalStatus("error");
          setTimeout(() => setInternalStatus("idle"), 2400);
        }
      }
    }
  };

  return (
    <button
      type={type}
      disabled={disabled || currentStatus === "loading"}
      className={cn(
        "group relative flex h-10 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-lime px-4 font-mono text-xs font-semibold text-black transition-colors duration-200 hover:bg-lime/90 focus-visible:outline-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-80",
        className
      )}
      onClick={handleClick}
      {...buttonProps}
    >
      <span className="relative flex size-4 items-center justify-center shrink-0">
        {currentStatus === "loading" && <Loader />}
        {currentStatus === "success" && <CheckIcon />}
        {currentStatus === "error" && <CrossIcon />}
        {currentStatus === "idle" && (icon ?? null)}
      </span>
      <span className="flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 animate-spin text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 text-black animate-in zoom-in-75 duration-200"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );
};

export const CrossIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 text-red-600 animate-in zoom-in-75 duration-200"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  );
};
