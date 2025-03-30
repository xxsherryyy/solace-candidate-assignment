export type Advocate = {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialties: any[]; // or use a more specific type if you know the structure
    yearsOfExperience: number;
    phoneNumber: bigint;
    createdAt: Date;
  };