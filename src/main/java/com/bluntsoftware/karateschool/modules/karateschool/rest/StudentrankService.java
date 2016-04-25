package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.Studentrank;
import com.bluntsoftware.karateschool.modules.karateschool.repository.StudentrankRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolStudentrankService")
@RequestMapping(value = "/karateschool/studentrank")
@Transactional
@Qualifier("karateschool")

public class StudentrankService extends CustomService<Studentrank,Integer, StudentrankRepository> {


}
