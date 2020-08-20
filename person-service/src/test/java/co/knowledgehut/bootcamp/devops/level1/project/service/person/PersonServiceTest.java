package co.knowledgehut.bootcamp.devops.level1.project.service.person;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PersonServiceTest {
    @Test
    public void returnAll3people() {
        PersonService personService = new PersonService();
        assertEquals(3, personService.getPeople().size());
    }
}