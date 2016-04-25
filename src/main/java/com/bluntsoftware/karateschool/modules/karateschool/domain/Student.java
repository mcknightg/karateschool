package com.bluntsoftware.karateschool.modules.karateschool.domain;


import java.io.Serializable;
import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.Date;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.WeakHashMap;
import java.sql.Time;
import java.math.BigDecimal;
import java.math.BigInteger;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.proxy.HibernateProxy;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.annotation.*;
                                        
@Entity
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@Table(name = "\"student\"")
public class Student implements CustomDomain<Student> {

    private static final Map< Serializable, Integer > SAVED_HASHES = Collections.synchronizedMap(new WeakHashMap< Serializable, Integer >());
    private volatile Integer hashCode;
    private Integer id = null;
    private String name;
    private School school;
    private String rank;
    private String avatar;
    private String gender;
    private Date birthday;
    private Boolean isInstructor;
    private Boolean owner;

    public Student() { }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_id_seq")
    @SequenceGenerator(name = "student_id_seq", allocationSize = 1, sequenceName = "student_id_seq", initialValue = 1)
    @Column(name = "\"id\"")
    public Integer getId() {
        return id;
    }
    public void setId(Integer id){
            if ((this.id == null || this.id == 0) && id != null && hashCode != null) {
        SAVED_HASHES.put(id, hashCode);
        }
        this.id = id;
    }

    @Column(name = "\"name\"", length = 255)
    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @org.hibernate.annotations.Cascade({org.hibernate.annotations.CascadeType.SAVE_UPDATE})
    @JoinColumn(name = "\"school\"", nullable = true )
    public School getSchool() {
        return school;
    }
    public void setSchool(School school){
        this.school = school;
    }

    @Column(name = "\"rank\"", length = 255)
    public String getRank() {
        return rank;
    }
    public void setRank(String rank){
        this.rank = rank;
    }

    @Column(name = "\"avatar\"", length = 255)
    public String getAvatar() {
        return avatar;
    }
    public void setAvatar(String avatar){
        this.avatar = avatar;
    }

    @Column(name = "\"gender\"", length = 255)
    public String getGender() {
        return gender;
    }
    public void setGender(String gender){
        this.gender = gender;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomTimestampSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"birthday\"")
    public Date getBirthday() {
        return birthday;
    }
    public void setBirthday(Date birthday){
        this.birthday = birthday;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomBooleanSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"isInstructor\"")
    public Boolean getIsInstructor() {
        return isInstructor;
    }
    public void setIsInstructor(Boolean isInstructor){
        this.isInstructor = isInstructor;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomBooleanSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"owner\"")
    public Boolean getOwner() {
        return owner;
    }
    public void setOwner(Boolean owner){
        this.owner = owner;
    }

    @Transient
    public Class<?> getClassType() {
        return Student.class;
    }

    @Override
    public int hashCode() {
          if (hashCode == null) {
            synchronized (this) {
                if (hashCode == null) {
                    if (getId() != null) {
                        hashCode = SAVED_HASHES.get(getId());
                    }
                    if (hashCode == null) {
                        if ( getId() != null && getId() != 0) {
                            hashCode = new Integer(getId().hashCode());
                        } else {
                            hashCode = new Integer(super.hashCode());
                        }
                    }
                }
            }
        }
        return hashCode;
    }

    public int compareTo(Student student) {
        return 0;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        Student entity = (Student)super.clone();
        entity.setId(null);
        return entity;
    }
}