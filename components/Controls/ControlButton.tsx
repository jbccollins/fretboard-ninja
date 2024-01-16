import { ReactNode } from "react";
import { Button } from "@nextui-org/react";
import { ActiveButtonIdStatus } from "@/lib/types";

type Props = {
  id: string;
  children: ReactNode;
  onClick: (identifier: string) => void;
  status: ActiveButtonIdStatus | null;
  disabled?: boolean;
};
export default function ControlButton({ id, children, onClick, status, disabled }: Props) {
  const handleClick = () => {
    onClick(id)
  }
  const color = status === ActiveButtonIdStatus.CORRECT ? 'success' : status === ActiveButtonIdStatus.INCORRECT ? 'danger' : 'default'
  return <Button disabled={disabled} color={`${color}`} onClick={() => handleClick()}>{children}</Button>;
}