package com.spring.student.demo.configure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.spring.student.demo.model.student;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class ConfigureRepositoryRestConfigration implements RepositoryRestConfigurer {

    private EntityManager entityManager;
    
    
    public void disableHttpMethods(Class theClass , RepositoryRestConfiguration config , HttpMethod[] unSupportedMethods) {
    	 config.getExposureConfiguration()
         .forDomainType(theClass)
         .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unSupportedMethods)))
         .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unSupportedMethods));
    }
    @Autowired
    public ConfigureRepositoryRestConfigration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    	 HttpMethod[] unsupported = {HttpMethod.GET,HttpMethod.POST,HttpMethod.DELETE,HttpMethod.PUT};
    	 disableHttpMethods(student.class,config,unsupported);
         exposeIds(config);
    }

    public void exposeIds(RepositoryRestConfiguration config){
        // - get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // - create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();

        // - get the entity types for the entities
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }

        // - expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}