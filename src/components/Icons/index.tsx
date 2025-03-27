interface ArrowIconProps {
  stroke?: string;
  className?: string;
}

export const ArrowBackIcon: React.FC<ArrowIconProps> = ({
  stroke = '#CDD5FF',
  className = '',
}) => {
  return (
    <svg
      className={className}
      width='13'
      height='16'
      viewBox='0 0 13 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.5 1L2.5 7.99991L10.499 15' stroke={stroke} strokeWidth='2' />
    </svg>
  );
};

export const ArrowForwardIcon: React.FC<ArrowIconProps> = ({
  stroke = '#CDD5FF',
  className = '',
}) => {
  return (
    <svg
      className={className}
      width='13'
      height='16'
      viewBox='0 0 13 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L9 7.99991L1.00098 15' stroke={stroke} strokeWidth='2' />
    </svg>
  );
};
