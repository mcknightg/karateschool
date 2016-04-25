package com.bluntsoftware.karateschool.modules.karateschool.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.karateschool.domain.Rank;
import com.bluntsoftware.karateschool.modules.karateschool.repository.RankRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("karateschoolRankService")
@RequestMapping(value = "/karateschool/rank")
@Transactional
@Qualifier("karateschool")

public class RankService extends CustomService<Rank,Integer, RankRepository> {


}
