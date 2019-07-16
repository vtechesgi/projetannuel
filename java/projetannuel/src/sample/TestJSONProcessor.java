package sample;


import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

@SupportedAnnotationTypes(value = { "TeamAnnotation"})
@SupportedSourceVersion(SourceVersion.RELEASE_8)
public class TestJSONProcessor extends AbstractProcessor {

    List<TeamAnnotation> list;
    FileOutputStream fw = null;

    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv){
        list = new ArrayList<>();

        System.out.println("Début du traitement HTML!");

        for(TypeElement te : annotations){
            for(Element element : roundEnv.getElementsAnnotatedWith(te)){
                String name = element.getClass().toString();
                TeamAnnotation teamAnnotation = element.getAnnotation(TeamAnnotation.class);

                if(teamAnnotation != null){
                    list.add(teamAnnotation);
                }
            }
        }
        System.out.println("Fin du traitement HTML");

        generateJSON(list);
        return true;
    }

    private void generateJSON(List<TeamAnnotation> list){
        StringBuilder json = new StringBuilder();
        json.append("[");
        json.append("{");

        Iterator<TeamAnnotation> it = list.iterator();

        if(list.isEmpty())return;

        File htmlFile = new File("Testannotation.json");

        try {
            fw = new FileOutputStream(htmlFile);
        } catch (IOException e){
            e.printStackTrace();
        }

        while(it.hasNext()){
            TeamAnnotation testannotation = it.next();
            json.append("},{");
            String style = "";
            switch(testannotation.name()){
                case "lastname":
                    style = "style=\"color:green;border:1px solid black\"";
                    break;
                case "grah":
                    style = "style=\"color:purple;border:1px solid black\"";
                    break;
            }
        }

        json.append("}");
        json.append("]");

        try {
            fw.write(json.toString().getBytes());
        } catch (IOException e){
            e.printStackTrace();
        } finally{
            try{
                fw.close();
            } catch (IOException ex){
                ex.printStackTrace();
            }
        }
    }
}