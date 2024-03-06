const Button = ({ children, action }) => {
  return (
    <button className="button" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
