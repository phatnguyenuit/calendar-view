import { memo } from 'react';

export const MoreIconComponent: React.FC = () => (
  <svg
    width="11"
    height="3"
    viewBox="0 0 11 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="5.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="9.5" cy="1.5" r="1.5" fill="#C4C4C4" />
  </svg>
);

const MoreIcon = memo(MoreIconComponent);
MoreIcon.displayName = 'MoreIcon';

export default MoreIcon;
