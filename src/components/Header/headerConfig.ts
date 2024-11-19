
import { HeaderConfigTypes } from "@/types";


const headerConfig:HeaderConfigTypes.HeaderConfig = {
    Title: 'Project Name',
    SubTitle: 'A Next.js app with NextUI',

    User: {
        Name: 'Tony Reichert',
        Avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        Dropdown: [
            {
                Title: 'Settings',
                Icon: '',
                Description:'',
                color: "",
                Action: () => {
                    // what need to happen when this item is clicked
                }
                
            },
            {
                Title: 'Team Settings',
                Icon: '',
                Description:'',
                color: '',
                Action: () => {
                    // what need to happen when this item is clicked
                }
                
            },{
                Title: 'Analytics',
                Icon: '',
                Description:'',
                color: '',
                Action: () => {
                    // what need to happen when this item is clicked
                }
                
            },{

                Title: 'System',
                Icon: '',
                Description:'',
                color: '',
                Action: () => {
                    // what need to happen when this item is clicked
                }
                
            },{
                Title: 'Configurations',
                Icon: '',
                Description:'',
                color: '',
                Action: () => {
                    // what need to happen when this item is clicked
                }
                
            },{
                Title: 'Log Out',
                Icon: '',
                Description:'',
                color: 'danger',
                Action: () => {
                    // what need to happen when this item is clicked
                }

            }
        ] as HeaderConfigTypes.DropdownItem[]
    }
}

export default headerConfig;