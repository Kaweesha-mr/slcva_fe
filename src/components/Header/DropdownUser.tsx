import { HeaderConfigTypes } from "@/types";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@nextui-org/react";

interface DropdownUserProps {
  Data: HeaderConfigTypes.DropdownItem[];
}

const DropdownUser: React.FC<DropdownUserProps> = ({ Data }) => {

  return (


<div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform dark:text-gray-5"
            description="@tonyreichert"
            name="Tony Reichert"
            
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          
        {Data.map((item, index) => (
            <DropdownItem className="dark:text-gray-5 " key={index} color={item.color || undefined} description={item.Description || undefined} startContent={item.Icon || undefined} onClick={item.Action}>
              {item.Title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownUser;
