"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>Error:{error.message}</div>;
}
