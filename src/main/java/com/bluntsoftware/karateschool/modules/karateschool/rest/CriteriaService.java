package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.Criteria;
import com.bluntsoftware.karateschool.modules.karateschool.repository.CriteriaRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolCriteriaService")
@RequestMapping(value = "/karateschool/criteria")
@Transactional
@Qualifier("karateschool")

public class CriteriaService extends CustomService<Criteria,Integer, CriteriaRepository> {


}
