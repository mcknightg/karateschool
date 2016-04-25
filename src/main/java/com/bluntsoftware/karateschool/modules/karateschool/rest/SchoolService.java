package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.School;
import com.bluntsoftware.karateschool.modules.karateschool.repository.SchoolRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolSchoolService")
@RequestMapping(value = "/karateschool/school")
@Transactional
@Qualifier("karateschool")

public class SchoolService extends CustomService<School,Integer, SchoolRepository> {


}
