import { IconType } from "react-icons/lib/esm/iconBase";

interface SidebarMenuItemProps {
  text: string;
  Icon: IconType;
  active?: boolean;
}

export default function SidebarMenuItem({
  text,
  Icon,
  active,
}: SidebarMenuItemProps) {
  return (
    <div className="hoverEffect flex h-10 items-center justify-center space-x-3 p-2 text-lg text-gray-700 xl:justify-start">
      <Icon size={25} />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
