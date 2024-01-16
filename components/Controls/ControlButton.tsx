import { ReactNode } from "react";
import { Button } from "@nextui-org/react";

type Props = {
  id: string;
  children: ReactNode;
  onClick: (identifier: string) => void;
};
export default function ControlButton({ id, children, onClick }: Props) {
  const handleClick = () => {
    onClick(id)
  }
  return <Button onClick={() => handleClick()}>{children}</Button>;
}