package co.knowledgehut.bootcamp.devops.level1.project.service.role;

public class Role {
    private String id;
    private String name;

    public Role(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
