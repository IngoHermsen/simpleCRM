export class User {
    firstName: string;
    lastName: string;
    birthDateTimestamp: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDateTimestamp = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email: '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDateTimestamp: this.birthDateTimestamp,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email
        }

    }
}