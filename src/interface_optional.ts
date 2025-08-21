import type { Person } from "./interface";

interface PersonOptional extends Partial<Person> {
    firstname: string
}


let persona: PersonOptional = {
    firstname: "Joaquin"
};

console.log(persona);
