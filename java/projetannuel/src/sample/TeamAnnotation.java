package sample;


import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Documented
@Retention(RetentionPolicy.SOURCE)
@Inherited
public @interface TeamAnnotation {
    int id();
    String name();
    String shortname();
    String crestUrl();
    String address();
    String phone();
    String website();
    String email();
    int founded();
    String venue();
}
