const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      className={`bg-[#FFD200] text-[#111928] w-[110px] h-[40px] rounded-[6px] 
      hover:bg-[#E5E7EB] font-poppins font-semibold text-[16px] leading-[24px] 
      flex items-center justify-center`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;