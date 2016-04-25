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
@Table(name = "\"criteria\"")
public class Criteria implements CustomDomain<Criteria> {

    private static final Map< Serializable, Integer > SAVED_HASHES = Collections.synchronizedMap(new WeakHashMap< Serializable, Integer >());
    private volatile Integer hashCode;
    private Integer id = null;
    private String name;
    private String technique;
    private Boolean techform;
    private Boolean techset;
    private String owner;

    public Criteria() { }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "criteria_id_seq")
    @SequenceGenerator(name = "criteria_id_seq", allocationSize = 1, sequenceName = "criteria_id_seq", initialValue = 1)
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

    @Column(name = "\"technique\"", length = 255)
    public String getTechnique() {
        return technique;
    }
    public void setTechnique(String technique){
        this.technique = technique;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomBooleanSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"techform\"")
    public Boolean getTechform() {
        return techform;
    }
    public void setTechform(Boolean techform){
        this.techform = techform;
    }

    @JsonSerialize(using = com.genx.framework.jpa.serializers.CustomBooleanSerializer.class, include=JsonSerialize.Inclusion.NON_NULL)
    @Column(name = "\"techset\"")
    public Boolean getTechset() {
        return techset;
    }
    public void setTechset(Boolean techset){
        this.techset = techset;
    }

    @Column(name = "\"owner\"", length = 255)
    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner){
        this.owner = owner;
    }

    @Transient
    public Class<?> getClassType() {
        return Criteria.class;
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

    public int compareTo(Criteria criteria) {
        return 0;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        Criteria entity = (Criteria)super.clone();
        entity.setId(null);
        return entity;
    }
}