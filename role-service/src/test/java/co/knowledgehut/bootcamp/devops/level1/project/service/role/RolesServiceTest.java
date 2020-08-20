package co.knowledgehut.bootcamp.devops.level1.project.service.role;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RolesServiceTest {
    @Test
    public void returnAll3roles() {
        RolesService rolesService = new RolesService();
        assertEquals(3, rolesService.getRoles().size());
    }
}