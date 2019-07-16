package sample;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import java.util.Set;

public class TestProcessor extends AbstractProcessor {

    @Override
    public boolean process(
        Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        System.out.println("Début du traitement de la console");

        for(TypeElement te : annotations){
            System.out.println("Traitement annotation " + te.getQualifiedName());

            for(Element element : roundEnv.getElementsAnnotatedWith(te)){
                String name = element.getClass().toString();

                System.out.println("---------------------");

                System.out.println("\n Type d'élément annoté : " + element.getKind() + "\n");

                System.out.println("\t --> Traitement de l'élément : "+ element.getSimpleName() + "\n");

                System.out.println("enclosed elements : " + element.getEnclosedElements());
                System.out.println("as type : " + element.asType());
                System.out.println("enclosing element : " + element.getEnclosingElement() + "\n");

                Testannotation test = element.getAnnotation(Testannotation.class);

                if (test != null){
                    System.out.println("\t\t Id : "+ test.id());
                    System.out.println("\t\t Nom : "+ test.name());
                    System.out.println("\t\t Phone : "+ test.phone());
                    System.out.println("\t\t Website : "+ test.website());
                    System.out.println("\t\t Shortname : "+ test.shortname());
                    System.out.println("\t\t Taille : "+ test.crestUrl());
                    System.out.println("\t\t Address : "+ test.address());
                    System.out.println("\t\t Founded :"+ test.founded());
                    System.out.println("\t\t Email : "+ test.email());
                    System.out.println("\t\t venue "+ test.venue());
                }
            }
        }

        return true;
    }
}