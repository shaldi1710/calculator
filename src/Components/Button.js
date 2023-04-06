import "./Button.css";

const Button = ({ symbol, color, handleClick, className, type }) => {
  return (
    <div
      onClick={() => handleClick(type, symbol)}
      className={`${className} button-wrapper`}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
