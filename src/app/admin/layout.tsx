import DefaultLayout from "@/components/Layouts/DefaultLaout";

const ProjectLayout = ({children}:any) => {
    return ( 
        <DefaultLayout>
            {children}
        </DefaultLayout>
     );
}
 
export default ProjectLayout;