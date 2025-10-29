interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorIndex?: number;
}

const brandColors = [
  '#61a94e', // Green
  '#236189', // Blue
];

const getInitials = (name: string): string => {
  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

const sizeClasses = {
  sm: 'w-[43px] h-[43px] text-[14px]',
  md: 'w-16 h-16 text-xl',
  lg: 'w-[80px] h-[80px] text-[28px] md:w-[90px] md:h-[90px] md:text-[32px]',
  xl: 'w-[120px] h-[120px] text-[42px] lg:w-[161px] lg:h-[161px] lg:text-[56px]',
};

export default function Avatar({ name, size = 'md', colorIndex = 0 }: AvatarProps) {
  const initials = getInitials(name);
  const backgroundColor = brandColors[colorIndex % brandColors.length];

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{ backgroundColor }}
    >
      <span className="font-['Poppins'] font-semibold text-white">
        {initials}
      </span>
    </div>
  );
}
