package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.Student;
import com.bluntsoftware.karateschool.modules.karateschool.repository.StudentRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolStudentService")
@RequestMapping(value = "/karateschool/student")
@Transactional
@Qualifier("karateschool")

public class StudentService extends CustomService<Student,Integer, StudentRepository> {


}
