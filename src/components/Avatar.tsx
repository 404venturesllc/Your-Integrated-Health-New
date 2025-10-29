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
  sm: 'w-10 h-10 text-sm',
  md: 'w-16 h-16 text-xl',
  lg: 'w-24 h-24 text-3xl',
  xl: 'w-32 h-32 text-4xl lg:w-40 lg:h-40 lg:text-5xl',
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
