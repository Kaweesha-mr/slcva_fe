// Represents the donation history of a user.

export type donationHistory = {
  id: string;
  name: string;
  date: string;
  amount: number;
  photo: string;
  isAnonymous: boolean;
};


// Represents the progress of a donation.

export type donationProgress = {
  id: string;
  name: string;
  percentage: number;
  daysLeft: number;
};
