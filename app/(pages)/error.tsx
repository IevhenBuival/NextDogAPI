"use client";
import Message from "../../components/UI/Message/Message";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <Message message={error.message} />;
}
