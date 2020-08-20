package co.knowledgehut.bootcamp.devops.level1.project.service.role;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Arrays.asList;

@CrossOrigin(origins = "*")
@RestController
public class RolesService {
    private final List<Role> roles = asList(
            new Role("1", "Hippy"),
            new Role("2", "Chief Engineer"),
            new Role("3", "Genius")
    );

    @GetMapping
    public List<Role> getRoles() {
        return roles;
    }
}
