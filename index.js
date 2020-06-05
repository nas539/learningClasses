class Instructor {
    constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }
    renderDetails() {
        console.log(`${this.name}: ${this.role}`)
    }

    static helloWorld() {
        console.log("Hi there");
    }

    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}
const brayden = new Instructor({name: "Brayden", role: "Teacher"});
const jon = new Instructor({name: "JS"});
console.log(jon.name);
jon.renderDetails();
brayden.renderDetails();
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
)