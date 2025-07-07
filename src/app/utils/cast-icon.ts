import type {  ComponentProps } from "react";

export function castIcon<T>(icon: T) {
  return icon as unknown as React.FC<ComponentProps<"svg">>;
}
