package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.Rcriteria;
import com.bluntsoftware.karateschool.modules.karateschool.repository.RcriteriaRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolRcriteriaService")
@RequestMapping(value = "/karateschool/rcriteria")
@Transactional
@Qualifier("karateschool")

public class RcriteriaService extends CustomService<Rcriteria,Integer, RcriteriaRepository> {


}
