package sample;

import java.io.File;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.jar.JarFile;

public class PluginsLoader {

    private String[] files;
    private ArrayList classStringPlugins;
    private ArrayList classIntPlugins;

    public PluginsLoader(){
        this.classStringPlugins = new ArrayList();
        this.classIntPlugins = new ArrayList();
    }

    public PluginsLoader(String[] files){
        this();
        this.files = files;
    }

    public void setFiles(String[] files){
        this.files = files;
    }

    public StringPlugins[] loadAllStringPlugins() throws Exception{
        this.initializeLoader();
        StringPlugins[] tmpPlugins = new StringPlugins[this.classStringPlugins.size()];
        for(int i = 0; i < tmpPlugins.length; i++){
            tmpPlugins[i] = (StringPlugins)((Class)this.classStringPlugins.get(i)).newInstance();
        }
        return tmpPlugins;
    }

    public IntPlugins[] loadAllIntPlugins() throws Exception{
        this.initializeLoader();
        IntPlugins[] tmpPlugins = new IntPlugins[this.classIntPlugins.size()];
        for(int i = 0; i < tmpPlugins.length; i++){
            tmpPlugins[i] = (IntPlugins)((Class)this.classIntPlugins.get(i)).newInstance();
        }
        return tmpPlugins;
    }

    private void initializeLoader() throws Exception{
        if(this.files == null || this.files.length == 0){
            throw new Exception("Pas de fichier spécifié");
        }
        if(this.classIntPlugins.size() != 0 || this.classStringPlugins.size() != 0){
            return;
        }

        File[] f1 = new File[this.files.length];
        URLClassLoader loader;
        String tmp = "";
        Enumeration enumeration;
        Class tmpClass = null;
        for(int i = 0; i < f1.length; i++){
            f1[i] = new File(this.files[i]);
            if( !f1[i].exists()){
                break;
            }
            URL u = f1[i].toURL();
            loader = new URLClassLoader(new URL[] {u});

            JarFile jar = new JarFile(f1[i].getAbsolutePath());

            enumeration = jar.entries();

            while (enumeration.hasMoreElements()){
                tmp = enumeration.nextElement().toString();
                if(tmp.length() > 6 && tmp.substring(tmp.length()-6).compareTo(".class") == 0){
                    tmp = tmp.substring(0, tmp.length()-6);
                    tmp = tmp.replace("/", ".");

                    tmpClass = Class.forName(tmp, true, loader);
                    for(int j = 0; j < tmpClass.getInterfaces().length; j++){
                        if(tmpClass.getInterfaces()[i].getName().toString().equals("zgeg")){
                            this.classStringPlugins.add(tmpClass);
                        } else {
                            if(tmpClass.getInterfaces()[i].getName().toString().equals("IntPlugins")){
                                this.classIntPlugins.add(tmpClass);
                            }
                        }
                    }
                }
            }
        }
    }
}
