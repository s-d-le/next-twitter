import { IconType } from "react-icons/lib/esm/iconBase";

interface SidebarMenuItemProps {
  text: string;
  Icon: IconType;
}

export default function SidebarMenuItem({ text, Icon }: SidebarMenuItemProps) {
  return (
    <div>
      <Icon className="h-7" />
      <span>{text}</span>
    </div>
  );
}
