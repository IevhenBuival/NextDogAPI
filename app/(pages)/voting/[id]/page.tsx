import { Metadata } from "next";

type TProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "Dog Voting",
  description: "Dog Voting",
};

export default function Voting({ params }: TProps) {
  return <h1>Voting{params.id}</h1>;
}
