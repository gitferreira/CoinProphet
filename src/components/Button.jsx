

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11  hover:text-n-1  border border-[2px] border-n-8 shadow-2xl rounded-l-2xl rounded-b-2xl bg-table-gradient hover:bg-table-gradient-lighter ${
    px || "px-7"
  } ${white ? "text-n-1/70 bg-table-gradient-lighter border border-[2px] !border-n-1" : "text-n-1"} ${className || ""}
  `;

  

  const spanClasses = `relative z-10 transition-bg `;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
  
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
   
    </a>
  );

  return href ? renderLink() : renderButton()
};

export default Button;
