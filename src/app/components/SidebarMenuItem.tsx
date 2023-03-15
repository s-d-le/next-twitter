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
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3 h-10">
      <Icon size={25} />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
