interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'outline' | 'silver' | 'cyan';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'dark',
  href,
  onClick,
  className = '',
  target,
  rel,
}) => {
  const baseClasses = 'transition-all duration-300 inline-block text-center';
  const variants = {
    dark: 'btn-dark',
    outline: 'btn-outline-dark',
    silver: 'btn-silver',
    cyan: 'btn-cyan',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
