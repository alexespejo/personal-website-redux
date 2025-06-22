interface ButtonProps {
 icon?: React.ReactNode;
 className?: string;
 children?: React.ReactNode;
 href?: string;
 target?: string;
}

const Button = ({ icon, className, children, href, target }: ButtonProps) => {
 const Component = href ? "a" : "button";

 return (
  <Component
   href={href}
   target={target}
   className={`retro-border-btn retro-border p-1 text-gray-600 flex items-center h-9 text-sm ${className}`}
  >
   {icon} {children}
  </Component>
 );
};

export default Button;
