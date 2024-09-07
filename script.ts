// RahilaNazResume.ts

class RahilaNazResume {
    private _personalInfo: PersonalInfo;
    private _academicQualifications: AcademicQualification[];
    private _professionalQualifications: ProfessionalQualification[];
    private _professionalExperience: ProfessionalExperience[];
    private _professionalResponsibilities: string[];
    private _skills: string[];
    private _interests: string[];

    constructor() {
        this._personalInfo = new PersonalInfo();
        this._academicQualifications = [];
        this._professionalQualifications = [];
        this._professionalExperience = [];
        this._professionalResponsibilities = [];
        this._skills = [];
        this._interests = [];
    }

    // Getters and setters for each property

    // Example usage:
    const rahilaNazResume = new RahilaNazResume();
    rahilaNazResume.personalInfo = new PersonalInfo(
        "Rahila Naz",
        "+92 321 2105 521",
        "rahila.naz321@gmail.com",
        "Analytical Assistant Marketing Manager with 5 years of digital marketing experience...",
        "Muhammad Saqib",
        "42201-8064170-8",
        "21-June-1991",
        "Pakistani",
        "Islam",
        "Married",
    );

    // Add academic qualifications, professional qualifications, professional experience, professional responsibilities, skills, and interests similarly.

    // This code represents a structured approach to encapsulate Rahila Naz's resume data in TypeScript.
}

class PersonalInfo {
    name: string;
    position: string;
    correspondence: string;
    email: string;
    objective: string;
    husbandsName: string;
    cnicNo: string;
    dateOfBirth: string;
    nationality: string;
    religion: string;
    maritalStatus: string;

    constructor(name: string, position: string, correspondence: string, email: string, objective: string, husbandsName: string, cnicNo: string, dateOfBirth: string, nationality: string, religion: string, maritalStatus: string) {
        this.name = name;
        this.position = position;
        this.correspondence = correspondence;
        this.email = email;
        this.objective = objective;
        this.husbandsName = husbandsName;
        this.cnicNo = cnicNo;
        this.dateOfBirth = dateOfBirth;
        this.nationality = nationality;
        this.religion = religion;
        this.maritalStatus = maritalStatus;
    }
}

class AcademicQualification {
    institution: string;
    grade: string;
    year: string;

    constructor(institution: string, grade: string, year: string) {
        this.institution = institution;
        this.grade = grade;
        this.year = year;
    }
}

class ProfessionalQualification {
    title: string;
    institution: string;
    remarks: string;
    year: string;

    constructor(title: string, institution: string, remarks: string, year: string) {
        this.title = title;
        this.institution = institution;
        this.remarks = remarks;
        this.year = year;
    }
}

class ProfessionalExperience {
    position: string;
    employer: string;
    year: string;

    constructor(position: string, employer: string, year: string) {
        this.position = position;
        this.employer = employer;
        this.year = year;
    }
}

// Usage example
// const rahilaNazResume = new RahilaNazResume();
// rahilaNazResume.personalInfo = new PersonalInfo(...);
// rahilaNazResume.academicQualifications = [new AcademicQualification(...)];
// rahilaNazResume.professionalQualifications = [new ProfessionalQualification(...)];
// rahilaNazResume.professionalExperience = [new ProfessionalExperience(...)];
// rahilaNazResume.professionalResponsibilities = ["Coordinate with Brand Manager in developing marketing plan and ..."];
// rahilaNazResume.skills = ["Decision Making", "Mathematics", "Physical Endurance", ...];
// rahilaNazResume.interests = ["Cooking", "Watching Interviews & Talk Shows", "Exploring Things"];