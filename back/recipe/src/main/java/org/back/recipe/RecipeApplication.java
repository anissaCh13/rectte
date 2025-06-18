package org.back.recipe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "org.back.recipe.repository")
@EntityScan(basePackages = "org.back.recipe.entity")
public class RecipeApplication {

  public static void main(String[] args) {
    SpringApplication.run(RecipeApplication.class, args);
  }

}
