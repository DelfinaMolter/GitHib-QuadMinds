
function Button({children, onClick}) {

  return (
    <button className="flex flex-row items-center gap-2" onClick={onClick}>
      {children}
    </button>

  );
}

export default Button;