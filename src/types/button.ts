export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  circle?: boolean;
}
