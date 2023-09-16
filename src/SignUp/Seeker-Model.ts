// models/SignupModel.ts

export interface SignupModel {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    email: string;
    password: string;
    acceptTerms: boolean;
    elementary: string;
    juniorhigh: string;
    seniorhigh: string;
    college: string;
    othereduc: string;
    workexp: string;
    dateCreated: string;
    // chosenInterest: any[];
    type: string;
  }
  