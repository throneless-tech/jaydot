"use client";
import { useRowLabel } from "@payloadcms/ui";

export const ArrayRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ title?: string, name?: string }>();

  const customLabel = data.name || data.title || `Item ${String(rowNumber).padStart(2, '0')} `

  return <div>{customLabel}</div>
};

export default ArrayRowLabel;