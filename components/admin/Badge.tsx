interface BadgeProps {
  children: React.ReactNode;
  variant?: string;
}

export function Badge({ children, variant = "bg-gray-100 text-gray-800" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variant}`}>
      {children}
    </span>
  );
}