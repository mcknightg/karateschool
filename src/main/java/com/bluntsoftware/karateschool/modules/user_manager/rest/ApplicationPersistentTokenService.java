package com.bluntsoftware.karateschool.modules.user_manager.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.karateschool.modules.user_manager.domain.ApplicationPersistentToken;
import com.bluntsoftware.karateschool.modules.user_manager.repository.ApplicationPersistentTokenRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("user_managerApplicationPersistentTokenService")
@RequestMapping(value = "/user_manager/applicationPersistentToken")
@Transactional
@Qualifier("user_manager")

public class ApplicationPersistentTokenService extends CustomService<ApplicationPersistentToken,Integer, ApplicationPersistentTokenRepository> {


}
