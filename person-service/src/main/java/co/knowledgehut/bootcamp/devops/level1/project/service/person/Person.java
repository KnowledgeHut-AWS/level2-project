package co.knowledgehut.bootcamp.devops.level1.project.service.person;

public class Person {
    private String id;
    private String firstName;
    private String lastName;
    private String role;
    private int age;

    public Person(String id, String firstName, String lastName, String role, int age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getRole() {
        return role;
    }

    public int getAge() {
        return age;
    }
}
