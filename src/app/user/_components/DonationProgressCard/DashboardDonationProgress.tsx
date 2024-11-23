import { Progress } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";

type DashboardDonationProgressProps = {
    name: string;
    percentage: number;
    daysLeft: number;
}

const DashboardDonationProgress = (
    { name, percentage, daysLeft } : DashboardDonationProgressProps 
) => {
    return (
        <div className="grid grid-flow-row lg:max-w-4xl mx-10 gap-y-2">
            <Progress
                label={name ? name : "Donation Progress"}
                size="lg"
                radius="sm"
                value={percentage | 0}
                valueLabel={`${daysLeft} days left . ${percentage}%`}
                maxValue={100}
                color="primary"
                showValueLabel={true}
            />
            <div className="flex justify-end gap-4">
                {percentage < 100 &&
                <Button 
                    size="sm" 
                    variant="solid" 
                    radius="sm"
                    color="success"
                ><span className="lg:text-base">Pay my bill</span></Button>
                }
                <Button 
                    size="sm" 
                    variant="solid" 
                    radius="sm"
                    color="secondary"
                ><span className="lg:text-base">Edit bill</span></Button>
                <Button 
                    size="sm" 
                    variant="solid" 
                    radius="sm"
                    color="danger"
                ><span className="lg:text-base">Sponser request</span></Button>
            </div>
        </div>
    );
};

export default DashboardDonationProgress;